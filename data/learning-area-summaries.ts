export type LearningAreaSummary = {
  name: string;
  slug: string;
  description: string;
  majorAreas: string[];
  careerPaths: string[];
};

export const learningAreaSummaries: LearningAreaSummary[] = [
  { name: "Science", slug: "science", description: "Build strong foundations in physics, chemistry, biology, mathematics and computing.", majorAreas: ["Physics and Chemistry", "Biology and environmental science", "Elective mathematics", "Computing and scientific problem-solving"], careerPaths: ["Medicine and health sciences", "Engineering and technology", "Scientific research", "Data and computing", "Science education"] },
  { name: "General Arts", slug: "general-arts", description: "Explore society, governance, history, geography, languages and the humanities.", majorAreas: ["Government and history", "Geography and economics", "Literature and languages", "Religious and social studies"], careerPaths: ["Law and public service", "Journalism and communication", "Education", "Diplomacy and international relations", "Social research"] },
  { name: "Business", slug: "business", description: "Develop practical knowledge in accounting, management, economics and enterprise.", majorAreas: ["Financial accounting", "Business management", "Economics", "Entrepreneurship and enterprise"], careerPaths: ["Accounting and auditing", "Banking and finance", "Business administration", "Marketing and sales", "Entrepreneurship"] },
  { name: "Agriculture", slug: "agricultural-science", description: "Study modern agriculture, food systems, agribusiness and environmental stewardship.", majorAreas: ["Crop and soil science", "Animal production", "Agribusiness", "Environmental stewardship"], careerPaths: ["Agriculture and agribusiness", "Food production", "Agricultural extension", "Environmental management", "Veterinary and animal sciences"] },
  { name: "Home Economics", slug: "home-economics", description: "Gain applied skills in nutrition, textiles, family life and household management.", majorAreas: ["Food and nutrition", "Clothing and textiles", "Family life and management", "Hospitality and practical enterprise"], careerPaths: ["Nutrition and dietetics", "Hospitality management", "Fashion and textile design", "Food entrepreneurship", "Home economics education"] },
  { name: "Visual and Performing Arts", slug: "visual-performing-arts", description: "Develop creative ability through art, design, music and performance.", majorAreas: ["Visual art and design", "Graphic communication", "Music and performance", "Creative production"], careerPaths: ["Graphic and product design", "Fine arts", "Music and performing arts", "Media production", "Creative entrepreneurship"] },
  { name: "Applied Technology", slug: "applied-technology", description: "Combine design, construction, computing, physics and technical problem-solving.", majorAreas: ["Technical drawing and design", "Construction and materials", "Applied physics", "Computing and technical systems"], careerPaths: ["Engineering and construction", "Architecture and drafting", "Information technology", "Technical education", "Skilled technical enterprise"] },
  { name: "Languages", slug: "languages", description: "Strengthen communication through English literature, Ewe, French and related studies.", majorAreas: ["English language and literature", "Ghanaian language studies", "French", "Communication and cultural studies"], careerPaths: ["Teaching and education", "Translation and interpretation", "Journalism and publishing", "Public relations", "Diplomacy and tourism"] }
];
