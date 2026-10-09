import { SITE_ORIGIN } from "@/lib/site";

export const siteConfig = {
  schoolName: "ANSECO",
  fullName: "Anlo Senior High School",
  motto: "Truth and Service",
  location: "Anloga, Volta Region, Ghana",
  establishedYear: "1959",
  phones: [
    { label: "0249362800", href: "0249362800" },
    { label: "0244660594", href: "0244660594" }
  ],
  address: "Anlo SHS, P.O. Box AW10, Anloga, Volta Region",
  addressLines: ["Anlo SHS", "P.O. Box AW10", "Anloga, Volta Region"],
  mapEmbedUrl: "https://www.google.com/maps?q=Anlo+Senior+High+School,+Anloga,+Ghana&output=embed",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Anlo+Senior+High+School,+Anloga,+Ghana",
  url: SITE_ORIGIN
};

export type SiteConfig = typeof siteConfig;
