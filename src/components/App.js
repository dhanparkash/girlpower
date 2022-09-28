import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import WebDesign from '../routes/WebDesign';
import SEO from '../routes/SEO';
import Services from '../routes/Services';
import Layout from './Layout';
import Frontend from '../routes/Frontend';
import PHP from '../routes/PHP';
import Node from '../routes/Node';
import AboutWho from '../routes/AboutWho';
import OurValues from '../routes/OurValues';
import WebDev from '../routes/WebDev';
import Applynow from '../routes/Applynow';
import Contact from '../routes/Contactus';
import Merch from '../routes/Merch';
import Login from '../components/Admin';
import React from 'react';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="Login" element={<Login />} />
          <Route path="services" element={<Services />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="node" element={<Node />} />
          <Route path="seo" element={<SEO />} />
          <Route path="php" element={<PHP />} />
          <Route path="who-we-are" element={<AboutWho />} />
          <Route path="our-values" element={<OurValues />} />
          <Route path="apply-now" element={<Applynow />} />
          <Route path="contact-us" element={<Contact />} />        
          <Route  path="/merch"  element={<Merch />  }/>  
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
