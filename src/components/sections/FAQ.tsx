import SectionTitle from "../common/SectionTitle";
import FAQItem from "../faq/FAQItem";
import { faqs } from "../../data/faqs";

function FAQ() {
  return (
    <div>
      <SectionTitle>Perguntas e Respostas</SectionTitle>

      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}

export default FAQ;