export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    id: "entrega",
    question: "Como funciona a entrega?",
    answer: "Entre em contato conosco para consultar as condições de entrega.",
  },
  {
    id: "produtos",
    question: "Quais gases vocês fornecem?",
    answer: "Trabalhamos com gases medicinais e industriais.",
  },
  {
    id: "comodato",
    question: "Vocês trabalham com comodato?",
    answer: "Entre em contato para conhecer nossas condições de comodato.",
  },
];