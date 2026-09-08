type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div>
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}

export default FAQItem;