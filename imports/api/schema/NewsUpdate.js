import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import 'uniforms-bridge-simple-schema-2';
import ImageField from '../../ui/utils/ImageField'

/** Define a Mongo collection to hold the data. */
const NewsUpdate = new Mongo.Collection('NewsUpdate');

/** Define a schema to specify the structure of each document in the collection. */

const NewsFormSchema = new SimpleSchema({
  title: String,
  description: String,
  newsLink: String,
  timePosted: Date,
  image: {
    type: Object,
    uniforms: ImageField,
    optional: true
  },
})


const NewsUpdateSchema = new SimpleSchema({
  newsLink: {
    type: String,
    label: "Link to article URL",
  },
  title: {
    type: String,
    label: "Title of the article",
  },
  description: {
    type: String,
    label: "Short description of article",
    max: 500
  },
 user: {
   type: String,
   label: "Id of user / member that posted article"
  },
  timePosted: {
    type: Date,
    label: "Time the article was posted by the user"
  },
  community: {
    type: String,
    label: "Community level the news update is intended for"
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
NewsUpdate.attachSchema(NewsUpdateSchema);


/** Make the collection and schema available to other code. */
export { NewsUpdate, NewsUpdateSchema, NewsFormSchema };
