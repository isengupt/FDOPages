import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const LearnLinks = new Mongo.Collection('LearnLinks');

/** Define a schema to specify the structure of each document in the collection. */
const LearnLinksSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Tile of learning resource",
    max: 300
  },
  description: {
    type: String,
    label: "Description of learning resource"
  },
  eventType: {
    type: String,
    label: "The type of learning resource",
    allowedValues: ['Video', 'Slide Deck', 'PDF', 'Article', 'Misc Link'],
    defaultValue: 'Slide Deck'
  },
  owner: {
   type: String,
   label: "User that posted the resource"
  },
 

  
}, { tracker: Tracker });

/** Attach this schema to the collection. */
LearnLinks.attachSchema(LearnLinksSchema);


/** Make the collection and schema available to other code. */
export { LearnLinks, LearnLinksSchema};


