import './Intro.css'
import intro from '../../assets/intro.jpg'
import { Link } from 'react-router-dom'


const Intro = () => {
  return (
    <div className="Intro">
    <div className="left-content">
        <img src={intro} className="intro-img"/>
    </div>
    <div className="right-content">
    <h2 className="intro-header">12 Years and Counting...</h2>
    <p>We celebrate 12 years of excellence and consistent serving of the best baked goods. Our story dates back in 2011 when Grace Miller chose to follow her dream </p>
    <p>as a teacher in Krugersdorp Highschool. Today, we are proud to have grown into what we are today, with 12 staff members and more than 125 customers coming in weekly.</p>
    <p>We hope to share many more delightful tastes and memories with all our beloved customers and community. With Love, Oh-So-Fluff!</p>
    < Link to="/ourstory">
    <button className="intro-btn">Our Story</button>
    </Link>
   
    </div>
    
    </div>
    
    
    
   
  )
}

export default Intro