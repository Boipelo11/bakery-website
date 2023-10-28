import './Intro.css'
import intro from '../../assets/intro.jpg'


const Intro = () => {
  return (
    <div className="Intro">
    <div className="left-content">
        <img src={intro} className="intro-img"/>
    </div>
    <div className="right-content">
    <h2 className="intro-header">12 Years and Counting...</h2>
    <p>In the heart of Krugersdorp, nestled on Oak Street, Mrs. Grace Miller, a passionate baker with a lifelong dream, started Oh-So-Fluffy.<br/> With the scent of freshly baked bread wafting through the town, her cozy bakery quickly became a beloved local spot. Residents flocked to savor her delectable pastries and hear the heartwarming tales of her culinary journey.<br/> Today, Sunrise Delights stands as a cherished Krugersdorp institution, a testament to Mrs. Millers dedication and the towns love for her creations.</p>
    <button className="intro-btn">Our Story</button>
    </div>
    
    </div>
    
    
    
   
  )
}

export default Intro