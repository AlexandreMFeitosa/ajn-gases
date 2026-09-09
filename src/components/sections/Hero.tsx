import Container from "../common/Container";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-content">
          <span className="hero-label">SOBRADINHO GASES</span>

          <h1>
            Soluções em gases
            <span>industriais e medicinais</span>
          </h1>

          <p>
            Produtos e soluções confiáveis para hospitais, clínicas,
            empresas e diferentes setores industriais.
          </p>

          <div className="hero-actions">
            <Button>Conheça nossos produtos</Button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="/pexels-mm-dental-56682202-8260447.jpg"
            alt="Cilindros de gases industriais"
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;