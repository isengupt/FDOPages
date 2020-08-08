import { Meteor } from "meteor/meteor";
import {About} from '../schema/About'

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
    setEditable: function() {
        if(this.userId) {
            let roles =  Meteor.roleAssignment.findOne({'user._id': this.userId}).inheritedRoles
            let roleArr =  roles.map(role => role._id);
            return roleArr.includes("super-admin")
        }
        else {
            return false
        }
    } 

})