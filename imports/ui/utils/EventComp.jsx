import React, { useState, useEffect } from "react";
import {

  getDay,
  getDate,
  eachDayOfInterval,
  formatDistance,
  formatRelative,
  subDays,

} from "date-fns";

function format(date) {
    const hours = date.getUTCHours();
    const minutes = date.getMinutes();
  
    return (1 + ((hours - 1) % 12)) + ":" + minutes.toString().padStart(2, "0") + " " + ((hours > 11) ? "PM" : "AM");
  }

  function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : 
      ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][dayOfWeek];
  }

const EventComp = ({ items, page }) => {
  console.log(items)
  if (!items) {
    return <>
    </>
  }
  if (items.length > 0 && page == "modal") {
  return (
    <div className="modal-backdrop">
    {items.map(obj => 
    <div class="event-card">
       
            <div id="w-node-407c8d1a3d20-6578b560" class="event-card-image">
              <div class="event-card-background-image"></div>
            </div>
            <div class="event-card-text">
              <div class="event-card-text-top">
                <div id="w-node-ee12f739361e-6578b560" class="event-date-component">
                  <div class="big-date">{getDayOfWeek(obj.eventOccuranceDate)}</div>
                  <div class="big-weekday">{getDate(obj.eventOccuranceDate)}</div>
                </div>
                <div id="w-node-e71c348b44e0-6578b560" class="event-text-info-copy">
                  <div>
                    <div class="event-name-title"> {obj.title}</div>
                  </div>
                  <div>
                    <div class="news-update-authoer">{obj.eventType}</div>
                    <div class="event-date-container">{format(obj.eventOccuranceDate)}</div>
                  </div>
                </div>
              </div>
              <div class="event-card-text-bottom">
                <div class="red-add-button"><span class="fa-icon-red-big"></span></div>
                <a href={`/detail/event/${obj._id}`} class="text-block-84"><span class="fa-icon-grey-big"></span></a>
              </div>
            </div>
          </div>
    )}
    </div>
  );
  } 
  else if (items.length > 0 && page =="community")  {
    return (
    <>

    {items.map(obj => 
    <div class="event-card">
       
            <div id="w-node-407c8d1a3d20-6578b560" class="event-card-image">
              <div class="event-card-background-image"></div>
            </div>
            <div class="event-card-text">
              <div class="event-card-text-top">
                <div id="w-node-ee12f739361e-6578b560" class="event-date-component">
                  <div class="big-date">{getDayOfWeek(obj.eventOccuranceDate)}</div>
                  <div class="big-weekday">{getDate(obj.eventOccuranceDate)}</div>
                </div>
                <div id="w-node-e71c348b44e0-6578b560" class="event-text-info-copy">
                  <div>
                    <div class="event-name-title"> {obj.title}</div>
                  </div>
                  <div>
                    <div class="news-update-authoer">{obj.eventType}</div>
                    <div class="event-date-container">{format(obj.eventOccuranceDate)}</div>
                  </div>
                </div>
              </div>
              <div class="event-card-text-bottom">
                <div class="red-add-button"><span class="fa-icon-red-big"></span></div>
                <a href={`/detail/event/${obj._id}`} class="text-block-84"><span class="fa-icon-grey-big"></span></a>
              </div>
            </div>
          </div>
    )}
    </>
    )
  }
  
  
  else {
      return (
          <>
   
          </>
      )
  }
};

export default EventComp;
