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
        <>
          {communityData ?
          <>
          <div class="section">
    <div class="w-layout-grid grid-4">
      <div class="dashboard-sidebar-navigation">
        <div class="dashboard-sidebar-navigation-item">
          <div><span class="fa-icon"></span></div>
          <div class="dashboard-sidebar-item-text">Announcements</div>
        </div>
        <div class="dashboard-sidebar-navigation-item">
          <div><span class="fa-icon"></span></div>
          <div class="dashboard-sidebar-item-text">Members</div>
        </div>
        <div class="dashboard-sidebar-navigation-item active">
          <div><span class="fa-icon"></span></div>
          <div class="dashboard-sidebar-item-text">Members</div>
        </div>
        <div class="dashboard-sidebar-navigation-item active">
          <div><span class="fa-icon"></span></div>
          <div class="dashboard-sidebar-item-text">Members</div>
        </div>
      </div>
      <div class="dashboard-main-page-info">

<div class="fundraising-hero-image">
    <div class="community-hero-text">
      <h1 class="heading"><span class="big-red-text">Broadneck </span>Community Page</h1>
    </div>
    <div class="community-hero-side-info">
      <div class="donate-now-button">
        <div class="donate-text">Donate Now</div>
      </div>
    </div>
  </div>
    
    <DetailComponents.AdvisorDetail detailInfo={communityData.advisor}/>
    <DetailComponents.FundraisingDetail detailInfo={communityData.fundraising}/>
    <DetailComponents.ImageGalleryDetail detailInfo={communityData.images}/>
    <DetailComponents.LeadershipDetail detailInfo={communityData.leadership}/>
    <DetailComponents.HistoryDetail detailInfo={communityData.history}/>
    </div>
      </div>
      </div>
   
         </>
          : 
          <div>Loading Data</div>
}
        </>
    )
}

export default CommunityPage;