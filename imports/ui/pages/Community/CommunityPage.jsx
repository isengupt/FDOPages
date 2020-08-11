import React, { useState, useEffect } from 'react';
import Leadership from './components/Leadership'
import History from './components/History'
import Advisor from './components/Advisor'
import Initiatives from './components/Initiatives'
import ImageGallery from './components/ImageGallery'
import Fundraising from './components/Fundraising'
import { setButtonState, useAccount } from "../../utils/utils"
import { useTracker } from 'meteor/react-meteor-data';
import { ChapterInfo } from '../../../api/schema/ChapterInfo';
const CommunityPage = () => {
  const { user, isLoggingIn } = useAccount();
  const [communityData, setCommunityData] = useState(false);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    Meteor.call("getCurrentCommunityData", (e, r) => {
      console.log(e)
      if (!e) {
        
      setCommunityData(r);
      console.log(r)
      }
     


    });
  }, [user]);

  useEffect(() => {
    Meteor.call("setEditable", "community", (e, r) => {

      if (!e) {
        console.log(r)
        if(r) {

          setButtonState("edit-community")
        }
        else setButtonState("dashboard")
      }

    });
  }, [user, isLoggingIn])

  
    return (
        <div>
          {communityData ?
          <>
         <Initiatives initiatives = {communityData.initiatives}/>
         <Advisor advisor = {communityData.advisor}/>
         <Fundraising fundraising = {communityData.fundraising}/>
         <ImageGallery images = {communityData.images} />
         <Leadership leadership={communityData.leadership}/>
         <History history = {communityData.history}/>
         </>
          : 
          <div>Loading Data</div>
}
        </div>
    )
}

export default CommunityPage;