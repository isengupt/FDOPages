import React from 'react';
import { Meteor } from 'meteor/meteor';


/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
        
      <div>

        <p>You are signed out.</p>
      </div>
    );
  }
}