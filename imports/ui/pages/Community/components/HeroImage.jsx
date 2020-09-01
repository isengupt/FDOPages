import React, { useState, useEffect } from "react";

const HeroImage = ({name, image}) => {
  return (
    <div class="fundraising-hero-image"
      style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover"
              }}
    >
      <div class="community-hero-text">
        <h1 class="heading">
          <span class="big-red-text">{name} </span>Community <br />
          Page
        </h1>
      </div>
      <div class="community-hero-side-info">
        <div class="donate-now-button">
          <div class="donate-text">Donate Now</div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
