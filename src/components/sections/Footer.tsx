import Container from "../common/Container";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-info">
            <h2>Sobradinho Gases</h2>

            <p>Endereço: Rua Exemplo, 123, Sobradinho, DF</p>
            <p>Telefone: (61) 1234-5678</p>
            <p>Email: sobradinhogases@gmail.com</p>
          </div>

          <nav className="footer-nav">
            <a href="/sobre">Sobre</a>
            <a href="/produtos">Produtos</a>
            <a href="/contato">Contato</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Sobradinho Gases. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;