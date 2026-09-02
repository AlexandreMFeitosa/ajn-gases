import Button from "../common/Button";

type SectorsCardProps = {
    name : string;
    description : string;
    image: string;
}

function SectorsCard({name , description , image} : SectorsCardProps) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <Button>Saiba mais</Button>
    </div>
  )
}

export default SectorsCard;