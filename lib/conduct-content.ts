export type ConductItem = {
  item: string;
  offence: string;
  details?: string[];
  sanctions: string[];
};

export type ConductCategory = {
  title: string;
  description: string;
  items: ConductItem[];
};

export const conductCategories: ConductCategory[] = [
  {
    title: "Attendance & Punctuality",
    description: "Attendance at school, assemblies and lessons, punctuality and movement on campus.",
    items: [
      { item: "2.5", offence: "Absence from School", sanctions: ["Caution and counselling", "Manual work or demotion for prefects", "Two weeks internal suspension", "Signing of a bond", "Withdrawal from the boarding house"] },
      { item: "2.6", offence: "Refusal to Attend Assemblies", sanctions: ["Caution and counselling", "Signing of a bond with parents as witnesses", "Manual work"] },
      { item: "2.7", offence: "Refusal to Attend Classes (Truancy)", sanctions: ["Caution and counselling", "Signing of a bond with parents as witnesses", "Manual work"] },
      { item: "2.8", offence: "Loitering", sanctions: ["Caution and counselling", "Signing of a bond with parents as witnesses"] },
      { item: "2.12", offence: "Refusal to Be Punctual", sanctions: ["Caution and counselling", "Manual work", "Signing of a bond if the offence persists"] }
    ]
  },
  {
    title: "Academic Conduct",
    description: "Participation in academic work and fulfilment of classroom responsibilities.",
    items: [
      { item: "2.9", offence: "Refusal to Do Academic Work", sanctions: ["Caution and counselling", "Signing of a bond with parents as witnesses", "Manual work on campus"] }
    ]
  },
  {
    title: "Authority & School Rules",
    description: "Respect for lawful authority and compliance with established school rules.",
    items: [
      { item: "2.4", offence: "Flouting Lawful Authority", sanctions: ["Caution and counselling", "Manual work or demotion for prefects", "Two weeks internal suspension", "External suspension of not more than two weeks for persistent offences", "Signing of a bond with parents as witnesses", "Withdrawal from the boarding house", "Dismissal for persistent offences"] }
    ]
  },
  {
    title: "Dress & Personal Conduct",
    description: "Approved dress, personal presentation and prohibited personal items.",
    items: [
      { item: "2.13", offence: "Improper Dressing", sanctions: ["Caution and counselling", "Manual work", "Demotion for prefects", "Two weeks internal suspension", "Shaving of beard or sideburns under the supervision of the housemaster", "Seizure of altered school uniforms or dresses"] },
      { item: "2.14", offence: "Unprescribed Items or Gadgets", sanctions: ["Appearance before the Disciplinary Committee", "Confiscation of unprescribed items and gadgets", "Signing of a bond"] },
      { item: "2.21", offence: "Gambling", sanctions: ["Caution and counselling", "Manual work or withdrawal from the boarding house", "Two weeks internal suspension", "External suspension of not more than two weeks for persistent offences"] },
      { item: "2.22", offence: "Possession or Circulation of Pornographic Material", sanctions: ["Caution and counselling", "Signing of a bond", "Demotion for prefects", "Report to the Police"] }
    ]
  },
  {
    title: "Boarding Conduct",
    description: "Rules governing bounds, residential areas and boarding-house responsibilities.",
    items: [
      { item: "2.11", offence: "Breaking Bounds", sanctions: ["Caution and counselling", "Manual work", "Demotion for prefects", "Two weeks internal suspension", "Signing of a bond", "Withdrawal from the boarding house", "Dismissal for persistent offences"] }
    ]
  },
  {
    title: "Safety & Violence",
    description: "Protection of people, school property and the safety of the school community.",
    items: [
      { item: "2.15", offence: "Wilful Damage to School Property", sanctions: ["Appearance before the Disciplinary Committee", "Payment of twice the cost of items destroyed", "Counselling and signing of a bond by the student with parents as witnesses"] },
      { item: "2.17", offence: "Physical and Psychological Violence", sanctions: ["Caution", "Counselling", "Manual work", "One week internal suspension", "Signing of a bond with parents", "Dismissal for persistent offences"] },
      { item: "2.18", offence: "Causing Harm", sanctions: ["Report to the Police while disciplinary proceedings are instituted", "Counselling", "Openly read written apology", "Written warning", "Signing of a bond by the student with parents as witnesses", "Dismissal depending on the harm caused"] },
      { item: "2.25", offence: "Possession and Use of Weapons", sanctions: ["Seizure of the weapon", "Report to the Police", "Dismissal"] }
    ]
  },
  {
    title: "Examination Misconduct",
    description: "Conduct relating to school examinations and assessment.",
    items: [
      { item: "2.10", offence: "Refusal to Write Examinations or Examination Malpractice", sanctions: ["Cancellation of the examination paper", "Repetition", "Manual work"] }
    ]
  },
  {
    title: "Technology & Cyberbullying",
    description: "Responsible use of recording devices, technology and digital communication.",
    items: [
      { item: "2.23", offence: "Unauthorised Recording", sanctions: ["Caution and counselling", "Appearance before the Disciplinary Committee", "Manual work or withdrawal from the boarding house", "Two weeks internal suspension", "External suspension of not more than two weeks for persistent offences"] }
    ]
  },
  {
    title: "Serious Misconduct",
    description: "Offences that may require formal disciplinary proceedings or referral to the Police.",
    items: [
      { item: "2.16", offence: "Sexual Offences", sanctions: ["Report to the Police, depending on the gravity of the offence, while disciplinary proceedings are instituted", "Dismissal"] },
      { item: "2.19", offence: "Religious Practice or Occultism", sanctions: ["Dismissal for occultism", "Appearance before the Disciplinary Committee", "Two weeks internal suspension and counselling", "External suspension", "Withdrawal from the boarding house"] },
      { item: "2.20", offence: "Incitement to Riot, Rioting or Demonstration", sanctions: ["Report to the Police", "Institution of disciplinary proceedings", "Dismissal"] },
      { item: "2.24A", offence: "Belonging to a Gang", sanctions: ["Dismissal"] }
    ]
  },
  {
    title: "Other Offences",
    description: "Additional prohibited conduct covered by the approved code.",
    items: [
      {
        item: "2.24",
        offence: "Other Offences",
        details: ["Improper behaviour outside school", "Leaving or travelling outside the school without permission", "Anonymous letters with malicious intent, false information, impersonation, deliberate distortion of facts, character assassination, forgery of documents or plagiarism", "Negligence of duty or abuse of power by prefects", "Extortion", "Seizure of another student's property without lawful authority", "Receiving visitors outside visiting hours or contravening visiting regulations", "Sending or eating food from the dining hall, school canteen or home in the classroom or dormitory", "Refusal to perform house duties or complete reasonable punishment", "Bullying, including cyberbullying", "Violence that causes physical, verbal, psychological or emotional harm", "Hiding in the dormitory"],
        sanctions: ["Report forgery of documents or impersonation to the Police", "Seizure of items", "Written warning", "Signing of a bond by the student with parents as witnesses", "Openly read written apology", "Counselling", "Payment of twice the cost of an item", "Manual work", "One week internal suspension with manual work", "Withdrawal from the boarding house", "Demotion for prefects", "Two weeks internal suspension", "External suspension of not more than three weeks", "Dismissal for persistent offences"]
      }
    ]
  }
];
