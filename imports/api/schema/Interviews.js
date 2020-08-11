import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Interview = new Mongo.Collection('Interview');

/** Define a schema to specify the structure of each document in the collection. */



const InterviewQuestion = new SimpleSchema({
  question: {
    type: String,
    label: "The question asked"
  },
  answer: {
    type: String,
    label: "The reply to the question",
  },
 

})

const InterviewFormSchema = new SimpleSchema({
  title: {
    type: String,
    
  },

  description: {
    type: String,
    
  },

  timeConducted: {
      type: Date,
      
      optional: true
  },
  image: {
    type: String,
    
    optional: true
  },

  interviewQuestions: {
    type: Array,
    
    defaultValue: []
  },
  'interviewQuestions.$': InterviewQuestion,

})

const InterviewSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title for the interview",
  },

  description: {
    type: String,
    label: "Objective of the interview",
  },
  timePosted: {
    type: Date,
    label: "Time / date the interview was posted"
  },
  timeConducted: {
      type: Date,
      label: "Time the interview was conducted",
      optional: true
  },
  image: {
    type: String,
    label: "Link to image if necessary",
    optional: true
  },
  user: {
    type: String,
    label: "Id of user / member that posted forum question"
  },
  interviewQuestions: {
    type: Array,
    label: "Questions asked during interview",
    defaultValue: []
  },
  'interviewQuestions.$': InterviewQuestion,
  community: {
    type: String,
    label: "Community that interview is intended for "

  }



}, { tracker: Tracker });

/** Attach this schema to the collection. */
Interview.attachSchema(InterviewSchema);


/** Make the collection and schema available to other code. */
export { Interview, InterviewSchema, InterviewQuestion, InterviewFormSchema };
