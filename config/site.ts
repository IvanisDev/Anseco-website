export const siteConfig = {
  schoolName: "ANSECO",
  fullName: "Anlo Senior High School",
  motto: "Truth and Service",
  location: "Anloga, Volta Region, Ghana",
  establishedYear: "1959",
  phone: "0249362800 / 0244660594",
  phoneHref: "0249362800",
  email: "info@anseco.edu.gh",
  address: "Anlo SHS P.O.Box AW10, Anloga, Volta Region",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://anseco.edu.gh"
};

export type SiteConfig = typeof siteConfig;
