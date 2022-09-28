import { Link } from 'react-router-dom';
import footerback from '../images/FooterBackground.png';
import footerLogo from  '../images/gptusafooter.png';
const Footer = () => {
  return (
    <div class="footer" style={{ backgroundImage: `url(${footerback})` }}> 
    <div class="container borderbottom">  
    <div class="row">
       <div class="col-md-4">
      <Link to="/" className="logo">
      <img src={footerLogo} className="App-logos" alt="logo" />
      </Link>
      <p>“One girl empowers another. Let’s change lives together: one girl, one woman and one human being at a time.”</p>
      <p>Phone: +91 7973931882</p> 
      <p>Email: info@girlpowertalk.com</p>
      </div>
      <div class="col-md-2">     
       <nav>
        <h3>About</h3>
      <ul class="menus">
      <li class="menu-items"><Link to="/about-us" className="logo">About Us</Link></li>
      <li class="menu-items"><Link to="/blog" className="logo">Blog</Link></li>
      <li class="menu-items"><Link to="/press" className="logo">Press</Link></li>
      </ul>
      </nav>
      </div>
      <div class="col-md-2">   
      <h3>Team</h3>  
       <nav>
      <ul class="menus">
      <li class="menu-items"><Link to="/our-leaders" className="logo">Our Leaders</Link></li>
      <li class="menu-items"><Link to="/gallery" className="logo">Gallery</Link></li>
      <li class="menu-items"><Link to="/videos" className="logo">Videos</Link></li>
      </ul>
      </nav>
      </div>     
      <div class="col-md-2">  
      <h3>Company</h3>     
       <nav>
      <ul class="menus">
      <li class="menu-items"><Link to="/careers" className="logo">Careers</Link></li>
      <li class="menu-items"><Link to="/submit-your-story" className="logo">Submit Your Story</Link></li>
      <li class="menu-items"><Link to="/get-directions" className="logo">Get Directions</Link></li>
      <li class="menu-items"><Link to="/privacy-policy" className="logo">Privacy Policy</Link></li>
      </ul>
      </nav>
      </div>  
      <div class="col-md-2">     
       <nav>
      <ul class="menus lastsection">
      <li class="menu-items apply"><Link to="/apply-now" className="logo">Apply Now</Link></li>
      <li class="menu-items contact"><Link to="/contact-us" className="logo">Contact Us</Link></li>
      </ul>
      </nav>
      </div>             
      </div>
    </div> 
    <div class="container"> <p>GIRL POWER TALK | © COPYRIGHT 2022</p> </div>
    </div>   
  );
};

export default Footer;
