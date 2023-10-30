import Hero from '../../src/Components/Hero/Hero'
import Intro from '../../src/Components/Intro/Intro'
import Bottom from '../../src/Components/Bottom/Bottom'

//combining the components on to the 'home' page 
const Home = () => {
  return (
    <div>
     
     <Hero/>
     <Intro/>
     <Bottom/>
    </div>
  )
}

export default Home
