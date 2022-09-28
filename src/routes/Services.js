import { Link } from 'react-router-dom';
import rightimage from '../images/rectangletwo.png';
import leftimage from '../images/sheroescafe.jpg';
const Services = () => {
  return (
    <div class="container">
    <div class="row">
    <h2>Services page</h2>
      <Link to="/web-design">Web design</Link>
      <Link to="/seo">Seo</Link>  
    <div class="col-md-6" id="banner">
    About Us
    We believe that achieving true gender equality requires a radical shift in the way young women are mentored in the workplace.
    At Girl Power Talk, we are passionately dedicated to empowering women–as well as men and nonbinary individuals–with opportunities to learn confidently, feel valued, and build a career full of purpose.
    
    “Let’s unlock your potential. Welcome to Girl Power Talk.“
    </div>
    <div class="col-md-6">
    <img src={rightimage} className="App-logos" alt="logo" />
    </div>
    <div class="col-md-6">
    <img src={leftimage} className="App-logos" alt="logo" />
    </div>
    <div class="col-md-6">
    About Us
    We believe that achieving true gender equality requires a radical shift in the way young women are mentored in the workplace.
    At Girl Power Talk, we are passionately dedicated to empowering women–as well as men and nonbinary individuals–with opportunities to learn confidently, feel valued, and build a career full of purpose.
    
    “Let’s unlock your potential. Welcome to Girl Power Talk.“
    </div>
    </div>
      </div>
  );
};

export default Services;
