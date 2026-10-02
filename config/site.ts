export const siteConfig = {
  schoolName: "ANSECO",
  fullName: "Anlo Senior High School",
  motto: "Truth and Service",
  location: "Anloga, Volta Region, Ghana",
  establishedYear: "1959",
  phone: "0249362800 / 0244660594",
  phoneHref: "0249362800",
  phones: [
    { label: "0249362800", href: "0249362800" },
    { label: "0244660594", href: "0244660594" }
  ],
  address: "Anlo SHS, P.O. Box AW10, Anloga, Volta Region",
  addressLines: ["Anlo SHS", "P.O. Box AW10", "Anloga, Volta Region"],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://anseco.edu.gh"
};

export type SiteConfig = typeof siteConfig;
