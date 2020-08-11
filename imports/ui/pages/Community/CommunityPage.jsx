import React, { useState, useEffect } from 'react';
import { DetailComponents, setButtonState, useAccount } from "../../utils/utils"

const CommunityPage = () => {
  const { user, isLoggingIn } = useAccount();
  const [communityData, setCommunityData] = useState(false);
  

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
          <DetailComponents.AdvisorDetail detailInfo={communityData.advisor}/>
          <DetailComponents.FundraisingDetail detailInfo={communityData.fundraising}/>
          <DetailComponents.ImageGalleryDetail detailInfo={communityData.images}/>
          <DetailComponents.LeadershipDetail detailInfo={communityData.leadership}/>
          <DetailComponents.HistoryDetail detailInfo={communityData.history}/>
         </>
          : 
          <div>Loading Data</div>
}
        </div>
    )
}

export default CommunityPage;