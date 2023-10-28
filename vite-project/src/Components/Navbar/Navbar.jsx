import './Navbar.css'
import {GiWhisk} from 'react-icons/gi'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="web-logo">
        
       <h2 className="logo"> <GiWhisk className="logo-icon"/> Oh-So-Fluff.</h2>
      </div>
      <div className="list">
        <ul>
          <li>
            <Link to="/" className="navLink"> Home </Link>
          </li>
          <li>
          <Link to="/ourstory" className="navLink"> Our Story</Link>
          </li>
          <li>
          <Link to="/menu" className="navLink"> Menu </Link>
          </li>
        </ul>

       
        
      </div>
      <div className="action-items">
     
      <button className="call">Call Us</button>
      </div>
    </div>
  )
}

export default Navbar