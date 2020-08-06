import React, { useState, useEffect } from 'react';
import './Advisor.css'


const Advisor = ({ advisor }) => {



    return (
        <div className="advisor__container">
            <div className="advisor__container__left">
                <img className="advisor__image" src={advisor.advisorImage} />
            </div>
            <div className="advisor__container__right">
                <div className="advisor__item__margin advisor__name">{advisor.advisorName}</div>
                <div className="advisor__item__margin advisor__biography">{advisor.advisorBiography}</div>
                <div className="advisor__item__margin advisor__quote"><i>{advisor.advisorQuote}</i></div>
                <a className="advisor__item__margin advisor__contact" href={`/profile/${advisor.advisorProfileLink}`}>Get in Contact</a>
            </div>

        </div>
    )
}

export default Advisor;