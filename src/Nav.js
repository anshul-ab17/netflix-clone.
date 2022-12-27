import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {

  const {show, handleshow } =useState (false);

  const transitionNavBar = () => {
    if(window.scrollY >100){
        handleshow(true);
    } else{
          handleshow(false);
    }
    
  };


  useEffect(() =>{
    window.addEventListener("Scroll",transitionNavBar);
    return () =>window.removeEventListener('scroll',transitionNavBar);
  }, []);
  

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className='contents' >
        <img className='logo' src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456'
        alt="logo" />

        <img className='avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='' />
      </div> 

    </div>
  );
}

export default Nav