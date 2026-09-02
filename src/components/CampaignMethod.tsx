import { Container } from "@/components/Container";
import { MarkGrid } from "@/components/Ornaments";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export function CampaignMethod() {
  return (
    <section className="relative overflow-hidden border-t border-line py-20 sm:py-28">
      <MarkGrid className="pointer-events-none absolute -left-8 top-16 hidden w-36 text-ink/[0.07] lg:block" />
      <Container className="relative">
        <SectionHeading
          eyebrow={site.methodEyebrow}
          title={site.methodTitle}
        />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {site.method.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06}>
              <article className="h-full border-t border-line pt-6">
                <p className="font-display text-3xl italic text-terracotta">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
