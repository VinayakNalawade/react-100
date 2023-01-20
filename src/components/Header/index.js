import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="headerContainer">
    <div className="logoContainer">
      <img
        className="logoimg"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="logoheading">Wave</h1>
    </div>
    <div className="tabConatainer">
      <Link to="/" className="logoheading">
        Home
      </Link>
      <Link to="/about" className="logoheading">
        About
      </Link>
      <Link className="logoheading" to="/contact">
        Contact
      </Link>
    </div>
  </div>
)

export default Header
