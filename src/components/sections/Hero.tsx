import Container from "../common/Container";
import Button from "../common/Button";

function Hero() {
  return (
    <div>
      <Container>
        <h1 className="text-5xl font-bold">AJN GASES</h1>

        <p>Soluçoes em gases industriais e medicinais.</p>

        <Button>Saiba mais</Button>

        <img src="pexels-mm-dental-56682202-8260447.jpg" alt="Cilindros de gases industriais" />
      </Container>
    </div>
  );
}

export default Hero;
