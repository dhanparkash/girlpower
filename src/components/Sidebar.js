import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
export default props => { 
  return (
    <Menu>
    <Link to="/apply-now" className="logo">Apply Now</Link>
      <Link to="/merch" className="logo">Merch</Link>
     <Link to="/contact-us" className="logo">Contact Us</Link>
    </Menu>
  );
};