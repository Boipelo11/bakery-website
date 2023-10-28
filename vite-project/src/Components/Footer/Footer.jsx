import './Footer.css'
import {GiWhisk} from 'react-icons/gi'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
      <h2><GiWhisk className="logo2-icon"/> Oh-So-Fluff.</h2>
      </div>
      <div className="footer-content">
      <ul>
        <li>
          Home
        </li>
        <br/>
        <li>
          Our Story
        </li>
        <br/>
        <li>
          Menu
        </li>
      </ul>
      </div>
      </div>
  )
}

export default Footer