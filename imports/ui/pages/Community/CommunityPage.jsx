import React, { useState, useEffect } from 'react';
import Initiatives from './components/Initiatives'
import Leadership from './components/Leadership'
import History from './components/History'
import Advisor from './components/Advisor'
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
         Community info
          
            
           
        </div>
    )
}

export default CommunityPage;