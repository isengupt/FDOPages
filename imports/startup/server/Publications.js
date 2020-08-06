import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { UpcomingEvents } from '../../api/schema/UpcomingEvent';
import { Profile } from '../../api/schema/Profile';
import { Announcements } from '../../api/schema/Announcements';
import { NewsUpdate } from '../../api/schema/NewsUpdate';
import { About } from '../../api/schema/About';
import { ChapterInfo } from '../../api/schema/ChapterInfo';
import { Videos } from '../../api/schema/Video';


//All the publications that can be subcribed to so far, subscriptions are done in the client side



//Publish method for Upcoming Events on startup
Meteor.publish('UpcomingEvents', function publish() {
  //If user is logged in publish events
  if (this.userId) {
    //If user is admin show all published events
    if (Roles.userIsInRole(this.userId, 'super-admin')) {
      return UpcomingEvents.find({});
    }
    else {
      //If user is part of a community, find community role and only publish tasks from that community
      community = Roles.getRolesForUser(this.userId);
      return UpcomingEvents.find({ community: community[0] });
    }
  }
  return this.ready();
})
Meteor.publish('AboutInfo', function publish() {
  //If user is logged in publish profile
  if (this.userId) {
    //If user is admin show all published profile
    return [
      About.find({}),
     
    ]
  }
  return this.ready();
})

Meteor.publish('ChapterInfo', function publish() {
  //If user is logged in publish profile
  if (this.userId) {
    //If user is admin show all published profile
    community = Roles.getRolesForUser(this.userId);
    
    return ChapterInfo.find({ community: community[0] })

     
    
  }
  return this.ready();
})

Meteor.publish('Resources', function publish() {
  //If user is logged in publish profile
  if (this.userId) {
    //If user is admin show all published profile
    return [
      Videos.find({}),
     
    ]
  }
  return this.ready();
})

Meteor.publish('Profile', function publish() {
  //If user is logged in publish profile
  if (this.userId) {
    //If user is admin show all published profile
    return Profile.find({})
  }
  return this.ready();
})


Meteor.publish('Dashboard', function publish(){
  if (this.userId) {
    
    
    if (Roles.userIsInRole(this.userId, 'super-admin')) {
      return [
        Announcements.find({}),
        NewsUpdate.find({}),
        UpcomingEvents.find({})
      ]
    }  
    else {
      community = Roles.getRolesForUser(this.userId);
    return [
      Announcements.find({ community: community[0] }),
      NewsUpdate.find({community: community[0]  }),
      UpcomingEvents.find({ community: community[0] })
    ];
  }
  }
  return this.ready();
})


Meteor.publish('users.all',  function publish() {
  if (this.userId) {
   
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  else {
   return this.ready();
  }
});




