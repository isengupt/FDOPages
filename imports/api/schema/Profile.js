import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import 'uniforms-bridge-simple-schema-2';
import ImageField from '../../ui/utils/ImageField'

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
  email: String,
  aboutMe: String,

  gradYear:Date,
  interests: Interests,

  logo: {
    type: Object,
    uniforms: ImageField,
    optional: true
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
  position: {
    type: String,
    label: "Position with in the chapter"
  },
 
  image: {
    type: Object,
    uniforms: ImageField,
    optional: true
  },
  'image.url': String,
  'image.public_id': String,
 
 

  
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Profile.attachSchema(ProfileSchema);


/** Make the collection and schema available to other code. */
export { Profile, ProfileSchema, ProfileFormSchema };



