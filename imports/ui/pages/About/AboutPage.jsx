import React, { useState, useEffect } from 'react';
import { DetailComponents,  setButtonState, useAccount } from "../../utils/utils"



const AboutPage = () => {
  const { user, isLoggingIn } = useAccount();
  const [aboutData, setAboutData] = useState(false);
 


  useEffect(() => {
    Meteor.call("getCurrentAboutData", (e, r) => {
      if (!e) setAboutData(r);
      console.log(r)


    });
  }, []);

  useEffect(() => {
    Meteor.call("setEditable", "about", (e, r) => {

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

         <DetailComponents.ImageGalleryDetail detailInfo={aboutData.images}/>
          <DetailComponents.StoryDetail detailInfo={aboutData.story}/>
          <DetailComponents.MissionDetail detailInfo={aboutData.mission}/>
          <DetailComponents.InitiativesDetail detailInfo={aboutData.initiatives}/> 
        </div>
        :
        <div>Loading the information</div>

      }


    </div>
  )
}

export default AboutPage;