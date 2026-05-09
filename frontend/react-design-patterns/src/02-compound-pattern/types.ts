export interface Accordion {
  children: React.ReactNode;
  AccordionItem: AccordionItem;
}

export interface AccordionItem {
  children: React.ReactNode;
  title: string;
  index: number;
}

export interface AccordionContent {
  children: React.ReactNode;
  index: number;
}
