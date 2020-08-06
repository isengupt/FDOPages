import React, { useState, useEffect } from 'react';
import "../styling/Mission.css"



const Mission = ({mission}) => {
    return (
        <>
        <div>{mission.mission}</div>
        <div>{mission.vision}</div>
        </>
    )
}

export default Mission;