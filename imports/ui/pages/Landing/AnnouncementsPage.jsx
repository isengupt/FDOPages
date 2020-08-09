import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';

const AnnouncementsPage = ({announcements}) => {

  return (
    <div>
       <div> { announcements && announcements.map(announcement => 
        <div key={announcement._id}>
          <div>Title: {announcement.title}</div>
          <div>Content: {announcement.content}</div>
          <div>Contact: {announcement.contact}</div>
          <div>User: {announcement.user}</div>
          <div>User: {announcement.community}</div>
          <a href = {`/profile/${announcement.user}`}>Visit Profie</a>
          
          <a href = {`/editUpdate/${announcement._id}`}>Edit Event</a>
          <br></br>

        </div>

        ) }</div>
    </div>
  );
};

export default AnnouncementsPage