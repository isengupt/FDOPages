import React from 'react'
import { ListComponents, setButtonState, useAccount } from "../../utils/utils";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { UpcomingEvents } from '../../../api/schema/UpcomingEvent';
import { Announcements } from '../../../api/schema/Announcements';
import { NewsUpdate } from '../../../api/schema/NewsUpdate';


const Dashboard = () => {

    const { announcements, newsUpdates, upcomingEvents, user } = useTracker(() => {
      
        Meteor.subscribe('Dashboard');

        return ({
        upcomingEvents: UpcomingEvents.find({}).fetch(),
        announcements: Announcements.find({}).fetch(),
        newsUpdates: NewsUpdate.find({}).fetch(),
        user: Meteor.user()
      });
    });


    return (
        <div>
           <ListComponents.AnnouncementList listInfo={announcements} />
           <ListComponents.NewsList listInfo={newsUpdates} />
           <ListComponents.EventList listInfo={upcomingEvents}/>
        </div>
    )
}

export default Dashboard

