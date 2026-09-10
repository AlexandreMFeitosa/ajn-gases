import Button from "../common/Button";

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
};

function ProductCard({
  name,
  description,
  image,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-card-content">
        <h3>{name}</h3>

        <p>{description}</p>

        <Button>Saiba mais</Button>
      </div>
    </article>
  );
}

export default ProductCard;