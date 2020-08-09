import { Meteor } from "meteor/meteor";
import {About} from '../schema/About'
import { ChapterInfo } from "../schema/ChapterInfo";

Meteor.methods({
    getCurrentAboutData: function() {
        let aboutData = About.findOne({})
        
        let formattedData = {
            "images" : aboutData.imageGallery,
            "initiatives": aboutData.initiatives.organizationInitiatives,
            "story": aboutData.story,
            "mission": aboutData.mission,
            "user": aboutData.user,
            "_id": aboutData._id
        }

        return formattedData
    },
    getCurrentCommunityData: function() {
        if(this.userId) {
            let roles =  Meteor.roleAssignment.findOne({'user._id': this.userId})
            if (roles.scope) {
               let chapterData =  ChapterInfo.findOne({'community': roles.scope})       
               return chapterData
            }
            else {
                return "No Community"
            }
         }
        else {
            return "No Community"
        }
   },
    setEditable: function(page) {
      
        if(this.userId) {
            let roles =  Meteor.roleAssignment.findOne({'user._id': this.userId}).inheritedRoles
            let roleArr =  roles.map(role => role._id);
            switch (page) {
                case "about":
                    return roleArr.includes("super-admin")
                case "community":
                    return roleArr.includes(["super-admin", "organizer"])
                case "blogs":
                    return roleArr.includes(["blogger", "super-admin", "mentor", "organizer"])
                case "profile":
                    return True
                case "announcements":
                    return roleArr.includes(["super-admin", "organizer"]) 
                case "mentor":
                    return roleArr.includes(["mentor", "organizer", "super-admin"])
            }
        }
        else {
            return false
        }
    },
    retrieveAboutEdit: function () {
        if(this.userId) {
            let roles =  Meteor.roleAssignment.findOne({'user._id': this.userId}).inheritedRoles
            let roleArr =  roles.map(role => role._id);
            if (roleArr.includes('super-admin')) {
                let aboutData = About.findOne({})
        
                let formattedData = {
                    "images" : aboutData.imageGallery,
                    "initiatives": aboutData.initiatives.organizationInitiatives,
                    "story": aboutData.story,
                    "mission": aboutData.mission,
                    "user": aboutData.user,
                    "_id": aboutData._id
                }
        
                return formattedData
            }
            else {
                return "Not authorized"
            }
    }
    else {
        return "Not authorized"
    }
}


})