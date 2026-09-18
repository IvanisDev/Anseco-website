import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Discipline & Code of Conduct",
  description: "Student discipline, offences and guidelines for sanctions at Anlo Senior High School."
};

const conductItems = [
  {
    item: "2.4",
    offence: "Flouting Lawful Authority",
    sanctions: ["Caution and counselling", "Manual work or demotion for prefects", "Two weeks internal suspension", "External suspension of not more than two weeks for persistent offences", "Signing of a bond with parents as witnesses", "Withdrawal from the boarding house", "Dismissal for persistent offences"]
  },
  {
    item: "2.5",
    offence: "Absence from School",
    sanctions: ["Caution and counselling", "Manual work or demotion for prefects", "Two weeks internal suspension", "Signing of a bond", "Withdrawal from the boarding house"]
  },
  { item: "2.6", offence: "Refusal to Attend Assemblies", sanctions: ["Caution and counselling", "Signing of a bond with parents as witnesses", "Manual work"] },
  { item: "2.7", offence: "Refusal to Attend Classes (Truancy)", sanctions: ["Caution and counselling", "Signing of a bond with parents as witnesses", "Manual work"] },
  { item: "2.8", offence: "Loitering", sanctions: ["Caution and counselling", "Signing of a bond with parents as witnesses"] },
  { item: "2.9", offence: "Refusal to Do Academic Work", sanctions: ["Caution and counselling", "Signing of a bond with parents as witnesses", "Manual work on campus"] },
  { item: "2.10", offence: "Refusal to Write Examinations or Examination Malpractice", sanctions: ["Cancellation of the examination paper", "Repetition", "Manual work"] },
  { item: "2.11", offence: "Breaking Bounds", sanctions: ["Caution and counselling", "Manual work", "Demotion for prefects", "Two weeks internal suspension", "Signing of a bond", "Withdrawal from the boarding house", "Dismissal for persistent offences"] },
  { item: "2.12", offence: "Refusal to Be Punctual", sanctions: ["Caution and counselling", "Manual work", "Signing of a bond if the offence persists"] },
  { item: "2.13", offence: "Improper Dressing", sanctions: ["Caution and counselling", "Manual work", "Demotion for prefects", "Two weeks internal suspension", "Shaving of beard or sideburns under the supervision of the housemaster", "Seizure of altered school uniforms or dresses"] },
  { item: "2.14", offence: "Unprescribed Items or Gadgets", sanctions: ["Appearance before the Disciplinary Committee", "Confiscation of unprescribed items and gadgets", "Signing of a bond"] },
  { item: "2.15", offence: "Wilful Damage to School Property", sanctions: ["Appearance before the Disciplinary Committee", "Payment of twice the cost of items destroyed", "Counselling and signing of a bond by the student with parents as witnesses"] },
  { item: "2.16", offence: "Sexual Offences", sanctions: ["Report to the Police, depending on the gravity of the offence, while disciplinary proceedings are instituted", "Dismissal"] },
  { item: "2.17", offence: "Physical and Psychological Violence", sanctions: ["Caution", "Counselling", "Manual work", "One week internal suspension", "Signing of a bond with parents", "Dismissal for persistent offences"] },
  { item: "2.18", offence: "Causing Harm", sanctions: ["Report to the Police while disciplinary proceedings are instituted", "Counselling", "Openly read written apology", "Written warning", "Signing of a bond by the student with parents as witnesses", "Dismissal depending on the harm caused"] },
  { item: "2.19", offence: "Religious Practice or Occultism", sanctions: ["Dismissal for occultism", "Appearance before the Disciplinary Committee", "Two weeks internal suspension and counselling", "External suspension", "Withdrawal from the boarding house"] },
  { item: "2.20", offence: "Incitement to Riot, Rioting or Demonstration", sanctions: ["Report to the Police", "Institution of disciplinary proceedings", "Dismissal"] },
  { item: "2.21", offence: "Gambling", sanctions: ["Caution and counselling", "Manual work or withdrawal from the boarding house", "Two weeks internal suspension", "External suspension of not more than two weeks for persistent offences"] },
  { item: "2.22", offence: "Possession or Circulation of Pornographic Material", sanctions: ["Caution and counselling", "Signing of a bond", "Demotion for prefects", "Report to the Police"] },
  { item: "2.23", offence: "Unauthorised Recording", sanctions: ["Caution and counselling", "Appearance before the Disciplinary Committee", "Manual work or withdrawal from the boarding house", "Two weeks internal suspension", "External suspension of not more than two weeks for persistent offences"] },
  {
    item: "2.24",
    offence: "Other Offences",
    details: ["Improper behaviour outside school", "Leaving or travelling outside the school without permission", "Anonymous letters with malicious intent, false information, impersonation, deliberate distortion of facts, character assassination, forgery of documents or plagiarism", "Negligence of duty or abuse of power by prefects", "Extortion", "Seizure of another student's property without lawful authority", "Receiving visitors outside visiting hours or contravening visiting regulations", "Sending or eating food from the dining hall, school canteen or home in the classroom or dormitory", "Refusal to perform house duties or complete reasonable punishment", "Bullying, including cyberbullying", "Violence that causes physical, verbal, psychological or emotional harm", "Hiding in the dormitory"],
    sanctions: ["Report forgery of documents or impersonation to the Police", "Seizure of items", "Written warning", "Signing of a bond by the student with parents as witnesses", "Openly read written apology", "Counselling", "Payment of twice the cost of an item", "Manual work", "One week internal suspension with manual work", "Withdrawal from the boarding house", "Demotion for prefects", "Two weeks internal suspension", "External suspension of not more than three weeks", "Dismissal for persistent offences"]
  },
  { item: "2.24A", offence: "Belonging to a Gang", sanctions: ["Dismissal"] },
  { item: "2.25", offence: "Possession and Use of Weapons", sanctions: ["Seizure of the weapon", "Report to the Police", "Dismissal"] }
];

export default function DisciplineCodeOfConductPage() {
  return (
    <div className="bg-[#F8F7F3]">
      <PageHeader
        eyebrow="Student Life"
        title="Discipline & Code of Conduct"
        description="A reference for students and families based on the Ghana Education Service approved code of conduct for schools."
      />

      <main className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <Link href="/school-life" className="mb-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-[#0D2E6B] hover:text-[#C9990A]">
          <ArrowLeft size={16} /> Back to Student Life
        </Link>

        <div className="mb-12 grid gap-8 border-l-4 border-[#C9990A] bg-white p-7 shadow-[0_18px_45px_rgba(13,46,107,0.06)] md:grid-cols-[auto_1fr] md:p-9">
          <div className="flex h-14 w-14 items-center justify-center bg-[#0D2E6B] text-[#E4B52B]">
            <Scale size={26} />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-[#0D2E6B]">Discipline is the key to success</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#475569]">
              Self-discipline, rather than coercion, should guide every student. Cases of misconduct are handled according to the Ghana Education Service approved code of conduct and the gravity, circumstances and persistence of the offence.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {conductItems.map((entry) => (
            <article key={entry.item} className="border border-[#0D2E6B]/10 bg-white shadow-[0_12px_35px_rgba(13,46,107,0.05)]">
              <div className="grid md:grid-cols-[110px_1fr]">
                <div className="bg-[#0D2E6B] px-5 py-5 text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E4B52B]">Item</p>
                  <p className="mt-1 text-xl font-black">{entry.item}</p>
                </div>
                <div className="p-6 sm:p-7">
                  <h2 className="text-xl font-black text-[#0D2E6B]">{entry.offence}</h2>
                  {entry.details ? (
                    <div className="mt-5">
                      <h3 className="text-xs font-black uppercase tracking-[0.16em] text-[#C9990A]">Acts included</h3>
                      <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#475569] lg:grid-cols-2">
                        {entry.details.map((detail) => <li key={detail} className="border-l-2 border-[#C9990A]/50 pl-3">{detail}</li>)}
                      </ul>
                    </div>
                  ) : null}
                  <div className="mt-5 border-t border-[#0D2E6B]/10 pt-5">
                    <h3 className="text-xs font-black uppercase tracking-[0.16em] text-[#C9990A]">Guidelines for sanctions</h3>
                    <ul className="mt-3 grid gap-x-8 gap-y-2 text-sm leading-6 text-[#475569] lg:grid-cols-2">
                      {entry.sanctions.map((sanction) => <li key={sanction} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#C9990A]" />{sanction}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 border-t border-[#0D2E6B]/10 pt-6 text-sm leading-7 text-[#64748B]">
          Sanctions are applied according to the circumstances and gravity of each case. Students and families should contact the school administration for clarification or the current official policy.
        </p>
      </main>
    </div>
  );
}
