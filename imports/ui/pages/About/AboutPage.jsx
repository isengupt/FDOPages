import React, { useState, useEffect } from 'react';
import { DetailComponents,  setButtonState, useAccount } from "../../utils/utils"
import Header from './components/Header'
import Leaders from './components/Leaders'
import Intiatives from './components/Initiatives'
import Inquire from './components/Inquire'
import ReactPlayer from "react-player";



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
    <>
      {aboutData ?
        <>

        <Header/>

        <div class="content-section-bg">
        <div class="initiatives-header no-margin-bottom green-text">
          <div class="title-wrap-centre extra-bottom">
            <h2 class="heading-2 big-heading-white">See what we're about</h2>
            <p class="paragraph-2 no-margin-title">See what drives us.</p>
            <a
            href="order.html"
            data-w-id="4b208bba-bbb5-5afa-238f-737f9161a635"
            class="learn-more-button w-button"
          >
            Learn More
          </a>
        
          </div>
          <ReactPlayer width="100%" height="560px"
        url="https://www.youtube.com/watch?v=aBa6cbg0hH4&feature=emb_title"
      />
        </div>
       
      </div>
       
        <Leaders/>
        <Intiatives/>
        <Inquire/>

     {/*     <DetailComponents.ImageGalleryDetail detailInfo={aboutData.images}/>
          <DetailComponents.StoryDetail detailInfo={aboutData.story}/>
          <DetailComponents.MissionDetail detailInfo={aboutData.mission}/>
          <DetailComponents.InitiativesDetail detailInfo={aboutData.initiatives}/>  */}
        </>
        :
        <>
        </>

      }


    </>
  )
}

export default AboutPage;