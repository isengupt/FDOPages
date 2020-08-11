import { Meteor } from 'meteor/meteor';
import { UpcomingEvents } from '../../api/schema/UpcomingEvent.js';
import { Profile } from '../../api/schema/Profile.js';
import { Announcements } from '../../api/schema/Announcements.js';
import {NewsUpdate} from '../../api/schema/NewsUpdate'
import { Videos } from '../../api/schema/Video.js';
import { About } from '../../api/schema/About.js';
import {ChapterInfo} from '../../api/schema/ChapterInfo.js';
import { LearnLinks } from '../../api/schema/LearnLinks.js';
import { Interview } from '../../api/schema/Interviews.js';
import { Blogs } from '../../api/schema/Blogs.js';
import { ForumLink } from '../../api/schema/ForumLink.js';

//Functions that add initial data from config file on meteor startup
// If meteor already has data in database, run meteor reset and then run meteor npm run start again

function addData(data) {
    console.log(`  Adding: ${data.title} (${data.owner})`);
    UpcomingEvents.insert(data);
}

function addProfiles(data) {
    console.log(data)
    console.log(`  Adding profile information for: (${data.user})`);
    Profile.insert(data);
}

function addAnnouncements(data) {
    console.log(data)
    console.log(`  Adding profile information for: (${data.user})`);
    Announcements.insert(data);
}

function addNews(data) {
    console.log(data)
    console.log(`  Adding profile information for: (${data.user})`);
    NewsUpdate.insert(data);
}

function addVideos(data) {
    console.log(data)
    Videos.insert(data);
}

function addAbout(data) {
    console.log(data)
    About.insert(data);
}

function addCommunites(data) {
    console.log(data)
    ChapterInfo.insert(data);
}

function addLearnLinks(data) {
    console.log(data)
    LearnLinks.insert(data);
}

function addBlogs(data) {
    console.log(data)
    Blogs.insert(data);
}

function addInterviews(data) {
    console.log(data)
    Interview.insert(data);
}

function addForums(data) {
    console.log(data)
    ForumLink.insert(data);
}
/** Initialize the collection if empty. */
if (UpcomingEvents.find().count() === 0) {
    if (Meteor.settings.defaultData) {
        console.log('Creating default data.');
        Meteor.settings.defaultData.map(data => addData(data));
    }
}

if(Profile.find().count() === 0) {
    if(Meteor.settings.defaultProfiles) {
        console.log('Creating default profile.');
        Meteor.settings.defaultProfiles.map(data => addProfiles(data));
    }
}
if(Announcements.find().count() === 0) {
    if(Meteor.settings.defaultAnnouncements) {
        console.log('Creating default announcements');
        Meteor.settings.defaultAnnouncements.map(data => addAnnouncements(data));
    }
}

if(NewsUpdate.find().count() === 0) {
    if(Meteor.settings.defaultNews) {
        console.log('Creating default news update.');
        Meteor.settings.defaultNews.map(data => addNews(data));
    }
}

if(Videos.find().count() === 0) {
    if(Meteor.settings.defaultVideos) {
        console.log('Creating default videos.');
        Meteor.settings.defaultVideos.map(data => addVideos(data));
    }
}

if(About.find().count() === 0) {
    if(Meteor.settings.defaultAbout) {
        console.log('Creating default about.');
        Meteor.settings.defaultAbout.map(data => addAbout(data));
    }
}

if(ChapterInfo.find().count() === 0) {
    if(Meteor.settings.defaultCommunites) {
        console.log('Creating default communites.');
        Meteor.settings.defaultCommunites.map(data => addCommunites(data));
    }
}

if(LearnLinks.find().count() === 0) {
    if(Meteor.settings.defaultLinks) {
        console.log('Creating default learn links.');
        Meteor.settings.defaultLinks.map(data => addLearnLinks(data));
    }
}

if(Blogs.find().count() === 0) {
    if(Meteor.settings.defaultBlogs) {
        console.log('Creating default blogs.');
        Meteor.settings.defaultBlogs.map(data => addBlogs(data));
    }
}

if(Interview.find().count() === 0) {
    if(Meteor.settings.defaultInterviews) {
        console.log('Creating default interviews.');
        Meteor.settings.defaultInterviews.map(data => addInterviews(data));
    }
}


if(ForumLink.find().count() === 0) {
    if(Meteor.settings.defaultForumLink) {
        console.log('Creating default forums.');
        Meteor.settings.defaultForumLink.map(data => addForums(data));
    }
}




