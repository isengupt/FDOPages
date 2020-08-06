import React, { useState, useEffect } from 'react';
import "../styling/Initiatives.css"



const Initiatives = ({ initiatives }) => {
    return (
        <div>
Initiatives

            {initiatives.organizationInitiatives.map(intiative =>
                <div>
                    <div>{intiative}</div>
                </div>

            )}
        </div>
    )
}

export default Initiatives;