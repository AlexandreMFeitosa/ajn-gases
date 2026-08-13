import Container from "../../components/common/Container"
import { Button } from "../../components/common/Button";
import { SectionTitle } from "../../components/common/SectionTitle";


export default function Home() {

  return (
      <div>
        <Container>
          <h1>A.J.N Gases</h1>
          <p>Soluçoes em gases industriais e medicinais.</p>
      
          <Button>
            Saiba mais
          </Button>
    
          <SectionTitle>
            Nossos Produtos
          </SectionTitle>
        </Container>
      </div>
  );
}