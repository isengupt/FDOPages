import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Blogs = new Mongo.Collection('Blogs');

/** Define a schema to specify the structure of each document in the collection. */

const BlogFormSchema = new SimpleSchema({
  title: String,
  content: String,
  image: String,
  timePosted: Date,
  links: Array,
  'links.$': String,
  community: String
  
})

const BlogSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title for the blog",
  },

  content: {
    type: String,
    label: "Blog content",
  },
  timePosted: {
    type: Date,
    label: "Time / date the blog was poster"
  },
 
  image: {
    type: String,
    label: "Link to image if necessary",
    optional: true
  },
  user: {
    type: String,
    label: "Id of user / member that posted the blog"
  },
  links: {
    type: Array,
    label: "Blog links",
    defaultValue: []
  },
  'links.$': String,
  community: {
    type: String,
    label: "Community that interview is intended for "

  }



}, { tracker: Tracker });

/** Attach this schema to the collection. */
Blogs.attachSchema(BlogSchema);


/** Make the collection and schema available to other code. */
export { Blogs, BlogSchema, BlogFormSchema};
