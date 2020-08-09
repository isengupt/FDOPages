import React, { useState, useEffect } from 'react';
import Initiatives from './components/Initiatives'
import Mission from './components/Mission'
import Story from './components/Story'
import ImageGallery from './components/ImageGallery'
import { useTracker } from 'meteor/react-meteor-data';
import { About } from '../../../api/schema/About';
import { setButtonState, useAccount } from "../../utils/utils"



const AboutPage = () => {
  const { user, isLoggingIn } = useAccount();
  const [aboutData, setAboutData] = useState(false);
  const [editable, setEditable] = useState(false);


  useEffect(() => {
    Meteor.call("getCurrentAboutData", (e, r) => {
      if (!e) setAboutData(r);
      console.log(r)


    });
  }, []);

  useEffect(() => {
    Meteor.call("setEditable", "about", (e, r) => {
      console.log(e)
      if (!e) {

        if(r) {
          setButtonState("edit-about")
        }
        else setButtonState("dashboard")
      }

    });
  }, [user, isLoggingIn])



  return (
    <div>
      {aboutData ?
        <div className="about-container">
          <Initiatives user={user} initiatives={aboutData.initiatives}/>
          <Mission user={user} mission={aboutData.mission}/>
          <Story user={user} story={aboutData.story}/>
          <ImageGallery user={user} images={aboutData.images}/>
        </div>
        :
        <div>Loading the information</div>

      }


    </div>
  )
}

export default AboutPage;