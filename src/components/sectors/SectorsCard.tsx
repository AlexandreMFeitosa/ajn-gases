import Button from "../common/Button";

type SectorsCardProps = {
  name: string;
  description: string;
  image: string;
};

function SectorsCard({
  name,
  description,
  image,
}: SectorsCardProps) {
  return (
    <article className="sector-card">
      <div className="sector-card-image">
        <img src={image} alt={name} />
      </div>

      <div className="sector-card-content">
        <h3>{name}</h3>

        <p>{description}</p>

        <Button>Saiba mais</Button>
      </div>
    </article>
  );
}

export default SectorsCard;