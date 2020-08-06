import React, { useState } from 'react';
import Initiatives from './components/Initiatives'
import Mission from './components/Mission'
import Story from './components/Story'
import ImageGallery from './components/ImageGallery'
import { useTracker } from 'meteor/react-meteor-data';
import { About } from '../../../api/schema/About';

const AboutPage = () => {

  const { about, user } = useTracker(() => {

    Meteor.subscribe('AboutInfo');

    return ({
      about: About.find({}).fetch(),
      user: Meteor.user(),
    });
  });

  console.log(about)
  return (
    <div>


      {about[0] ?
        <div>
          <h1> {about[0].organizationName} About Page</h1>
          <Story story={about[0].story} />
          <Initiatives initiatives={about[0].initiatives} />
          <Mission mission={about[0].mission} />
          <ImageGallery images={about[0].imageGallery} />
        </div>
        :
        <div>
          Loading...
            </div>}
    </div>
  )
}

export default AboutPage;