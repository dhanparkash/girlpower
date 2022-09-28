import React from 'react'; 
import rightimage from '../images/home-about-girl-power-talk-min.png';
import mutedVideo from '../images/gpt-banner-hero-bg-compressed-1.mp4';
import images from "../components/images";
import ImageSlider from "../components/imageSlider";
import award1 from "../images/indian-achiever.png";
import award2 from "../images/globa-women-awards-gpt.png";
import award3 from "../images/under100.png";
import thiredbackground from '../images/thiredbackground.png';
import startingmovement from '../images/starting-movement.png';
const Home = () => {
  return  (
  <div class="main-content">
<div class="col-md-12" id="topvideos">
<video autoPlay muted loop>
        <source src={mutedVideo} />
</video>
</div>
<div class="container">
<div class="row">
  <div class="featuredsec"><span class="headcentered">FEATURED IN</span></div>
<div className="App">
    <ImageSlider images={images}/>
  </div>
  </div>
  </div>
<div class="container secondsec">
<div class="row">
<div class="col-md-6 card-play">
<h2>About Us</h2>
<p>We believe that achieving true gender equality requires a radical shift in the way young women are mentored in the workplace.
At Girl Power Talk, we are passionately dedicated to empowering women–as well as men and nonbinary individuals–with
 opportunities to learn confidently, feel valued, and build a career full of purpose.</p> 

<em>“Let’s unlock your potential. Welcome to Girl Power Talk.“</em>
<div class="planebtn"><a class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-square vc_btn3-style-flat vc_btn3-color-grey" href="/about">Learn More About Us</a></div>

<span class="headcentered">AWARD</span>
<div class="row">
<div class="col-md-4"><img src={award1} className="Awrdlogos" alt="logo" /></div>
<div class="col-md-4"><img src={award2} className="Awrdlogos" alt="logo" /></div>
<div class="col-md-4"><img src={award3} className="Awrdlogos" alt="logo" /></div>
</div>
</div>

<div class="col-md-6 gptback">
<img src={rightimage} className="App-logos" alt="logo" />
</div>
</div>
</div>

<div class="sectionthired" style={{ backgroundImage: `url(${thiredbackground})` }}>
<div class="container">
<div class="row">
<div class="col-md-6">
<h2>Vision</h2>
<p>Girl Power Talk is passionate about elevating young women to become global leaders who are recognized for their myriad of talents and contributions.
   We believe that through education, opportunity, and the support of empathetic male allies, girls and women will advance beyond gender roles, aspire to new levels of achievement and reshape our society. Through our innovative ecosystem, 
  we are changing the world of work for the better and providing all voices equal weight in a new narrative defining the future.</p>
  <div class="planebtn"><a class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-square vc_btn3-style-flat vc_btn3-color-grey" href="/about">See More</a></div>
</div>
<div class="col-md-6 play-card">

</div>
</div>
</div>
</div>

<section class="sectionfourth">

<div class="row">
<div class="col-md-4">
<img src={startingmovement} className="App-logos" alt="logo" />
</div>
<div class="col-md-8 padding-card">
<h2>Starting a Movement</h2>
<p>Girl Power Talk was founded on the idea that young India needs an innovative new work culture that equally harnesses people’s talents, irrespective of their gender. Girl Power Talk is more than a company. We are a movement rooted in empowerment, professional ambition, and social impact. For generations, women have been relegated to secondary roles, and the youth exploited for their energy and inexperience.
   We are a culture that will make history by changing this dynamic and writing the beautiful next chapter in this story.</p>
  <div class="planebtn"><a class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-square vc_btn3-style-flat vc_btn3-color-grey" href="/about">Apply Now</a></div>
</div>
</div>
</section>

</div>
    );
};

export default Home;
