import { academicProgrammes, type AcademicProgramme } from "@/data/academic-programmes";
import { normalizeQuestion } from "@/lib/ama/matcher";

export type AcademicIntent = "description" | "combinations" | "hod" | "careers" | "career-recommendation";

export type AcademicContext = {
  programmeId: string;
  intent: AcademicIntent;
};

type AcademicResolution = {
  answer: string;
  href: string;
  linkLabel: string;
  context: AcademicContext;
};

function findProgramme(question: string) {
  const normalized = normalizeQuestion(question);
  return academicProgrammes.find((programme) => programme.aliases.some((alias) => normalized.includes(normalizeQuestion(alias))));
}

function findProgrammeForCareer(question: string) {
  const normalized = normalizeQuestion(question);
  for (const programme of academicProgrammes) {
    const career = programme.careerKeywords.find((keyword) => normalized.includes(normalizeQuestion(keyword)));
    if (career) return { programme, career };
  }
  return undefined;
}

function findIntent(question: string): AcademicIntent | undefined {
  const normalized = normalizeQuestion(question);
  if (/\b(combination|combinations|option|options|elective|electives|subjects)\b/.test(normalized)) return "combinations";
  if (/\b(hod|head of department|department head|who leads|who heads)\b/.test(normalized)) return "hod";
  if (/\b(career|careers|job|jobs|profession|study after|future)\b/.test(normalized)) return "careers";
  if (/\b(tell me about|describe|description|what is)\b/.test(normalized)) return "description";
  return undefined;
}

function formatCombinations(programme: AcademicProgramme) {
  return programme.combinations
    .map((subjects, index) => `Option ${String.fromCharCode(65 + index)}: ${subjects.join(", ")}.`)
    .join(" ");
}

export function resolveAcademicQuestion(question: string, previous?: AcademicContext): AcademicResolution | undefined {
  if (/\b(club|society|team)\b/i.test(question)) return undefined;
  const explicitProgramme = findProgramme(question);
  const explicitIntent = findIntent(question);
  const careerMatch = !explicitProgramme ? findProgrammeForCareer(question) : undefined;
  const isContextualFollowUp = /^(what|who|and|what about|how about|tell me)/i.test(question.trim());
  const programme = explicitProgramme || careerMatch?.programme || (isContextualFollowUp && previous
    ? academicProgrammes.find((item) => item.id === previous.programmeId)
    : undefined);
  const intent = careerMatch
    ? "career-recommendation"
    : explicitIntent || (explicitProgramme && /\b(what about|how about)\b/i.test(question) ? previous?.intent : undefined);

  if (!programme || !intent) return undefined;
  const href = `/learning-areas#electives-${programme.id}`;

  if (intent === "career-recommendation" && careerMatch) {
    return {
      answer: `For a career in ${careerMatch.career}, ${programme.name} is the most directly aligned published Learning Area. ${programme.description} Relevant future directions include ${programme.careerPaths.join(", ")}. Final placement and subject choices should be confirmed with ANSECO's academic guidance team.`,
      href,
      linkLabel: `Explore ${programme.name}`,
      context: { programmeId: programme.id, intent }
    };
  }

  if (intent === "combinations") {
    return {
      answer: `${programme.name} has ${programme.combinations.length} published combination${programme.combinations.length === 1 ? "" : "s"}. ${formatCombinations(programme)}`,
      href,
      linkLabel: `View ${programme.name} Combinations`,
      context: { programmeId: programme.id, intent }
    };
  }
  if (intent === "hod") {
    return {
      answer: programme.hod
        ? `The published Head of the ${programme.name} Department is ${programme.hod}.`
        : `ANSECO's published Heads of Departments list does not identify a separate ${programme.name} Head. Please consult the administration page for the current approved academic leadership information.`,
      href: "/about/school-administration#heads-of-departments",
      linkLabel: "View Heads of Departments",
      context: { programmeId: programme.id, intent }
    };
  }
  if (intent === "careers") {
    return {
      answer: `Published career and further-study directions for ${programme.name} include ${programme.careerPaths.join(", ")}.`,
      href,
      linkLabel: `Explore ${programme.name}`,
      context: { programmeId: programme.id, intent }
    };
  }
  return {
    answer: `${programme.name}: ${programme.description}`,
    href,
    linkLabel: `Explore ${programme.name}`,
    context: { programmeId: programme.id, intent: "description" }
  };
}
