import Container from "../../components/common/Container";
import Hero from "../../components/sections/Hero";
import FeaturedProducts from "../../components/sections/FeaturedProducts";
import Sectors from "../Sectors";

export default function Home() {
  return (
    <div>
      <Container>
        <Hero />
        <FeaturedProducts />
        <Sectors />
      </Container>
    </div>
  );
}
