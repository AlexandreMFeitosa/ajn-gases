import Container from "../common/Container"
import SectionTitle from "../common/SectionTitle"

function Footer() {
  return (
    <div>
        <Container>
            <SectionTitle>Sobradinho Gases</SectionTitle>
            <p>Endereço: Rua Exemplo, 123, Sobradinho, DF</p>
            <p>Telefone: (61) 1234-5678</p>
            <p>Email:sobradinhogases@gmai.com</p>
            <nav>
                <a href="/sobre">Sobre</a>
                <a href="/produtos">Produtos</a>
                <a href="/contato">Contato</a>
            </nav>
        </Container>
    </div>
  )
}

export default Footer;