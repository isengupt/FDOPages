import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Tracker } from 'meteor/tracker';

const ChapterInfo = new Mongo.Collection("ChapterInfo");

const Leadership = new SimpleSchema({
   position: {
       type: String,
       label: "Position in the chapter"
   },
   holder: {
       type: String,
       label: "Holder of position in chapter"
   }

});

const HistoryComponent = new SimpleSchema({
    founderStory: {
        type: String,
        label: "Story about founding the chapter at the university / school ",
    },
    founderQuote: {
        type: String,
        label: "A relevant quote posted by the founder / president",
    },
    founderImage: {
        type: String, 
        label: "Link to photo of founder"
    },
    founderName: {
        type: String,
        label: "Name of person who found chapter"
    },
    founderProfileLink: {
        type: String,
        label: "Link to advisor's profile"
    }
});

const Advisor = new SimpleSchema({
    advisorName: {
        type: String,
        label: "Name of advisor for the chapter"
    },
    advisorBiography: {
        type: String,
        label: "Advisor description / biography",
    },
    advisorQuote: {
        type: String,
        label: "A relevant quote by the advisor",
    },
    advisorImage: {
        type: String, 
        label: "Link to photo of advisor"
    },
    advisorProfileLink: {
        type: String,
        label: "Link to advisor's profile"
    }
});


const InitiativeComponent = new SimpleSchema({
    chapterInitiatives: {
        type: Array,
        label: "List of chapter initiatives",
        defaultValue: []
    },
    "chapterInitiatives.$": String,
   
});

const Fundraising = new SimpleSchema({
    fundName: {
        type: String,
        label: "Name of fundraiser",
    },
    fundLink: {
        type: String,
        label: "Link to fundraiser pages",
    }
});

const ChapterSchema = new SimpleSchema({
    chapterName: {
        type: String,
        label: "Name of chapter"
    },
    leadership: {
        type: Array,
        label: "Leadership information on specific chapter",
        defaultValue: []
    },
    "leadership.$": Leadership,
    history: {
        type: HistoryComponent,
        label: "History of chapter and associated stories and links",
    },
    advisor: {
        type: Advisor,
        label: "Info on the chapter advisor",
    },
    electionDate: {
        type: Date,
        label: "Date(s) for next chapter election",
    },
    initiatives: {
        type: InitiativeComponent,
        label: "Individual chapter iniatives"
    },
    imageGallery: {
        type: Array,
        label: "Gallery of images of members pulled from instagram / other cloud based service",
        defaultValue: []
    },
    "imageGallery.$": String,
    user: {
        type: String,
        label: "The user that posted the chapter info",
    },
    community: {
        type: String,
        label: "Community code this chapter information is for"
    },
    fundraising: {
        type: Fundraising,
        label: "Fundrasing links and methods"
    }
}, { tracker: Tracker });

ChapterInfo.attachSchema(ChapterSchema);


export { ChapterInfo, ChapterSchema, InitiativeComponent, Fundraising, Advisor, HistoryComponent, Leadership };