import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Alumni",
  description: "Alumni contact and support information for ANSECO."
};

export default function AlumniPage() {
  return (
    <>
      <PageHeader title="Alumni" eyebrow="Old students" description="Reconnect with ANSECO, share updates and support current students through approved school channels." />
      <section className="container grid gap-6 py-10 md:grid-cols-3">
        {["Update your contact", "Support student welfare", "Share opportunities"].map((item) => (
          <Card key={item}>
            <CardContent className="pt-5">
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Contact the school office so alumni information, support pledges and student opportunities can be recorded through official channels.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className="container pb-12">
        <div className="rounded-lg border bg-muted/50 p-6">
          <h2 className="text-2xl font-bold">Contact alumni support</h2>
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
