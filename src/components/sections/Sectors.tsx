import Container from "../common/Container"
import SectionTitle from "../common/SectionTitle"
import { sectors } from "../../data/sectors"
import SectorsCard from "../sectors/SectorsCard"

function Sectors() {
  return (
    <div>
      <Container>
        <SectionTitle>Setores</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
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
    </div>
  )
}

export default Sectors