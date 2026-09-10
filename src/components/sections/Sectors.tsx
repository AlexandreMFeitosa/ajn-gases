import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { sectors } from "../../data/sectors";
import SectorsCard from "../sectors/SectorsCard";

function Sectors() {
  return (
    <section className="sectors">
      <Container>
        <div className="sectors-header">
          <SectionTitle>Setores</SectionTitle>

          <p>
            Soluções em gases para diferentes necessidades e segmentos.
          </p>
        </div>

        <div className="sectors-grid">
          {sectors.map((sector) => (
            <SectorsCard
              key={sector.id}
              name={sector.name}
              description={sector.description}
              image={sector.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Sectors;