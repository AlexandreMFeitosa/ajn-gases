import SectionTitle from "../common/SectionTitle";
import FAQItem from "../faq/FAQItem";
import { faqs } from "../../data/faqs";
import Container from "../common/Container";

function FAQ() {
  return (
    <section className="faq">
      <Container>
        <SectionTitle>Perguntas e Respostas</SectionTitle>

        <div className="faq-list">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;