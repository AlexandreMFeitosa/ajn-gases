import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/locacao">Locação</Link>
        <Link to="/segmentos">Segmentos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}