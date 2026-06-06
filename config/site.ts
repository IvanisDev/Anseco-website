export const siteConfig = {
  schoolName: "ANSECO",
  fullName: "Anlo Senior High School",
  motto: "Truth and Service",
  location: "Anloga, Volta Region, Ghana",
  establishedYear: "1959",
  phone: "+233 30 200 0000",
  email: "info@anseco.edu.gh",
  address: "Anlo Senior High School, P.O. Box 20, Anloga, Volta Region",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://anseco.edu.gh"
};

export type SiteConfig = typeof siteConfig;
