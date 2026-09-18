import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Alumni",
  description: "ANSSOSA contact and support information for ANSECO."
};

export default function AlumniPage() {
  const alumniMetrics = [
    {
      value: "60+",
      label: "Years of Graduates",
      description: "Generations of ANSECO old students serving Ghana and beyond."
    },
    {
      value: "ANSSOSA",
      label: "Alumni Network",
      description: "A growing old students association connecting year groups and chapters."
    }
  ];

  return (
    <>
      <PageHeader title="ANSSOSA" eyebrow="Alumni" description="Reconnect with ANSECO, share updates and support current students through ANSSOSA." />
      <section className="bg-[#0D2E6B] py-20 text-white">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">Alumni Impact</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">ANSSOSA at a Glance</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {alumniMetrics.map((metric) => (
              <div key={metric.label} className="flex min-h-[220px] flex-col justify-between border border-white/10 bg-white/[0.055] p-6">
                <div className="font-display text-4xl font-bold leading-none text-[#C9990A]">{metric.value}</div>
                <div>
                  <h3 className="mb-2 text-lg font-black text-white">{metric.label}</h3>
                  <p className="text-sm leading-6 text-white/60">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container grid gap-6 py-20 md:grid-cols-3">
        {["Update your contact", "Support student welfare", "Share opportunities"].map((item) => (
          <Card key={item}>
            <CardContent className="pt-5">
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Contact the school office so ANSSOSA information, support pledges and student opportunities can be recorded through official channels.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className="container pb-12">
        <div className="border bg-muted/50 p-6">
          <h2 className="text-2xl font-bold">Contact ANSSOSA support</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Send a message with your name, year group and the reason for contacting the school.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <a href={`mailto:${siteConfig.email}`}>Email school office</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
