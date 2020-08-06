import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const ForumLink = new Mongo.Collection('ForumLink');

/** Define a schema to specify the structure of each document in the collection. */

const CommentComponent = new SimpleSchema({
  user: {
    type: String,
    label: "The user that posted the comment / reply"
  },
  reply: {
    type: String,
    label: "The reply to the forum question",
  },
  timePosted: {
    type: String,
    label: "The time that the reply was posted"
  },
  voteCount: {
    type: Number,
    label: "Amount of votes on the reply"
  },
  parentComment: {
    type: String,
    label: "Id of comment if replying to another comment in the forum",
    defaultValue: null
  }

})

const ForumSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title of forum question / link",
  },
  category: {
    type: String,
    label: "The type of event being held",
    allowedValues: ['Homework', 'Career', 'College', 'Tests', 'Courses'],
    defaultValue: 'Career'
  },
  description: {
    type: String,
    label: "Short description of the forum question",
  },
  timePosted: {
    type: Date,
    label: "Time / date the question was posted"
  },
  user: {
    type: String,
    label: "Id of user / member that posted forum question"
  },
  voteCount: {
    type: Number,
    label: "Number of votes on the forum question"
  },
  comments: {
    type: Array,
    label: "Comments or replies to to the forum question",
    defaultValue: []
  },
  'comments.$': CommentComponent,
  community: {
    type: String,
    label: "Community the user that posted the quesion is associated with"

  }



}, { tracker: Tracker });

/** Attach this schema to the collection. */
ForumLink.attachSchema(ForumSchema);


/** Make the collection and schema available to other code. */
export { ForumLink, ForumSchema, CommentComponent };
