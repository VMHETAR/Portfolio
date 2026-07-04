import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { profile } from "@/data/profile";
import { ContactForm } from "@/components/contact/contact-form";
import { SocialLinks } from "@/components/contact/social-links";
import { SectionReveal } from "@/components/shared/section-reveal";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact",
  description: `Get in touch with ${profile.name} for research collaborations, speaking, or opportunities.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionReveal>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Interested in research collaboration, speaking engagements, or
          discussing AI systems? I&apos;d love to hear from you.
        </p>
      </SectionReveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
