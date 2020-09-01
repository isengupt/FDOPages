import React, { useState, useEffect } from "react";
import {
  DetailComponents,
  ListComponents,
  setButtonState,
  useAccount,
} from "../../utils/utils";
import HeroImage from "./components/HeroImage";
import EventComp from "../../utils/EventComp";

const CommunityPage = () => {
  const { user, isLoggingIn } = useAccount();
  const [communityData, setCommunityData] = useState(false);

  useEffect(() => {
    Meteor.call("getCurrentCommunityData", (e, r) => {
      console.log(e);
      if (!e) {
        setCommunityData(r);
        console.log(r);
      }
    });
  }, [user]);

  useEffect(() => {
    Meteor.call("setEditable", "community", (e, r) => {
      if (!e) {
        console.log(r);
        if (r) {
          setButtonState("edit-community");
        } else setButtonState("dashboard");
      }
    });
  }, [user, isLoggingIn]);

  return (
    <>
      {communityData ? (
        <>
          <div class="section">
            <div class="w-layout-grid grid-4">
              <div class="dashboard-main-page-info">
                <HeroImage name={communityData.name}/>
              </div>
            </div>
          </div>

          <div class="w-container">
            <div class="title-wrap-centre flex-wrap">
              <h2 className="no-margin-heading">Members</h2>
              <a href={"/list/announcements"} class="paragraph-2 red-text">
                See all members
              </a>
            </div>

            <div class="community-announcements-container">
              <ListComponents.ProfileList listInfo={communityData.profiles} />
            </div>
          </div>

          <div class="container-2 w-container">
            <div class="title-wrap-centre flex-wrap">
              <h2 className="no-margin-heading">Announcements</h2>
              <a href={"/list/announcements"} class="paragraph-2 red-text">
                See what's new
              </a>
            </div>
            <div class="community-announcements-container">
              <ListComponents.AnnouncementList
                listInfo={communityData.announcements}

                page={"community"}
              />
            </div>
          </div>
          <div class="container-3 w-container">
            <div class="title-wrap-centre flex-wrap ">
              <h2 className="no-margin-heading">Events</h2>
              <a href={"/list/announcements"} class="paragraph-2 red-text">
                See what's happening next
              </a>
            </div>
            <div class="community-announcements-container">
              <EventComp items={communityData.events} page={"community"} />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CommunityPage;
