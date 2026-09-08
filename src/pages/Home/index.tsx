import Hero from "../../components/sections/Hero";
import FeaturedProducts from "../../components/sections/FeaturedProducts";
import Sectors from "../../components/sections/Sectors";
import About from "../../components/sections/About";
import Footer from "../../components/sections/Footer";
import FAQ from "../../components/sections/FAQ";

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
      <br/>
      <hr/>
      <br/>
      <FAQ />
      <br/>
      <hr/>
      <br/>
      <Footer />
    </div>
  );
}
