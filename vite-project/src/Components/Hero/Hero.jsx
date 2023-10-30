import './Hero.css'
import heroImg from '../../assets/mae-mu-m9pzwmxm2rk-unsplash.jpg'
import { Link } from 'react-router-dom'


const Hero = () => {

 
  return (
    <div className="hero background-image" style={{ backgroundImage: `url(${heroImg})` }}>
    <div className="content">
       <h1 className="hero-heading">We Make Them <br /><span className="hero-span">Fluffy</span> & Fresh.</h1>
       <Link to="/menu">
       <button className="hero-btn">Order Now</button>
       </Link>
    </div>
   
  </div>
  
  )
}

export default Hero