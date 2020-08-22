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
        <div>
           <ListComponents.AnnouncementList listInfo={announcements} />
           <ListComponents.NewsList listInfo={newsUpdates} />
           <ListComponents.EventList listInfo={upcomingEvents}/>
        </div>
      </div>
      </div>
      
    )
}

export default Dashboard

