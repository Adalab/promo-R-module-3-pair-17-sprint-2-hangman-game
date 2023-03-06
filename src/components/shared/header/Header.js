import './header.scss'

const Header = ({ children }) => (
  <header>
    <h1 className='header__title'>{ children }</h1>
  </header>
)

export default Header
