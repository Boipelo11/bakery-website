import './Footer.css'
import {GiWhisk} from 'react-icons/gi'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
      <h2><GiWhisk className="logo2-icon"/> Oh-So-Fluff.</h2>
      </div>
      <div className="footer-content">
     <p> 27 Oakland Street </p>
     <p> Monument Ext 4, Krugersdorp </p>
     <p> 1739 </p>
      </div>
      </div>
  )
}

export default Footer