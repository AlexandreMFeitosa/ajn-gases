import Hero from "../../components/sections/Hero";
import FeaturedProducts from "../../components/sections/FeaturedProducts";
import Sectors from "../../components/sections/Sectors";
import About from "../../components/sections/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <br/>
      <hr/>
      <br/>
      <FeaturedProducts />
      <br/>
      <hr/>
      <br/>
      <Sectors />
      <br/>
      <hr/>
      <br/>
      <About />
    </div>
  );
}
