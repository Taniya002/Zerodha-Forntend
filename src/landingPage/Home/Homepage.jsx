import React from 'react';
import HeroSec from './HeroSec';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Openaccount from '../../../Openaccount';
import Nav_bar from '../../../Nav_bar';
import Footer from '../../../Footer';

function HomePage() {
    return ( 
    <>
  
    <HeroSec/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education/>
    <Openaccount/>
    
    </>
     );
}

export default HomePage;