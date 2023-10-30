import './Footer.css'
import {GiWhisk} from 'react-icons/gi'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
      <h2><GiWhisk className="logo2-icon"/> Oh-So-Fluff.</h2>
      </div>
      <div className="footer-content">
     <p className="address"> 27 Oakland Street </p>
     <p className="address"> Monument Ext 4, Krugersdorp </p>
     <p className="address"> 1739 </p>
      </div>
      </div>
  )
}

export default Footer