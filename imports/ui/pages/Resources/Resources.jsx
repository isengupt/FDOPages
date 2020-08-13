import React, { useState, useEffect } from 'react';
import { setButtonState, useAccount } from "../../utils/utils";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { Blogs } from '../../../api/schema/Blogs';
import { Videos } from '../../../api/schema/Video'
import { LearnLinks } from '../../../api/schema/LearnLinks';
import { ForumLink } from '../../../api/schema/ForumLink'
import { Interview } from '../../../api/schema/Interviews'
import {ListComponents} from '../../utils/utils'




const Resources = () => {
  const [learnLinksData, setLearnLinksData] = useState([])
  const [blogsData, setBlogsData] = useState([])
  const [videosData, setVideosData] = useState([])
  const [forumLinksData, setForumLinksData] = useState([])
  const [interviewData, setInterviewData] = useState([])
  const { userId } = useAccount();

  setButtonState("dashboard");


  const { loaded } = useTracker(() => {
    if (!userId) return { loaded: false};

    const resourcesInfo = Meteor.subscribe("Resources");

    if (resourcesInfo.ready()) {

      let learnLinksInfo = LearnLinks.find({}).fetch();
      let videoInfo = Videos.find({}).fetch();
      let forumLinksInfo = ForumLink.find({}).fetch()
      let blogInfo = Blogs.find({}).fetch()
      let interviewInfo = Interview.find({}).fetch()
      console.log(forumLinksInfo)
      setInterviewData(interviewInfo)
      setBlogsData(blogInfo)
      setForumLinksData(forumLinksInfo)
      setVideosData(videoInfo)
      setLearnLinksData(learnLinksInfo)

      return {
        loaded: resourcesInfo.ready(),
      };
    } else {
      return { loaded: true };
    }
  }, [userId]);
  return (
    <>
      {loaded ?
        <>
          <h1>Resources Page</h1>
          <ListComponents.LearnList listInfo={learnLinksData}/>
          <ListComponents.InterviewList listInfo={interviewData}/>
          <ListComponents.ForumList listInfo={forumLinksData}/>
          <ListComponents.BlogList listInfo={blogsData}/>
          <ListComponents.VideoList listInfo={videosData}/>
        </>
        :
        <div>Please Login</div>
      }
    </>
  )
}

export default Resources;