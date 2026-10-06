export type AcademicProgramme = {
  id: string;
  name: string;
  aliases: string[];
  description: string;
  hod?: string;
  combinations: string[][];
  careerPaths: string[];
  careerKeywords: string[];
};

export const academicProgrammes: AcademicProgramme[] = [
  {
    id: "science",
    name: "Science",
    aliases: ["science", "general science"],
    description: "Build strong foundations in physics, chemistry, biology, mathematics and computing.",
    hod: "Margaret M. Dodor",
    combinations: [
      ["Additional Mathematics", "Physics", "Biology", "Chemistry", "Physical Education & Health Elective", "Economics"],
      ["Additional Mathematics", "Physics", "Biology", "Chemistry", "Agriculture", "Business Management"],
      ["Additional Mathematics", "Physics", "Chemistry", "Biology", "Computing", "Accounting"],
      ["Additional Mathematics", "Physics", "Chemistry", "Biology", "Geography", "Computing or French"],
      ["Additional Mathematics", "Physics", "Chemistry", "Biology", "Business Management", "Food and Nutrition"]
    ],
    careerPaths: ["Medicine and health sciences", "Engineering and technology", "Scientific research", "Data and computing", "Science education"],
    careerKeywords: ["doctor", "medicine", "medical", "nurse", "nursing", "pharmacy", "engineer", "scientist", "researcher", "data scientist"]
  },
  {
    id: "general-arts",
    name: "General Arts",
    aliases: ["general arts", "arts programme", "arts program"],
    description: "Develop communication, analysis and civic understanding through humanities and social-science subjects.",
    hod: "Mr. Mathew Ganadzi",
    combinations: [
      ["Government", "Geography", "Economics", "Additional Mathematics", "Accounting"],
      ["Additional Mathematics", "Geography", "Economics", "Computing", "Design and Communication Technology"],
      ["Government", "Geography", "History", "Agriculture", "French or Art & Design Studio"],
      ["Government", "History", "Geography", "Ewe", "Food & Nutrition"],
      ["Government", "Economics", "Additional Mathematics", "Business Management", "Clothing & Textiles"],
      ["Government", "Economics", "Geography or History", "Agriculture", "Business Management"],
      ["Music", "Christian Religious Studies", "History", "ICT or PEH Elective", "Performing Arts"]
    ],
    careerPaths: ["Law and public administration", "Media and communication", "Education", "Social sciences", "International relations"],
    careerKeywords: ["journalism", "journalist", "reporter", "news anchor", "media", "communication", "lawyer", "law", "public administrator", "political science", "international relations"]
  },
  {
    id: "business",
    name: "Business",
    aliases: ["business", "business studies"],
    description: "Learn accounting, management, economics and enterprise skills for further study and work.",
    hod: "Mr. Edwin Atitsogbui",
    combinations: [
      ["Accounting", "Business Management", "Economics", "Additional Mathematics", "Agricultural Science"],
      ["Accounting", "Business Management", "Additional Mathematics", "Computing", "Physics or PEH Elective"],
      ["Accounting", "Business Management", "Economics", "ICT", "Government"],
      ["Accounting", "Business Management", "Economics", "French", "Literature in English"]
    ],
    careerPaths: ["Accounting and finance", "Business administration", "Banking", "Entrepreneurship", "Marketing and commerce"],
    careerKeywords: ["accountant", "accounting", "banker", "banking", "finance", "financial analyst", "entrepreneur", "marketing", "business manager"]
  },
  {
    id: "agricultural-science",
    name: "Agricultural Science",
    aliases: ["agricultural science", "agriculture", "agric"],
    description: "Study modern agriculture, food systems, agribusiness and environmental stewardship.",
    hod: "Madam Esther A. Gabla",
    combinations: [
      ["Agriculture", "Chemistry", "Physics", "Business Management", "ICT"],
      ["Agriculture", "Chemistry", "Physics", "Geography", "ICT"],
      ["Agriculture", "Chemistry", "Biology", "Business Management or Geography", "Additional Mathematics"]
    ],
    careerPaths: ["Agriculture and agribusiness", "Food production", "Agricultural extension", "Environmental management", "Veterinary and animal sciences"],
    careerKeywords: ["farmer", "farming", "agronomist", "agribusiness", "agricultural officer", "veterinarian", "veterinary", "animal scientist"]
  },
  {
    id: "home-economics",
    name: "Home Economics",
    aliases: ["home economics", "home econ"],
    description: "Combine food, nutrition, clothing, family life and enterprise with practical learning.",
    hod: "Madam Rejoice Vormawor",
    combinations: [
      ["Management in Living", "Food & Nutrition or Clothing & Textiles", "Biology or Chemistry", "Art & Design Foundation or French", "Economics or Agricultural Science"],
      ["Management in Living", "Food & Nutrition", "Biology", "Art & Design Foundation", "ICT"],
      ["Management in Living", "Food & Nutrition", "Biology", "Art & Design Foundation", "Business Management"],
      ["Management in Living", "Clothing & Textiles", "Biology or Chemistry", "Art & Design Foundation", "ICT"],
      ["Management in Living", "Clothing & Textiles", "Biology or Chemistry", "Art & Design Foundation", "Business Management"]
    ],
    careerPaths: ["Nutrition and dietetics", "Hospitality", "Fashion and textiles", "Education", "Family and consumer sciences"],
    careerKeywords: ["nutritionist", "dietitian", "chef", "catering", "hospitality", "fashion designer", "textile designer", "home economist"]
  },
  {
    id: "visual-performing-arts",
    name: "Visual and Performing Arts",
    aliases: ["visual and performing arts", "visual performing arts", "visual arts", "performing arts"],
    description: "Develop creative practice in visual communication, design, music, drama and performance.",
    hod: "Mr. Saviour Wordzro",
    combinations: [
      ["Art and Design Foundation", "Art and Design Studio", "Additional Mathematics", "Computing", "Design and Communication Technology"],
      ["Art and Design Foundation", "Art and Design Studio", "Design and Communication Technology", "Agricultural Science", "Business Management"],
      ["Art and Design Foundation", "Art and Design Studio", "Performing Art", "Agricultural Science", "ICT"]
    ],
    careerPaths: ["Graphic and product design", "Fine art", "Music and theatre", "Media production", "Creative entrepreneurship"],
    careerKeywords: ["graphic designer", "artist", "painter", "musician", "actor", "theatre", "film", "animator", "creative director"]
  },
  {
    id: "applied-technology",
    name: "Applied Technology",
    aliases: ["applied technology", "technical", "technology"],
    description: "Apply mathematics, design, computing and technical skills to practical problem-solving.",
    combinations: [
      ["Additional Mathematics", "Physics", "Design and Communication Technology", "Building Construction and Wood Technology", "Computing"],
      ["Additional Mathematics", "Physics", "Design and Communication Technology", "Building Construction and Wood Technology", "Geography"]
    ],
    careerPaths: ["Engineering", "Architecture and construction", "Information technology", "Technical education", "Product design"],
    careerKeywords: ["architect", "architecture", "builder", "construction", "carpenter", "product designer", "technician", "technical teacher"]
  },
  {
    id: "languages",
    name: "Languages",
    aliases: ["languages", "language"],
    description: "Strengthen written and spoken communication through Ghanaian and international languages and literature.",
    hod: "Mr. Festus K. Sorkpor",
    combinations: [
      ["Ewe", "Literature in English", "French", "Christian Religious Studies", "ICT"],
      ["Literature in English", "Music", "Ewe", "Performing Arts", "History"],
      ["Literature in English", "Christian Religious Studies", "Government", "French or Ewe", "PEH Elective"]
    ],
    careerPaths: ["Education", "Translation and interpretation", "Media and publishing", "Diplomacy", "Communication"],
    careerKeywords: ["translator", "interpreter", "linguist", "language teacher", "publisher", "editor", "diplomat"]
  }
];
