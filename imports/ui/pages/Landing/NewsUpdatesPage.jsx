import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';

const NewsUpdatesPage = ({updates}) => {

  return (
    <div>
       <div> { updates && updates.map(update => 
        <div key={update._id}>
          <div>Title: {update.title}</div>
          <div>Description: {update.description}</div>
          <div>User: {update.newsLink}</div>
          <div>User: {update.user}</div>
          <a href = {`/profile/${update.user}`}>Visit Profie</a>
          <div>Community: {update.community}</div>
          <a href = {`/editUpdate/${update._id}`}>Edit Event</a>
          <br></br>

        </div>

        ) }</div>
    </div>
  );
};

