import React, {useState} from 'react'
import { ListPicker, ListComponents, setButtonState, useAccount } from "../../utils/utils";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { UpcomingEvents } from '../../../api/schema/UpcomingEvent';
import { Announcements } from '../../../api/schema/Announcements';
import { NewsUpdate } from '../../../api/schema/NewsUpdate';


const Dashboard = () => {

  const [toggleState, setToggleState] = useState("announcement");

 




  const toggleStatePick = (state) => {
      const allowedStates = ["announcement", "event", "newsupdate"];
      const stateStr = state;
      if (allowedStates.includes(stateStr)) {
          setToggleState(stateStr);
      }
  }

    const { announcements, newsUpdates, upcomingEvents, user } = useTracker(() => {
      
        Meteor.subscribe('Dashboard');

        return ({
        upcomingEvents: UpcomingEvents.find({}).fetch(),
        announcements: Announcements.find({}).fetch(),
        newsUpdates: NewsUpdate.find({}).fetch(),
        user: Meteor.user()
      });
    });

    const ToggledData = ({toggleState}) => {
      if (toggleState == "announcement") {
        return (
        <ListComponents.AnnouncementList listInfo={announcements} page={"dashboard"} />
        )
      
     
      }
      else if (toggleState == "newsupdate") {
        return (
          <ListComponents.NewsList listInfo={newsUpdates} />
        )
      }

      else if (toggleState == "event") {
        return (
          <ListComponents.EventList listInfo={upcomingEvents}/>
        )
      }

      
     
    }




    return (
      <>
  <div class="dashboard-main-page-container">
    <div class="section">
      <div class="w-layout-grid grid-4">
        <div class="dashboard-sidebar-navigation">
          <div className="dashboard-sidebar-navigation-item"  onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("announcement")
                    }>
            <div><span class="fa-icon"></span></div>
            <div class="dashboard-sidebar-item-text">Announcements</div>
          </div>
          <div class="dashboard-sidebar-navigation-item"  onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("event")
                    }>
            <div><span class="fa-icon"></span></div>
            <div className="dashboard-sidebar-item-text">Events</div>
          </div>
         
          <div className="dashboard-sidebar-navigation-item"  onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("newsupdate")
                    }>
            <div><span class="fa-icon"></span></div>
            <div class="dashboard-sidebar-item-text">Updates</div>
          </div>
        </div>
        <div class="dashboard-main-page-info">
                    <ToggledData toggleState={toggleState}/>

  
       
         
        
        
        </div>
      </div>
    </div>
  </div>
      
         
        
      </>
    )
}

export default Dashboard

