import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import ProductCard from "../products/ProductCard";
import { products } from "../../data/products";

function FeaturedProducts() {
  return (
    <div>
      <Container>
        <SectionTitle>Nossos Produtos</SectionTitle>

        <p>Conheça algumas das nossas principais soluções.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>

        <Button>Ver Produtos</Button>
      </Container>
    </div>
  );
}

export default FeaturedProducts;
