import rightimage from '../images/rectangletwo.png';
import leftimage from '../images/sheroescafe.jpg';
import aboutbanner from '../images/about_top.gif';
const About = () => {
  return (
    <div class="main-content">
    <div class="col-md-12">
    <img src={aboutbanner} className="App-logos" alt="logo" />
    </div>    
<div class="container">
<div class="row">
<div class="col-md-6 card-play">
<h2>About Us</h2>
<p>We believe that achieving true gender equality requires a radical shift in the way young women are mentored in the workplace.
At Girl Power Talk, we are passionately dedicated to empowering women–as well as men and nonbinary individuals–with
 opportunities to learn confidently, feel valued, and build a career full of purpose.</p> 

<em>“Let’s unlock your potential. Welcome to Girl Power Talk.“</em>>
</div>
<div class="col-md-6">
<img src={rightimage} className="App-logos" alt="logo" />
</div>
<div class="col-md-6">
<img src={leftimage} className="App-logos" alt="logo" />
</div>
<div class="col-md-6 card-play">
<h2>About Us</h2>
We believe that achieving true gender equality requires a radical shift in the way young women are mentored in the workplace. At Girl Power Talk, we are passionately 
dedicated to empowering women–as well as men and nonbinary individuals–with opportunities to learn confidently, feel valued, and build a career full of purpose.

<em>“Let’s unlock your potential. Welcome to Girl Power Talk.“</em>>
</div>
</div>
  </div>
  </div>  
  );
};

export default About;
