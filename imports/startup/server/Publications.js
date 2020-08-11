import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { UpcomingEvents } from '../../api/schema/UpcomingEvent';
import { Announcements } from '../../api/schema/Announcements';
import { NewsUpdate } from '../../api/schema/NewsUpdate';
import { ChapterInfo } from '../../api/schema/ChapterInfo';
import { Videos } from '../../api/schema/Video';
import { Blogs } from '../../api/schema/Blogs';
import { LearnLinks } from '../../api/schema/LearnLinks';
import { ForumLink } from '../../api/schema/ForumLink';
import { Interview } from '../../api/schema/Interviews';


//All the publications that can be subcribed to so far, subscriptions are done in the client side



Meteor.publish('ChapterInfo', function publish() {
  
  if (this.userId) {
    //If user is admin show all published profile
    let roles =  Meteor.roleAssignment.findOne({'user._id': this.userId})
    return ChapterInfo.find({ "community": roles.scope }) 
  }
  return this.ready();
})

Meteor.publish('Resources', function publish(){
  var dl = 5;
  if (this.userId) {

    if (Roles.userIsInRole(this.userId, 'super-admin')) {
      
      return [
        Blogs.find({}),
        LearnLinks.find({}),
        Videos.find({}),
        ForumLink.find({}),
        Interview.find({})
      ]
  }  else {
    let roles =  Meteor.roleAssignment.findOne({'user._id': this.userId})

    return [
      Blogs.find({ "community": roles.scope }),
      LearnLinks.find({ "community": roles.scope }),
      Videos.find({ "community": roles.scope }),
      ForumLink.find({ "community": roles.scope }),
      Interview.find({ "community": roles.scope })
    ];
  }
  }
 return this.ready()
  
  

})

Meteor.publish('Dashboard', function publish(){
  var dl = 5;
  if (this.userId) {
    
    
    if (Roles.userIsInRole(this.userId, 'super-admin')) {
      return [
        Announcements.find({sort: {createdAt: -1}, limit: dl}),
        NewsUpdate.find({sort: {createdAt: -1}, limit: dl}),
        UpcomingEvents.find({sort: {createdAt: -1}, limit: dl})
      ]
    }  
    else {
     
      let roles =  Meteor.roleAssignment.findOne({'user._id': this.userId})

    return [
      Announcements.find({ "community": roles.scope },{sort: {createdAt: -1}, limit: dl}),
      NewsUpdate.find({"community": roles.scope  },{sort: {createdAt: -1}, limit: dl}),
      UpcomingEvents.find({ "community": roles.scope },{sort: {createdAt: -1}, limit: dl})
    ];
  }
  }
  return this.ready();
})






