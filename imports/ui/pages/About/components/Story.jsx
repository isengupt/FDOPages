import React, { useState, useEffect } from 'react';
import "../styling/Story.css"

const Story = ({story}) => {
    return (
        <>
        <div>{story.title}</div>
        <div>{story.story}</div>
       <img className = "story__image"src={story.founderImage} alt=""/>
        <div>{story.Name}</div>
        </>
    )
}

export default Story;