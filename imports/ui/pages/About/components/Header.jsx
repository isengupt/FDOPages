import React, { useState, useEffect } from 'react';

const Header = () => {
    return ( 
        <div id="Header" class="header">
        <div class="container-flex">
          <div class="home-page-main-text">
      
          


            <h1 style={{  transform : "translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"}} class="hero-h1">Empowering people everywhere to be the words to be <span class="brand-span">Doctors </span>too.</h1>
          </div>
          <div class="div-block-5">
          <h2 class="medium-heading no-margin-heading">We are here to help</h2>
            <h1 class="iniatives-text grey-text">We are a student run organization committed to providing resources for students interested in health, medicine, or anything remotely medicine related. We can get in contact if you would like to provide an event for students.
            <br/>
            <br/>
            We are a student run organization committed to providing resources for students interested in health, medicine, or anything remotely medicine related. We can get in contact if you would like to provide an event for students.
            
            </h1>
            <div class="div-block-6"><a href="order.html" data-w-id="b4afeda9-f199-b007-4128-f52c082bc0d0" class="contact-us-button w-button">Get in Contact</a></div>
          </div>
        </div>
      </div>
    )
}

export default Header;