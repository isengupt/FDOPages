import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { setButtonState, useAccount } from "../../utils/utils";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import PubSub from "pubsub-js";
import { Announcements } from '../../../api/schema/Announcements';
import { NewsUpdate } from '../../../api/schema/NewsUpdate';
import { UpcomingEvents } from '../../../api/schema/UpcomingEvent';
import  AnnouncementsPage from "./AnnouncementsPage"
import NewsUpdatesPage from "./NewsUpdatesPage"
import UpcomingEventsPage from "./UpcomingEventsPage"


const Dashboard = () => {
  const [announcements, setAnnouncements] = useState([])
  const [newsUpdates, setNewsUpdates] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  
  const { user, userId, isLoggingIn } = useAccount();
  let subtoken;
  
  useEffect(() => {
    subtoken = PubSub.subscribe("MANAGE_DATA", (msg, data) => {
      if (!user && !isLoggingIn) {
        setShowLogin(true);
      }
    });
    return function cleanup() {
      PubSub.unsubscribe(subtoken);
    };
  }, [user, isLoggingIn]);

  setButtonState("community");


  const { loaded } = useTracker(() => {
    if (!userId) return { loaded: true };

      const dashBoardInfo = Meteor.subscribe("Dashboard");

      if (dashBoardInfo.ready()) {
        let announcementsData = Announcements.find({}).fetch();
        let newsUpdatesData = NewsUpdate.find({}).fetch();
        let upcomingEventsData = UpcomingEvents.find({}).fetch()
        setAnnouncements(announcementsData)
        setNewsUpdates(newsUpdatesData)
        setUpcomingEvents(upcomingEventsData)
      
      return {
        loaded: dashBoardInfo.ready(),
      };
    } else {
      return { loaded: true };
    }
  }, [userId]);
  return (
    <div>
      <AnnouncementsPage announcements={announcements}/>
      <NewsUpdatesPage updates={newsUpdates}/>
      <UpcomingEventsPage events={upcomingEvents}/>


    </div>

  );




};

export default Dashboard

