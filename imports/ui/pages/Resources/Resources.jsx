import React, { useState, useEffect } from "react";
import { setButtonState, useAccount } from "../../utils/utils";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { Blogs } from "../../../api/schema/Blogs";
import { Videos } from "../../../api/schema/Video";
import { LearnLinks } from "../../../api/schema/LearnLinks";
import { ForumLink } from "../../../api/schema/ForumLink";
import { Interview } from "../../../api/schema/Interviews";
import { ListComponents } from "../../utils/utils";

const Resources = () => {
  const [learnLinksData, setLearnLinksData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [videosData, setVideosData] = useState([]);
  const [forumLinksData, setForumLinksData] = useState([]);
  const [interviewData, setInterviewData] = useState([]);
  const { userId } = useAccount();
  const [toggleState, setToggleState] = useState("forum");

 




  const toggleStatePick = (state) => {
      const allowedStates = ["forum", "video", "interview"];
      const stateStr = state;
      if (allowedStates.includes(stateStr)) {
          setToggleState(stateStr);
      }
  }

  setButtonState("dashboard");

  const { loaded } = useTracker(() => {
    if (!userId) return { loaded: false };

    const resourcesInfo = Meteor.subscribe("Resources");

    if (resourcesInfo.ready()) {
      let learnLinksInfo = LearnLinks.find({}).fetch();
      let videoInfo = Videos.find({}).fetch();
      let forumLinksInfo = ForumLink.find({}).fetch();
      let blogInfo = Blogs.find({}).fetch();
      let interviewInfo = Interview.find({}).fetch();
      console.log(forumLinksInfo);
      setInterviewData(interviewInfo);
      setBlogsData(blogInfo);
      setForumLinksData(forumLinksInfo);
      setVideosData(videoInfo);
      setLearnLinksData(learnLinksInfo);

      return {
        loaded: resourcesInfo.ready(),
      };
    } else {
      return { loaded: true };
    }
  }, [userId]);

  const ToggledData = ({toggleState}) => {
    if (toggleState == "forum") {
      return (
        <ListComponents.ForumList listInfo={forumLinksData} />
      )
    
   
    }
    else if (toggleState == "interview") {
      return (
        <ListComponents.InterviewList listInfo={interviewData} />
      )
    }

    else if (toggleState == "video") {
      return (
        <ListComponents.VideoList listInfo={videosData} />
      )
    }

    
   
  }
  return (
    <>
      {loaded ? (
        <>
          <div class="section">
            <div class="w-layout-grid grid-4">
              <div class="dashboard-sidebar-navigation">
                <div class="dashboard-sidebar-navigation-item" onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("forum")
                    }>
                  <div>
                    <span class="fa-icon"></span>
                  </div>
                  <div class="dashboard-sidebar-item-text">Forum</div>
                </div>
                <div class="dashboard-sidebar-navigation-item" onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("video")
                    }>
                  <div>
                    <span class="fa-icon"></span>
                  </div>
                  <div class="dashboard-sidebar-item-text">Video</div>
                </div>
                <div class="dashboard-sidebar-navigation-item active" onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("interview")
                    }>
                  <div>
                    <span class="fa-icon"></span>
                  </div>
                  <div class="dashboard-sidebar-item-text">Interviews</div>
                </div>
              
              </div>
              <div class="dashboard-main-page-info">
              <ToggledData toggleState={toggleState}/>
              </div>
            </div>
          </div>
        </>
      ) : (
       <></>
      )}
    </>
  );
};

export default Resources;
