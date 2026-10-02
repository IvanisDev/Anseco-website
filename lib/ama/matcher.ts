import type { AmaKnowledgeEntry } from "@/data/ama-knowledge";

const fillerWords = new Set([
  "a", "about", "an", "and", "are", "can", "could", "do", "does", "for", "from", "how", "i", "in", "is", "it", "me", "my", "of", "on", "or", "please", "pls", "tell", "the", "to", "what", "when", "where", "which", "who", "why", "with", "you", "your"
]);

export function normalizeQuestion(value: string) {
  return value
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/\bpls\b/g, "please")
    .replace(/\bprogramme(s)?\b/g, "program$1")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function words(value: string) {
  return normalizeQuestion(value).split(" ").filter((word) => word.length > 1 && !fillerWords.has(word));
}

function editDistance(a: string, b: string) {
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let row = 1; row <= a.length; row += 1) {
    let diagonal = previous[0];
    previous[0] = row;
    for (let column = 1; column <= b.length; column += 1) {
      const above = previous[column];
      previous[column] = Math.min(
        previous[column] + 1,
        previous[column - 1] + 1,
        diagonal + (a[row - 1] === b[column - 1] ? 0 : 1)
      );
      diagonal = above;
    }
  }
  return previous[b.length];
}

function fuzzyWordMatch(candidate: string, target: string) {
  if (candidate === target) return 1;
  if (candidate.length < 5 || target.length < 5) return 0;
  const distance = editDistance(candidate, target);
  if (distance === 1) return 0.82;
  if (Math.max(candidate.length, target.length) >= 8 && distance === 2) return 0.62;
  return 0;
}

function scoreEntry(question: string, entry: AmaKnowledgeEntry) {
  const normalized = normalizeQuestion(question);
  const questionWords = words(question);
  let score = 0;

  entry.aliases?.forEach((alias) => {
    const normalizedAlias = normalizeQuestion(alias);
    if (normalized === normalizedAlias) score = Math.max(score, 12);
    else if (normalized.includes(normalizedAlias) || normalizedAlias.includes(normalized)) score = Math.max(score, 8);
    else {
      const aliasWords = words(alias);
      const similarity = aliasWords.reduce((total, aliasWord) => {
        return total + Math.max(0, ...questionWords.map((questionWord) => fuzzyWordMatch(questionWord, aliasWord)));
      }, 0);
      if (aliasWords.length && similarity / aliasWords.length >= 0.7) score = Math.max(score, 5 + similarity);
    }
  });

  Object.entries(entry.keywords || {}).forEach(([keyword, weight]) => {
    const similarity = Math.max(0, ...questionWords.map((questionWord) => fuzzyWordMatch(questionWord, normalizeQuestion(keyword))));
    score += weight * similarity;
  });

  return score;
}

export type IntentMatch = {
  entry?: AmaKnowledgeEntry;
  confidence: "high" | "moderate" | "low";
  clarification?: string[];
};

export function matchAmaIntent(question: string, entries: AmaKnowledgeEntry[]): IntentMatch {
  const normalized = normalizeQuestion(question);

  if (/^(i need |show me |what are |tell me about )?(the )?requirements?$/.test(normalized)) {
    return {
      confidence: "moderate",
      clarification: ["Admission requirements", "Boarding requirements", "Day student requirements", "Transcript requirements"]
    };
  }

  const patternMatch = entries.find((entry) => entry.patterns.some((pattern) => pattern.test(question)));
  if (patternMatch) return { entry: patternMatch, confidence: "high" };

  const ranked = entries
    .map((entry) => ({ entry, score: scoreEntry(question, entry) }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!ranked.length || ranked[0].score < 3) return { confidence: "low" };
  if (ranked[0].score < 6 || (ranked[1] && ranked[0].score - ranked[1].score < 1.5)) {
    return { confidence: "moderate" };
  }
  return { entry: ranked[0].entry, confidence: "high" };
}
