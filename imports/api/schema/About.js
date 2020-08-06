import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Tracker } from 'meteor/tracker';

const About = new Mongo.Collection("About");

const Mission = new SimpleSchema({
    mission: {
        type: String,
        label: "Overall organization's mission",
    },
    vision: {
        type: String,
        label: "Overall organization's vision (maybe the same thing)",
    }
});
const Story = new SimpleSchema({
   title: {
        type: String,
        label: "Overall organization's mission",
    },
    story: {
        type: String,
        label: "Story / description about founding the organization",
    },
    founderImage: {
        type: String, 
        label: "Link to photo of founder of organization"
    },
    founderName: {
        type: String,
        label: "Name of founder"
    }
});

const InitiativeComponent = new SimpleSchema({
    organizationInitiatives: {
        type: Array,
        label: "List of organization initiatives",
        defaultValue: []
    },
    "organizationInitiatives.$": String,
   
});



const AboutSchema = new SimpleSchema({
    organizationName: {
        type: String,
        label: "Name of organization"
    },
    mission: {
        type: Mission,
        label: "Leadership information on specific chapter",
    },
    story: {
        type: Story,
        label: "History of chapter and associated stories and links",
    },
    initiatives: {
        type: InitiativeComponent,
        label: "Individual chapter iniatives"
    },
  
    imageGallery: {
        type: Array,
        label: "Gallery of images related to organization",
        defaultValue: []
    },
    "imageGallery.$": String,
    user: {
        type: String,
        label: "The user that posted the chapter info",
    },
}, { tracker: Tracker });

About.attachSchema(AboutSchema);


export { About, AboutSchema, InitiativeComponent, Story, Mission};