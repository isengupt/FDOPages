import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';

const UpcomingEventsPage = ({events}) => {

  return (
    <div>
       <div> { events && events.map(event => 
        <div key={event._id}>
          <div>Title: {event.title}</div>
          <div>Description: {event.description}</div>
          <div>EventType: {event.eventType}</div>
          <div>Owner: {event.owner}</div>
          <a href = {`/profile/${event.owner}`}>Visit Profie</a>
          <div>Community: {event.community}</div>
          <a href = {`/editEvent/${event._id}`}>Edit Event</a>
          <br></br>

        </div>

        ) }</div>
    </div>
  );
};

export default UpcomingEventsPage

