import { Link } from 'react-router-dom'
import waveImg from '../assets/wave.png'

export default function Footer() {
  return (
    <footer>
      <hr />
      <nav>
        <Link to={{ pathname: "/" }}>Início</Link>
        <Link to={{ pathname: "/offers" }}>Ofertas</Link>
        <Link to={{ pathname: "/contact" }}>Contato</Link>
      </nav>
      <img src={waveImg} />
    </footer>
  )
}