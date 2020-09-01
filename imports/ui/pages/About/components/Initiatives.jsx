import React, { useState, useEffect } from "react";

import Carousel from 'react-bootstrap/Carousel'

const Initiatives = () => {

  const [index, setIndex] = useState(1);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div class="content-section-bg">
        <div class="initiatives-header no-margin-bottom">
          <div class="title-wrap-centre">
            <h2 class="heading-2 big-heading-white">Our Initiatives.</h2>
            <p class="paragraph-2">See what drives us.</p>
          </div>
        </div>
      </div>
      <div class="content-section extra-padding">
      <div class="dashboard-title-component">
            <div class="dashboard-title-text-item">
            
              <div class="homepage-sidebar-text">Updates</div>
            </div>
            <a href="/list/newsupdate" class="contact-us-button w-button">
              More
            </a>
          </div>
        <div class="homepage-iniatitives">
         
       
          <div id="w-node-f228809eb4a3-a378b556" class="div-block-7">
            <div class="iniatives-home-page-image"
            style={{backgroundImage: "url(images/updates1.JPG)"}}
            >
   
              
            </div>
            <div class="iniatives-home-page-container">
              <div class="home-page-initiatives-text">
                <div class="iniatives-heading">We are committed.</div>
                <h1 class="iniatives-text-copy">
                  We are a student run organization committed to providing
                  resources for students interested in health, medicine, or
                  anything remotely medicine related. We can get in contact if
                  you would like to provide an event for students.
                </h1>
              </div>
            </div>
          </div>
          <div id="w-node-639d81b3f566-a378b556" class="div-block-7">
            <div class="iniatives-home-page-image">
          
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="w-100"
          src="images/updates4.jpeg"
          alt="First slide"
        />
   
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          src="images/updates2.JPG"
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          src="images/updates3.JPG"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
            </div>
            <div class="iniatives-home-page-container">
              <div class="home-page-initiatives-text">
                <div class="iniatives-heading">We are committed.</div>
                <h1 class="iniatives-text-copy">
                  We are a student run organization committed to providing
                  resources for students interested in health, medicine, or
                  anything remotely medicine related. We can get in contact if
                  you would like to provide an event for students.
                </h1>
              </div>
            </div>
          </div>
          <div id="w-node-1b856dc98d57-a378b556" class="div-block-7">
            <div
              id="w-node-1b856dc98d58-a378b556"
              class="iniatives-home-page-image"
              style={{backgroundImage: "url(images/updates5.jpg)"}}
            ></div>
            <div class="iniatives-home-page-container">
              <div class="home-page-initiatives-text">
                <div class="iniatives-heading">We are committed.</div>
                <h1 class="iniatives-text-copy">
                  We are a student run organization committed to providing
                  resources for students interested in health, medicine, or
                  anything remotely medicine related. We can get in contact if
                  you would like to provide an event for students.
                </h1>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default Initiatives;
