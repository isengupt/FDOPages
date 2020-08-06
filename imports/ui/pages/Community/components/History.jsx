import React, { useState, useEffect } from 'react';
import '../styling/History.css'


const History = ({history}) => {
    return (
    <>
    <img className="advisor__image" src={history.founderImage} alt="founder-image" />
    <div>{history.founderName}</div>
    <div>{history.founderStory}</div>
    <div>{history.founderQuote}</div>
    <div>{history.foundProfileLink}</div>
    <div>{history.founderProfileLink}</div>
    </>
    )
}

export default History;