import SectionTitle from "../common/SectionTitle";
import FAQItem from "../faq/FAQItem";
import { faqs } from "../../data/faqs";
import { Container } from "../common/Container";

function FAQ() {
  return (
    <div>
      <Container>
        <SectionTitle>Perguntas e Respostas</SectionTitle>

      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
      </Container>
    </div>
  );
}

export default FAQ;