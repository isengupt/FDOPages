import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import 'uniforms-bridge-simple-schema-2';
import ImageField from '../../ui/utils/ImageField'

/** Define a Mongo collection to hold the data. */
const UpcomingEvents = new Mongo.Collection('UpcomingEvents');

const UpcomingEventFormSchema = new SimpleSchema({
  title: String,
  description: String,
  eventType: {
      type: String,
      allowedValues: ['Podcast', 'Meeting', 'Livestream'],
      defaultValue: 'Meeting',
  },
  eventOccuranceDate: Date,
  image: {
    type: Object,
    uniforms: ImageField,
    optional: true
  }

})

/** Define a schema to specify the structure of each document in the collection. */
const UpcomingEventschema = new SimpleSchema({
  title: {
    type: String,
    label: "Tile of the event/ livestream / podcast",
    max: 300
  },
  description: {
    type: String,
    label: "Description of event"
  },
  eventType: {
    type: String,
    label: "The type of event being held",
    allowedValues: ['Podcast', 'Meeting', 'Livestream'],
    defaultValue: 'Meeting'
  },
  owner: {
   type: String,
   label: "User that posted the event"
  },
  eventPostedDate: {
    type: Date,
    label: "Date the event was posted"
  },
  eventOccuranceDate: {
    type: Date,
    label: "Date that the event will be held"
  },
  community: {
    type: String,
    label: "School that event is associated",
  
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
UpcomingEvents.attachSchema(UpcomingEventschema);


/** Make the collection and schema available to other code. */
export { UpcomingEvents, UpcomingEventschema, UpcomingEventFormSchema };


