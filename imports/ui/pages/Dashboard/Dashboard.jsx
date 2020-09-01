import React, {useState} from 'react'
import { ListPicker, ListComponents, setButtonState, useAccount } from "../../utils/utils";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { UpcomingEvents } from '../../../api/schema/UpcomingEvent';
import { Announcements } from '../../../api/schema/Announcements';
import { NewsUpdate } from '../../../api/schema/NewsUpdate';
import { Icon, Menu } from "semantic-ui-react";

const Dashboard = () => {

  const [toggleState, setToggleState] = useState("announcement");

 



  const [activeItem, setActiveItem] = useState("announcement");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    console.log(name);
    setToggleState(name);
  };


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
        <Menu vertical>
                  <Menu.Item
                    name="announcement"
                    active={activeItem === "announcement"}
                    onClick={handleItemClick}
                  >
                    <div class="dashboard-sidebar-navigation-item">
                      <div></div>
                      <div class="dashboard-sidebar-item-text">Announcements</div>
                    </div>
                  </Menu.Item>

                  <Menu.Item
                    name="newsupdate"
                    active={activeItem === "newsupdate"}
                    onClick={handleItemClick}
                  >
                    <div class="dashboard-sidebar-navigation-item">
                      <div></div>
                      <div class="dashboard-sidebar-item-text">Updates</div>
                    </div>
                  </Menu.Item>

                  <Menu.Item
                    name="event"
                    active={activeItem === "event"}
                    onClick={handleItemClick}
                  >
                    <div class="dashboard-sidebar-navigation-item">
                      <div></div>
                      <div class="dashboard-sidebar-item-text">Events</div>
                    </div>
                  </Menu.Item>
                </Menu>
        
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

