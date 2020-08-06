import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data'
import { UpcomingEvents } from '../../../api/schema/UpcomingEvent';
import { Meteor } from 'meteor/meteor';

export const ListEvents = ({events}) => {


 
/* 
  const { events, user } = useTracker(() => {
    
    Meteor.subscribe('UpcomingEvents');

    return ({
      events: UpcomingEvents.find({}).fetch(),
      user: Meteor.user(),
    });
  }); */

 

  return (
    <div className="simple-todos-react">
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

