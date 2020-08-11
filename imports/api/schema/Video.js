import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Videos = new Mongo.Collection('Videos');

const VideoFormSchema = new SimpleSchema({
  title: {
    type: String,
    
  },
  description: {
    type: String,
    
    max: 500
  },
  timePosted: {
    type: Date,
    
  },
  videoType: {
    type: String,
    
    allowedValues: ['Livestream', 'Interview', 'Vlog', 'Movie'],
    defaultValue: 'Interview'
  },
  videoInput: {
    type: String,
    
  },

})

/** Define a schema to specify the structure of each document in the collection. */

const VideoSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title of video",
  },
  description: {
    type: String,
    label: "Short description of the video",
    max: 500
  },
 user: {
   type: String,
   label: "Id of user / member that posted the video"
  },
  timePosted: {
    type: Date,
    label: "Time the video was posted"
  },
  videoType: {
    type: String,
    label: "The type of video being displayed",
    allowedValues: ['Livestream', 'Interview', 'Vlog', 'Movie'],
    defaultValue: 'Interview'
  },
  videoInput: {
    type: String,
    label: "Url / link to video"
  },
  community: {
    type: String,
    label: "Community level the video was intendend for"
  }
 

  
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Videos.attachSchema(VideoSchema);


/** Make the collection and schema available to other code. */
export { Videos, VideoSchema, VideoFormSchema };

