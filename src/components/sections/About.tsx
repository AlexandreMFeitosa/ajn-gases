import Button from "../common/Button";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function About() {
  return (
    <div>
        <Container>
            <SectionTitle>Sobre</SectionTitle>
            <h3>Nossa loja surgiu com o objetivo de oferecer produtos de qualidade e atendimento excepcional aos nossos clientes.</h3>
            <img src="/gases-sobre.jpg" alt="Imagem da loja" />
            <Button>Saiba mais</Button>
        </Container>
    </div>
  )
}

export default About;