import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Profile = new Mongo.Collection('Profile');

/** Define a schema to specify the structure of each document in the collection. */




const Interests = new SimpleSchema({
    healthInterests: {
        type: String,
        label: "Interest related to health",
    },
    degreeInterests: {
        type: String,
        label: "Interest related to degree",
    },
    funFacts: {
        type: String, 
        label: "Misc fun facts about member"
    }
});
const ProfileFormSchema = new SimpleSchema({
  email: {
    type: String,
    
  },
  aboutMe: {
    type: String,
    
  },

  gradYear: {
    type: Date,
   
  },
  interests: {
    type: Interests,
    
  },

})


const ProfileSchema = new SimpleSchema({
  email: {
    type: String,
    label: "Email used to contact member",
  },
  aboutMe: {
    type: String,
    label: "Description or short biography of member",
    max: 1000
  },
 user: {
   type: String,
   label: "Id of user / member for the profile"
  },
  gradYear: {
    type: Date,
    label: "Year the member will graduate from highschool / university"
  },
  interests: {
    type: Interests,
    label: "Doctor related interests and fun facts"
  },
  community: {
    type: String,
    label: "School / organization that member is associated with"
  },
 

  
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Profile.attachSchema(ProfileSchema);


/** Make the collection and schema available to other code. */
export { Profile, ProfileSchema, ProfileFormSchema };

