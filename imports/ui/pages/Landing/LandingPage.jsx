import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import _ from 'lodash';
import { ListEvents } from '../Events/ListEvents'
import { UpcomingEvents } from '../../../api/schema/UpcomingEvent';
import { LoginForm } from './LoginForm';
import SignUpForm from './SignUpForm';
import { Announcements } from '../../../api/schema/Announcements';
import { NewsUpdate } from '../../../api/schema/NewsUpdate';



const LandingPage = () => {

  const [logging, setLogging] = useState('login')


  const { events, user, announcements, news } = useTracker(() => {

    Meteor.subscribe('Dashboard');

    return ({
      events: UpcomingEvents.find({}).fetch(),
      announcements: Announcements.find({}).fetch(),
      news: NewsUpdate.find({}).fetch(),
      user: Meteor.user(),
    });
  });

  if (!user & logging == 'login') {
    return (
      <div className="simple-todos-react">
        <LoginForm setLogging={setLogging} />
      </div>
    );
  }

  if (!user & logging == 'signup') {
    return (
      <div className="simple-todos-react">
        <SignUpForm setLogging={setLogging} />
      </div>
    );
  }

  function logout() {
    Meteor.logout();
  }

  return (
    <div className="simple-todos-react">
        <div> { news && news.map(item => 
        <div key={item._id}>
          <div>Link: {item.newsLink}</div>
          <div>Title: {item.title}</div>
          <div>EventType: {item.description}</div>
          <div>Owner: {item.user}</div>
      
          <div>Community: {item.community}</div>

          <br></br>

        </div>

        ) }</div>


        <div> { announcements && announcements.map(item => 
        <div key={item._id}>
          <div>Title: {item.title}</div>
          <div>Content: {item.content}</div>
          <div>User: {item.user}</div>
          <div>Contact: {item.contact}</div>
      
          <div>UserLevel: {item.userLevel}</div>

          <br></br>

        </div>

        ) }</div>

     
     

      <ListEvents events={events} />
    </div>
  );
};

export default LandingPage

