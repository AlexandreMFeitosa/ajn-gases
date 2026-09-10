import Button from "../common/Button";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function About() {
  return (
    <section className="about">
      <Container>
        <SectionTitle>Sobre</SectionTitle>

        <div className="about-content">
          <div className="about-text">
            <h3>
              Nossa loja surgiu com o objetivo de oferecer produtos de
              qualidade e atendimento excepcional aos nossos clientes.
            </h3>

            <Button>Saiba mais</Button>
          </div>

          <div className="about-image">
            <img
              src="/gases-sobre.jpg"
              alt="Imagem da loja"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;