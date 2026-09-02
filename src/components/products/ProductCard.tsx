import Button from "../common/Button";


type ProductCardProps = {
    name: string;
    description: string;
    image:string;
  }

function ProductCard({name, description, image}: ProductCardProps) {
  return (
    <div>
      <img src={image} alt={name}/>

      <h3>{name}</h3>  
      <p>{description}</p>

      <Button>Saiba mais</Button>
    </div>
  );
}

export default ProductCard;
