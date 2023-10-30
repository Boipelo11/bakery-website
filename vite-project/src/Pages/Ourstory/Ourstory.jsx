import './Ourstory.css'
import bakery from '../../assets/anh-tran-qPQqZ0y-rJ0-unsplash.jpg'

const Ourstory = () => {
  return (
    <div className="Intro">
    <div className="left-content">
        <img src={bakery} className="intro-img"/>
    </div>
    <div className="right-content">
    <h2 className="intro-header">Get To Know Us</h2>
    <p>In the heart of Krugersdorp, nestled on Oakland Street, Mrs. Grace Miller, a passionate baker with a lifelong dream, started Oh-So-Fluff.</p>
    
  <p>With the scent of freshly baked bread wafting through the town, her cozy bakery quickly became a beloved local spot. Residents flocked to savor her delectable pastries and hear the heartwarming tales of her culinary journey.</p>
  <br/>
  <p>Today, Oh-So-Fluff stands as a cherished Krugersdorp institution, a testament to Mrs. Millers dedication and the towns love for her creations.</p>
  <p>Oh-So-Fluff continues to delight the community with its mouthwatering treats and warm atmosphere, making it a place where sweet memories are created every day.</p>

   
    </div>
    
    </div>
  )
}

export default Ourstory