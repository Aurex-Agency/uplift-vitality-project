import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="w-full divide-y divide-hairline border-y border-hairline">
      {items.map((it, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-0">
          <AccordionTrigger className="py-6 text-left font-display text-xl text-primary hover:no-underline">
            {it.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
            {it.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}