import { siteConfig } from "@/config/site";

export type AmaKnowledgeEntry = {
  id: string;
  patterns: RegExp[];
  aliases?: string[];
  keywords?: Record<string, number>;
  answer: string;
  href?: string;
  linkLabel?: string;
  followUps?: string[];
};

export const amaKnowledge: AmaKnowledgeEntry[] = [
  {
    id: "greeting",
    patterns: [/^(hello|hi|hey|good morning|good afternoon|good evening)( ama)?[.! ]*$/i],
    answer: "Woezɔ! 👋 I’m Ama, ANSECO’s Information Assistant. How can I help you today?"
  },
  {
    id: "thanks",
    patterns: [/\b(thank you|thanks|thank u|many thanks|medaase|akpe)\b/i],
    answer: "You're welcome! I'm happy I could help. Is there anything else you'd like to know about ANSECO?"
  },
  {
    id: "goodbye",
    patterns: [/^(no|no thanks|that's all|that is all|nothing else|goodbye|bye)[.! ]*$/i],
    answer: "You're welcome. Thank you for visiting ANSECO's website. Have a great day!"
  },
  {
    id: "identity",
    patterns: [/who are you/i, /what are you/i, /tell me about yourself/i],
    aliases: ["who is ama", "what is ama", "tell me about ama"],
    keywords: { ama: 1, assistant: 2, identity: 3 },
    answer: "I'm Ama, ANSECO's Information Assistant. I'm here to help you find approved information about the school."
  },
  {
    id: "ama-name-origin",
    patterns: [/why (are you called|is your name) ama/i, /what does ama mean/i, /why ama/i, /where did your name come from/i],
    aliases: ["why are you called ama", "why is your name ama", "what does ama mean", "where did your name come from", "who is ama anseco", "tell me about ama anseco"],
    keywords: { ama: 2, name: 2, called: 2, origin: 3, mean: 2 },
    answer: "I'm named after Ama ANSECO, the school's female mascot and a familiar symbol of the ANSECO community.",
    href: "/gallery/historical-anseco",
    linkLabel: "See Ama ANSECO"
  },
  {
    id: "capabilities",
    patterns: [/what can you (do|help with)/i, /how can you help/i, /what do you know/i],
    answer: "I can help with admissions, Learning Areas, final-year and WASSCE guidance, campus life, events, school history, alumni services, transcripts, and general information about ANSECO."
  },
  {
    id: "why-anseco",
    patterns: [/why (choose )?anseco/i, /why should (i|my child|my ward).*(choose|attend|go to) anseco/i, /what makes anseco different/i, /is anseco (a )?good school/i, /what does anseco offer students/i],
    aliases: ["why anseco", "why should i choose anseco", "why should my child attend anseco", "what makes anseco different"],
    keywords: { why: 2, choose: 3, anseco: 2, different: 3, attend: 2, offer: 2 },
    answer: "ANSECO combines a legacy rooted in Anlo-Land with eight Learning Areas, character formation through Service, Truth, Accountability and Reliability, a broad student-life experience, and a community connecting learners, families, staff and generations of old students.",
    href: "/#why-anseco",
    linkLabel: "Explore Why ANSECO"
  },
  {
    id: "school-identity",
    patterns: [/about anseco/i, /who is anseco/i, /tell me about (anseco|the school)/i, /school (motto|vision|mission|values)/i, /truth and service/i, /star values/i],
    answer: "Anlo Senior High School (ANSECO) is a public senior high school in Anloga, Volta Region. Guided by the motto 'Truth and Service,' the school is committed to academic development, character formation, discipline, and service.",
    href: "/about",
    linkLabel: "About ANSECO"
  },
  {
    id: "out-of-scope",
    patterns: [
      /national anthem/i,
      /\b(write|do|complete|solve)\b.*\b(essay|homework|assignment)\b/i,
      /\b(essay|homework|assignment)\b.*\b(for me|answer|solution)\b/i,
      /\bwho (will|is going to) win\b/i,
      /^what is \d+\s*(divided by|times|multiplied by|plus|minus)\s*\d+/i
    ],
    answer: "That's outside what I cover. I only answer questions about ANSECO using information published on the school website, so I can't do homework, assignments, or general-knowledge questions. If your question is school-related, ask me about admissions, dates, Learning Areas, or contact details."
  },
  {
    id: "school-anthem",
    patterns: [/school anthem/i, /anseco anthem/i, /\banthem\b/i],
    answer: "ANSECO's school anthem asks God to bless Mother ANSECO, celebrates the school as a source of knowledge and wisdom and the Star of Anlo-Land, and affirms the values of Truth and Service. The anthem was written and composed by Mr. P.K. Kpogo.",
    href: "/about#school-anthem",
    linkLabel: "Read the School Anthem"
  },
  {
    id: "science-department-head",
    patterns: [/(head|hod).*(science)/i, /science.*(head|hod)/i, /who.*(lead|manage).*(science)/i],
    answer: "The published Head of the Science Department at ANSECO is Margaret M. Dodor.",
    href: "/about/school-administration#heads-of-departments",
    linkLabel: "View Heads of Departments"
  },
  {
    id: "administration",
    patterns: [/^(tell me about |what is |show me )?(the )?(school )?administration[?.! ]*$/i, /management team/i, /list.*(department head|head of department|hod)/i, /list.*house parent/i, /list.*senior prefect/i],
    answer: "ANSECO's administration includes the Headmaster, school management, Heads of Departments, house parents, and student leaders. The administration page lists the currently published roles and names.",
    href: "/about/school-administration",
    linkLabel: "View School Administration"
  },
  {
    id: "academic-resources",
    patterns: [/academic resource/i, /school resource/i, /facilit/i, /librar/i, /laborator/i, /computer lab/i, /dining hall/i],
    answer: "ANSECO's Facilities & Resources page separates Educational Resources—School Library, Science Laboratory, Classroom Blocks, ICT Laboratory and Visual Arts Studio—from Campus Life Resources—Assembly Hall, Dining Hall, Sick Bay and Sports Field.",
    href: "/resources",
    linkLabel: "Explore School Resources"
  },
  {
    id: "academic-calendar",
    patterns: [/academic calendar/i, /term date/i, /school calendar/i, /academic date/i],
    answer: "The Academic Calendar page contains published term dates, academic activities, and school programme updates. Visitors should use the current published calendar for confirmed dates.",
    href: "/academic-calendar",
    linkLabel: "View Academic Calendar"
  },
  {
    id: "wassce-timetable",
    patterns: [/wassce.*(when|date|start|timetable|schedule)/i, /(when|date|start|timetable|schedule).*wassce/i, /final year.*(date|calendar)/i],
    aliases: ["when is wassce", "where is the wassce timetable", "when does wassce start"],
    keywords: { wassce: 5, timetable: 5, schedule: 3, date: 3, start: 2 },
    answer: "WASSCE dates and timetables must come from a current ANSECO notice or the West African Examinations Council. If ANSECO has not published the current timetable yet, please check again under Academics → Final-Year Students or ask the school administration. Ama will not guess an examination date.",
    href: "/final-year-students#wassce-information",
    linkLabel: "View Final-Year Information"
  },
  {
    id: "wassce-preparation",
    patterns: [/prepare.*wassce/i, /wassce.*(prepare|preparation|revision|study|past question)/i, /final year.*(prepare|revision|study)/i, /mock exam/i],
    aliases: ["how should i prepare for wassce", "where can i find past questions", "when is the mock exam"],
    keywords: { wassce: 4, prepare: 4, preparation: 4, revision: 4, mock: 4, study: 2, past: 1, questions: 1 },
    answer: "Final-year students should confirm their registered subjects, follow a realistic revision plan, practise approved past questions under timed conditions, attend ANSECO lessons and revision sessions, use teacher feedback, and check every confirmed paper time and venue. School-specific mock and revision dates are published only when approved.",
    href: "/final-year-students",
    linkLabel: "Prepare for WASSCE"
  },
  {
    id: "wassce-exam-day",
    patterns: [/wassce.*(bring|late|conduct|rule|misconduct|exam day)/i, /(bring|late|conduct|rule|misconduct).*wassce/i, /examination conduct/i],
    aliases: ["what should i bring to the examination", "what happens if i am late for a wassce paper"],
    keywords: { wassce: 4, examination: 3, conduct: 4, late: 4, bring: 3, misconduct: 5 },
    answer: "Students should follow the current candidate instructions issued by ANSECO and WAEC, arrive at the confirmed reporting time, and bring only permitted materials. For a late arrival or any uncertainty, report immediately to the examination officials. The School Regulations page contains ANSECO's published guidance on examination misconduct.",
    href: "/admissions/student-guidelines#student-conduct-discipline",
    linkLabel: "View Examination Conduct"
  },
  {
    id: "wassce-results",
    patterns: [/check.*wassce result/i, /wassce result/i, /after wassce/i, /final year.*(result|transcript|record)/i],
    aliases: ["how do i check my wassce results", "what happens after wassce"],
    keywords: { wassce: 4, result: 5, after: 2, transcript: 3, record: 2 },
    answer: "After WASSCE, use official WAEC channels for results information. After graduation, former students can follow ANSECO's published Transcript & Records process when they need a school transcript or academic record.",
    href: "/final-year-students",
    linkLabel: "View After-WASSCE Guidance"
  },
  {
    id: "admissions-faqs",
    patterns: [/admission faq/i, /frequently asked/i, /admission question/i],
    answer: "The Admissions FAQs page provides answers to common questions from prospective students, parents, and guardians about placement, reporting, and joining ANSECO.",
    href: "/admissions/faqs",
    linkLabel: "View Admissions FAQs"
  },
  {
    id: "boarding-life",
    patterns: [/boarding life/i, /life as a boarding/i, /dormitor/i, /evening prep/i, /residential life/i],
    answer: "ANSECO's boarding information covers dormitory life, meals, evening prep, weekend activities, the house system, and campus security. Families should use the prospectus for the approved reporting requirements.",
    href: "/campus-life/boarding-day-students",
    linkLabel: "Explore Boarding Life"
  },
  {
    id: "campus-life",
    patterns: [/campus life/i, /student life/i, /life at anseco/i, /student experience/i],
    answer: "Campus Life at ANSECO includes student leadership, assemblies, service, clubs and societies, sports and athletics, boarding, day-student life, and house activities.",
    href: "/campus-life",
    linkLabel: "Explore Campus Life"
  },
  {
    id: "gallery",
    patterns: [/gallery/i, /photo/i, /picture/i, /image/i, /historical gallery/i],
    answer: "The ANSECO Gallery organizes photographs into albums covering the campus, academics, student life, sports, clubs and societies, cultural activities, houses, events, alumni, and school history.",
    href: "/gallery",
    linkLabel: "View Gallery"
  },
  {
    id: "alumni-leadership",
    patterns: [/alumni leadership/i, /anssosa leadership/i, /anssosa executive/i, /diaspora executive/i],
    answer: "The Alumni Leadership page separates ANSSOSA Global leadership from ANSSOSA Diaspora leadership and lists the currently confirmed names and positions.",
    href: "/alumni/leadership",
    linkLabel: "View Alumni Leadership"
  },
  {
    id: "alumni-projects",
    patterns: [/alumni project/i, /anssosa project/i, /projects and impact/i, /alumni impact/i],
    answer: "The Projects & Impact page presents confirmed current and completed alumni initiatives that support ANSECO and its students.",
    href: "/alumni/projects-impact",
    linkLabel: "View Projects & Impact"
  },
  {
    id: "get-involved",
    patterns: [/get involved/i, /support anseco/i, /volunteer/i, /mentor/i, /help the school/i],
    answer: "Old students can reconnect, volunteer, mentor students, support approved projects, and contact ANSSOSA or the school through the published channels.",
    href: "/alumni/get-involved",
    linkLabel: "Get Involved"
  },
  {
    id: "homepage",
    patterns: [/home ?page/i, /anseco website/i, /what is on the website/i],
    answer: "The ANSECO website provides approved information about the school, admissions, Learning Areas, campus life, news, events, alumni services, resources, history, administration, and contact details.",
    href: "/",
    linkLabel: "Visit the Homepage"
  },
  {
    id: "transcript",
    patterns: [/transcript/i, /academic record/i, /school record/i],
    aliases: ["i need my transcript", "how do i get my school records", "request academic records"],
    keywords: { transcript: 5, record: 3, academic: 1, request: 1 },
    answer: "Former students can request an academic transcript from ANSECO. Include the name used while attending, admission and completion years, house, current contact details, purpose, and preferred delivery or collection option.",
    href: "/alumni/transcript-records",
    linkLabel: "View Transcript & Records"
  },
  {
    id: "boarding-requirements",
    patterns: [/boarding.*(need|require|bring|item)/i, /(need|require|bring|item).*boarding/i, /boarding prospectus/i],
    answer: "Boarding students should review the approved documents, personal items, cleaning materials, and uniform requirements before reporting. The complete checklist is available in the school prospectus.",
    href: "/admissions/prospectus#boarding",
    linkLabel: "View Boarding Requirements"
  },
  {
    id: "day-requirements",
    patterns: [/day student.*(need|require|bring|item)/i, /(need|require|bring|item).*day student/i],
    answer: "Day students should review the approved documents, personal items, cleaning materials, and uniform requirements before reporting. The prospectus separates day-student requirements from boarding requirements.",
    href: "/admissions/prospectus#day",
    linkLabel: "View Day Student Requirements"
  },
  {
    id: "day-student-life",
    patterns: [/day student life/i, /life as a day student/i, /day student experience/i],
    answer: "Day students are part of the ANSECO community and participate in academics and approved school activities. The Boarding & Day Students page presents the currently published guidance without inventing unconfirmed routines.",
    href: "/campus-life/boarding-day-students",
    linkLabel: "Explore Day Student Life"
  },
  {
    id: "reporting-process",
    patterns: [/how.*report to (anseco|the school)/i, /reporting process/i, /where.*report.*(anseco|school)/i, /new student.*report/i],
    aliases: ["how do i report to the school", "where should a new student report", "student reporting process"],
    keywords: { report: 3, reporting: 4, registration: 2, student: 1 },
    answer: "After confirming the student's CSSPS placement, review the current ANSECO prospectus and reporting requirements. Report to ANSECO on the school's official reporting date with the required documents, then follow the registration instructions provided at the school.",
    href: "/admissions/how-to-apply",
    linkLabel: "View Reporting Steps",
    followUps: ["What documents do I need?", "Boarding requirements", "Day student requirements"]
  },
  {
    id: "apply",
    patterns: [/how.*apply/i, /application/i, /admission process/i, /join anseco/i, /cssps/i, /placement/i],
    aliases: ["how do i apply", "how can my child get admission", "how do i get admitted", "how can i join anseco"],
    keywords: { admission: 4, admitted: 4, apply: 4, application: 4, placement: 3, cssps: 5, enroll: 3, enrol: 3, prospective: 2 },
    answer: "Admission to ANSECO is through Ghana's Computerized School Selection and Placement System (CSSPS). After placement, students and their parents or guardians should prepare the required documents and report to the school for registration.",
    href: "/admissions/how-to-apply",
    linkLabel: "View How to Apply",
    followUps: ["What documents do I need?", "Boarding requirements", "Day student requirements"]
  },
  {
    id: "admission-documents",
    patterns: [/(admission|registration|reporting).*(document|paperwork)/i, /(document|paperwork).*(admission|registration|reporting)/i],
    aliases: ["what documents do i need for admission", "admission documents", "registration documents"],
    keywords: { admission: 4, registration: 4, document: 5, documents: 5, paperwork: 4 },
    answer: "Students reporting to ANSECO should bring the required admission and registration documents listed in the current school prospectus. Requirements may differ for boarding and day students.",
    href: "/admissions/prospectus",
    linkLabel: "View Prospectus & Requirements",
    followUps: ["Boarding requirements", "Day student requirements"]
  },
  {
    id: "prospectus",
    patterns: [/prospectus/i, /admission requirement/i, /required document/i, /uniform/i, /cleaning material/i, /what.*bring/i],
    answer: "The ANSECO prospectus lists required documents, boarding and day-student items, cleaning materials, and uniform requirements. A printable PDF is also available.",
    href: "/admissions/prospectus",
    linkLabel: "View Prospectus & Requirements"
  },
  {
    id: "science-combinations",
    patterns: [/(science).*(learning|subject|elective|course|programme|program).*(combination|option)/i, /(learning|subject|elective|course|programme|program).*(combination|option).*(science)/i, /science combinations?/i],
    answer: "ANSECO publishes five Science options. A: Additional Mathematics, Physics, Biology, Chemistry, PEH Elective and Economics. B: Additional Mathematics, Physics, Biology, Chemistry, Agriculture and Business Management. C: Additional Mathematics, Physics, Chemistry, Biology, Computing and Accounting. D: Additional Mathematics, Physics, Chemistry, Biology, Geography and Computing or French. E: Additional Mathematics, Physics, Chemistry, Biology, Business Management and Food and Nutrition.",
    href: "/learning-areas#science",
    linkLabel: "View Science Combinations"
  },
  {
    id: "combination-overview",
    patterns: [/^(what are )?(the )?(subject|learning|elective)( area)? combinations?[?.! ]*$/i],
    answer: "ANSECO publishes elective combinations for Science, Applied Technology, Home Economics, Visual and Performing Arts, Agricultural Science, Business, General Arts, and Languages. Open the Learning Areas page to compare every option.",
    href: "/learning-areas#electives-science",
    linkLabel: "View All Learning Area Combinations"
  },
  {
    id: "learning-areas",
    patterns: [/^what (are|learning areas does anseco offer).*(learning areas|anseco offer)/i, /^which learning areas/i, /^how many learning areas/i, /^learning areas?[?.! ]*$/i, /^what (academic )?(programmes|programs|courses) does anseco offer/i],
    aliases: ["what can i study", "what courses do you offer", "what programmes are available", "what are the learning areas"],
    keywords: { learning: 2, area: 2, course: 3, programme: 3, program: 3, study: 2, subject: 1 },
    answer: "ANSECO offers eight Learning Areas: Science, General Arts, Business, Agriculture, Home Economics, Visual and Performing Arts, Applied Technology, and Languages.",
    href: "/learning-areas",
    linkLabel: "Explore Learning Areas"
  },
  {
    id: "houses",
    patterns: [/house/i, /adeladza/i, /fiagbe/i, /sorkpor/i],
    aliases: ["what are the houses", "which houses does anseco have", "tell me about the house system"],
    keywords: { house: 4, adeladza: 5, doe: 3, fiagbe: 5, sorkpor: 5 },
    answer: "ANSECO has four confirmed houses: Adeladza House, Doe House, Fiagbe House, and Sorkpor House. Houses support student participation in academics, sports, culture, and community service.",
    href: "/campus-life/boarding-day-students#houses",
    linkLabel: "View Student Living & Houses"
  },
  {
    id: "clubs",
    patterns: [/club/i, /societ/i, /cadet/i, /choir/i, /student group/i],
    aliases: ["what clubs can i join", "which societies are available", "student organizations"],
    keywords: { club: 4, society: 4, cadet: 3, choir: 3, robotics: 3 },
    answer: "ANSECO's student organizations include academic and service clubs, Cadet Corps, School Choir, religious groups, cultural groups, Robotics Club, Drama and Debating Society, and others.",
    href: "/campus-life/clubs-societies",
    linkLabel: "Explore Clubs & Societies"
  },
  {
    id: "sports",
    patterns: [/sport/i, /athletic/i, /football/i, /basketball/i, /volleyball/i],
    aliases: ["what sports are available", "which sports can students play", "athletics at anseco"],
    keywords: { sport: 4, athletic: 4, football: 3, basketball: 3, volleyball: 3, swimming: 3 },
    answer: "ANSECO students participate in football, athletics, table tennis, volleyball, basketball, swimming, house competitions, and approved school sporting events.",
    href: "/campus-life/sports-athletics",
    linkLabel: "Explore Sports & Athletics"
  },
  {
    id: "dress-code-sanctions",
    patterns: [/(punish|punishment|penalty|sanction|consequence).*(dress|uniform)/i, /(dress|uniform).*(punish|punishment|penalty|sanction|consequence|break|violate)/i, /improper dress/i],
    answer: "For improper dressing, the published guidelines list caution and counselling, manual work, demotion for prefects, up to two weeks of internal suspension, supervised shaving of a beard or sideburns, or seizure of altered uniforms or dresses. The sanction depends on the circumstances, gravity, and persistence of the offence.",
    href: "/admissions/student-guidelines#student-conduct-discipline",
    linkLabel: "View Dress & Conduct Guidelines"
  },
  {
    id: "regulations",
    patterns: [/regulation/i, /conduct/i, /discipline/i, /offence/i, /sanction/i, /school rule/i],
    answer: "ANSECO's School Regulations cover student conduct, attendance, academic behavior, dress, boarding conduct, safety, examination misconduct, technology use, and disciplinary sanctions.",
    href: "/admissions/student-guidelines",
    linkLabel: "View School Regulations"
  },
  {
    id: "headmaster",
    patterns: [/headmaster/i, /school leader/i, /current head/i],
    aliases: ["who is the headmaster", "who runs anseco", "who leads the school"],
    keywords: { headmaster: 5, leader: 3, principal: 4, runs: 2 },
    answer: "The current Headmaster of Anlo Senior High School is Mr. Newman H.K. Dziedzoave.",
    href: "/about/school-administration",
    linkLabel: "Meet Our Administration"
  },
  {
    id: "history",
    patterns: [/history/i, /founded/i, /established/i, /founding/i, /founder/i],
    aliases: ["when was anseco founded", "tell me the school history", "when was the school established"],
    keywords: { history: 4, founded: 4, established: 4, founding: 4, origin: 2 },
    answer: "ANSECO was established in August 1954 and reopened on 10 April 1959 through the efforts of Togbi Adeladza II, Mr. Cephas Kofi Fiagbe, and Mr. James W.K. Doe. It became a Government-Assisted Secondary School in the 1963/1964 academic year and has grown from an initial nine students into a major school serving Anlo-Land and the Volta Region.",
    href: "/about/our-history",
    linkLabel: "Explore Our History"
  },
  {
    id: "pta",
    patterns: [/\bpta\b/i, /parent teacher association/i],
    aliases: ["tell me about the pta", "when is the next pta meeting"],
    keywords: { pta: 5, parent: 2, teacher: 2, meeting: 2 },
    answer: "ANSECO publishes confirmed PTA meeting information through its Events and News pages. Ama will not guess a future meeting date; please open the published event record for the latest available details.",
    href: "/events/pta-meeting",
    linkLabel: "View PTA Meeting Information"
  },
  {
    id: "events",
    patterns: [/event/i, /calendar/i, /what.*happening/i, /upcoming/i, /next.*event/i],
    aliases: ["what is happening at anseco", "what are the upcoming events", "next school event"],
    keywords: { event: 4, upcoming: 3, happening: 3, calendar: 2, schedule: 2 },
    answer: "ANSECO publishes upcoming and past school activities on its Events page. Please check the current calendar for confirmed dates and details.",
    href: "/events",
    linkLabel: "View Events"
  },
  {
    id: "news",
    patterns: [/news/i, /announcement/i, /notice/i, /latest update/i],
    answer: "The ANSECO newsroom contains school notices, announcements, and verified external stories that directly concern the school or its community.",
    href: "/news",
    linkLabel: "View Latest News"
  },
  {
    id: "alumni",
    patterns: [/alumni/i, /anssosa/i, /old student/i],
    answer: "ANSECO alumni connect through ANSSOSA. The website provides information about alumni leadership, projects, transcript requests, and ways to get involved.",
    href: "/alumni",
    linkLabel: "Explore Alumni & ANSSOSA"
  },
  {
    id: "contact",
    patterns: [/contact/i, /phone/i, /telephone/i, /address/i, /location/i, /where.*anseco/i, /where.*school/i],
    aliases: ["how do i contact anseco", "what is the school phone number", "where is anseco located"],
    keywords: { contact: 4, phone: 4, telephone: 4, number: 1, address: 4, location: 3, located: 3 },
    answer: `ANSECO is located in ${siteConfig.location}. The postal address is ${siteConfig.address}. You can call ${siteConfig.phones.map((phone) => phone.label).join(" or ")}.`,
    href: "/contact",
    linkLabel: "Contact ANSECO"
  }
];
