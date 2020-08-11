import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { setButtonState, useAccount } from "../../utils/utils";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { ListComponents } from '../../utils/utils'



const Dashboard = () => {
  const [announcements, setAnnouncements] = useState([])
  const [newsUpdates, setNewsUpdates] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const { user, userId } = useAccount();

  setButtonState("community");

  const { loaded } = useTracker(() => {
    if (!userId) return { loaded: true };

    const dashBoardInfo = Meteor.subscribe("Dashboard");
    console.log(dashBoardInfo)

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
  }, [user]);
  return (
    <div>
      {loaded ?
        <div>
          <ListComponents.AnnouncementList listInfo={announcements} />
          <ListComponents.NewsUpdatesPage listInfo={newsUpdates} />
          <ListComponents.UpcomingEvents listInfo={upcomingEvents} />
        </div>
        :
        <div>Loading</div>
      }
    </div>

  );




};

export default Dashboard

