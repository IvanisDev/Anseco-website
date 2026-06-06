"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(subjectValue || `Website enquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="grid gap-4" onSubmit={submit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full Name" id="name">
          <Input id="name" value={name} onChange={(event) => setName(event.target.value)} required placeholder="e.g. Kofi Mensah" />
        </Field>
        <Field label="Phone Number" id="phone">
          <Input id="phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+233 XX XXX XXXX" />
        </Field>
      </div>
      <Field label="Email Address" id="email">
        <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="your@email.com" />
      </Field>
      <Field label="Subject" id="subject">
        <Input id="subject" value={subjectValue} onChange={(event) => setSubjectValue(event.target.value)} required placeholder="Admissions enquiry" />
      </Field>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700" htmlFor="message">
          Message
        </label>
        <Textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} required placeholder="Please describe your enquiry..." className="border-gray-200 focus:border-[#0D2E6B]" />
      </div>
      <Button type="submit" className="bg-[#0D2E6B] hover:bg-[#1A4BA0]">
        <Send size={15} />
        Open email app
      </Button>
    </form>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700" htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}
