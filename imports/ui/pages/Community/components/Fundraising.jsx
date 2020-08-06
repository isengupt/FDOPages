import React, { useState, useEffect } from 'react';
import '../styling/Fundraising.css'


const Fundraising = ({fundraising}) => {
    return (
        <>
        <div>Fundrasing Info</div>
        <div>{fundraising.fundName}</div>
        <div>{fundraising.fundLink}</div>
        </>
    )
}

export default Fundraising;