import './Bottom.css'
import img3 from '../../assets/ales-krivec-QnNqGoCnBg0-unsplash.jpg'
import  {AiFillStar} from 'react-icons/ai'


const Bottom = () => {
  return (
    <div className="btm-img" style={{ backgroundImage: `url(${img3})` }}>
    <div className="btm-content">
    <h3 className="btm-line">Voted The Best Bakery in The West Rand <br/> by The Cradle Kind Awards!</h3>
     <div className="btm-icons">
     <AiFillStar className="btm-icon"/>
     <AiFillStar className="btm-icon"/>
     <AiFillStar className="btm-icon"/>
     <AiFillStar className="btm-icon"/>
     <AiFillStar className="btm-icon"/>
     </div>
      
    </div>
    </div>
  )
}

export default Bottom