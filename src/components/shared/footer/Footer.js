import { NavLink } from "react-router-dom"
import './footer.scss'

const Footer = () => (
  <footer className="footer">
    <nav>
      <ul>
        <li className="footer__menu-item">
          <NavLink className="footer__menu-link" to="#/">A jugar</NavLink>
        </li>
        <li className="footer__menu-item">
          <NavLink className="footer__menu-link active" to="/instructions"
            >¿Cómo se juega?</NavLink>
        </li>
      </ul>
    </nav>
    <small className="footer__copy">© Adalab</small>
  </footer>
)

export default  Footer;
