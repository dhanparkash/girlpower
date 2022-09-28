import React from 'react';
import mutedVideo from '../images/gpt-banner-hero-bg-compressed-1.mp4';
const Applynow = () => {
  return (
  <div class="col-md-12" id="topvideos">
  <video autoPlay muted loop>
          <source src={mutedVideo} />
        </video>
  </div>
  )
};

export default Applynow;