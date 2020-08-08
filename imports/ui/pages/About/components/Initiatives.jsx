import React, { useState, useEffect } from 'react';
import "../styling/Initiatives.css"



const Initiatives = ({ initiatives }) => {

    return (
        <div>
            Initiatives

            {initiatives.map(initiative =>
                <div>
                    <div>{initiative}</div>
                </div>
            )
      
            }
        </div>
    )
}

export default Initiatives;