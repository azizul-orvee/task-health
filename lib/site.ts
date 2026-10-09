// Single source of truth for business details used across the site.
export const site = {
  name: "Task Healthcare",
  legalName: "Task Healthcare Limited",
  url: "https://taskhealthcare.co.uk",
  phone: { display: "020 8594 7282", tel: "02085947282" },
  mobiles: [
    { display: "07498 218177", tel: "07498218177" },
    { display: "07816 834903", tel: "07816834903" },
  ],
  email: "enquiries@taskhealthcare.co.uk",
  address: { line1: "45 Forest Road, Ilford,", line2: "London IG6 3HA", mapsQuery: "45 Forest Road Ilford IG6 3HA" },
  links: {
    cqc: "https://www.cqc.org.uk/location/1-13376159979",
    homecare: "https://www.homecare.co.uk/homecare/agency.cfm/id/65432240283",
    facebook: "https://www.facebook.com/profile.php?id=100089201764890",
    instagram: "https://www.instagram.com/sharonilori/",
    linkedin: "https://www.linkedin.com/in/task-healthcare-limited-b5a2982b6/",
  },
} as const;

export const consultHref = (care?: string) =>
  care ? `/contact/?care=${encodeURIComponent(care)}#consult` : "/contact/#consult";
