import { Meteor } from "meteor/meteor";
import { About } from '../schema/About'
import { ChapterInfo } from "../schema/ChapterInfo";
import { UpcomingEvents } from "../schema/UpcomingEvent";
import { Announcements, } from "../schema/Announcements";
import { Blogs } from "../schema/Blogs";
import { Profile } from "../schema/Profile";
import { LearnLinks } from "../schema/LearnLinks";
import { Videos } from "../schema/Video";
import { Interview } from "../schema/Interviews";
import { ForumLink } from "../schema/ForumLink";
import { NewsUpdate } from "../schema/NewsUpdate";


Meteor.methods({
    getCurrentAboutData: function () {
        let aboutData = About.findOne({})

        let formattedData = {
            "images": aboutData.imageGallery,
            "initiatives": aboutData.initiatives.organizationInitiatives,
            "story": aboutData.story,
            "mission": aboutData.mission,
            "user": aboutData.user,
            "_id": aboutData._id
        }

        return formattedData
    },
    getCurrentCommunityData: function () {
        if (this.userId) {
            let roles = Meteor.roleAssignment.findOne({ 'user._id': this.userId })

            if (roles.scope) {
                let chapterData = ChapterInfo.findOne({ 'community': roles.scope })


                let formattedData = {
                    "images": chapterData.imageGallery,
                    "initiatives": chapterData.initiatives.chapterInitiatives,
                    "leadership": chapterData.leadership,
                    "fundraising": chapterData.fundraising,
                    "user": chapterData.user,
                    "_id": chapterData._id,
                    "electionDate": chapterData.electionDate,
                    "history": chapterData.history,
                    "advisor": chapterData.advisor
                }
                return formattedData
            }
            else {
                return "No Community"
            }
        }
        else {
            return "No Community"
        }
    },
    getScope: function () {
        if (this.userId) {
            let roles = Meteor.roleAssignment.findOne({ 'user._id': this.userId })
            return roles.scope

        }
        else {
            return "Not Logged In"
        }
    },
    setEditable: function (page) {

        if (this.userId) {
            let roles = Meteor.roleAssignment.findOne({ 'user._id': this.userId }).inheritedRoles
            let roleArr = roles.map(role => role._id);

            switch (page) {
                case "about":
                    return ["super-admin"].some(r => roleArr.includes(r))
                case "community":
                    return ["super-admin", "organizer"].some(r => roleArr.includes(r))
                case "blog":
                    return ["blogger", "super-admin", "mentor", "organizer"].some(r => roleArr.includes(r))
                case "learnLink":
                    return ["blogger", "super-admin", "mentor", "organizer"].some(r => roleArr.includes(r))
                case "announcement":
                    return ["super-admin", "organizer"].some(r => roleArr.includes(r))
                case "mentor":
                    return ["mentor", "organizer", "super-admin"].some(r => roleArr.includes(r))
                case "interview":
                    return ["blogger", "super-admin", "organizer"].some(r => roleArr.includes(r))
                case "forum":
                    return true
                case "video":
                    return true
                case "event":
                    return ["super-admin", "organizer"].some(r => roleArr.includes(r))
            }
        }
        else {
            return false
        }
    },

    retrieveEditInfo: function (component, _id) {

        if (this.userId) {

            let user = Meteor.users.findOne({ '_id': this.userId })
            let email = user.username
            console.log(email)
            console.log(Blogs.findOne(_id).user)

            function editData(doc, toggleState) {
                this.doc = doc
                this.toggleState = toggleState
            }

            switch (component) {
                case "event":
                    if (email === UpcomingEvents.findOne(_id).user) {
                        var editUpcomingEvent = new editData(UpcomingEvents.findOne(_id), "event")
                        return editUpcomingEvent
                    } else {
                        return "Not authorized"
                    }
                case "announcement":
                    if (email === Announcements.findOne(_id).user) {
                        var editAnnouncement = new editData(Announcements.findOne(_id), "announcement")
                        return editAnnouncement
                    } else {
                        return "Not authorized"
                    }
                case "blog":
                    if (email === Blogs.findOne(_id).user) {
                        var editBlog = new editData(Blogs.findOne(_id), "blog")
                        return editBlog
                    } else {
                        return "Not authorized"
                    }
                case "profile":
                    if (email === Profile.findOne(_id).user) {
                        var profileBlog = new editData(Profile.findOne(_id), "profile")
                        return profileBlog
                    } else {
                        return "Not authorized"
                    }
                case "newsupdate":
                    if (email === NewsUpdate.findOne(_id).user) {
                        var editNewsUpdate = new editData(NewsUpdate.findOne(_id), "newsupdate")
                        return editNewsUpdate
                    } else {
                        return "Not authorized"
                    }
                case "forum":
                    if (email === ForumLink.findOne(_id).user) {
                        var editForum = new editData(ForumLink.findOne(_id), "forum")
                        return editForum
                    } else {
                        return "Not authorized"
                    }
                case "interview":
                    if (email === Interview.findOne(_id).user) {
                        var editInterview = new editData(Interview.findOne(_id), "interview")
                        return editInterview
                    } else {
                        return "Not authorized"
                    }
                case "video":
                    if (email === Videos.findOne(_id).user) {
                        var editVideos = new editData(Videos.findOne(_id), "video")
                        return editVideos
                    } else {
                        return "Not authorized"
                    }
                case "learnLink":
                    if (email === LearnLinks.findOne(_id).user) {
                        var editLearnLinks = new editData(LearnLinks.findOne(_id), "learnLink")
                        return editLearnLinks
                    } else {
                        return "Not authorized"
                    }
            }
        }
        else {
            return "Not authorized"
        }
    },

    retrieveDetailInfo: function (component, _id) {

        if (this.userId) {
            var detailInfo = {}

            switch (component) {
                case "event":
                    detailInfo = { "doc": UpcomingEvents.findOne(_id), "toggleState": "event" }
                    return detailInfo

                case "announcement":
                    detailInfo = { "doc": Announcements.findOne(_id), "toggleState": "announcement" }
                    return detailInfo

                case "blog":
                    detailInfo = { "doc": Blogs.findOne(_id), "toggleState": "blog" }
                    return detailInfo
                case "profile":
                    detailInfo = { "doc": Profile.findOne(_id), "toggleState": "profile" }
                    return detailInfo
                case "newsupdate":
                    detailInfo = { "doc": NewsUpdate.findOne(_id), "toggleState": "newsupdate" }
                    return detailInfo
                case "forum":
                    detailInfo = { "doc": ForumLink.findOne(_id), "toggleState": "forum" }
                    return detailInfo
                case "interview":
                    detailInfo = { "doc": Interview.findOne(_id), "toggleState": "interview" }
                    return detailInfo
                case "video":
                    detailInfo = { "doc": Videos.findOne(_id), "toggleState": "video" }
                    return detailInfo
                case "learnLink":
                    detailInfo = { "doc": LearnLinks.findOne(_id), "toggleState": "learnLink" }
                    return detailInfo
            }
        }
        else {
            return "Not authorized"
        }
    },
    retrieveListInfo: function (component) {
        if (this.userId) {
            let roles = Meteor.roleAssignment.findOne({ 'user._id': this.userId })

            var listInfo = {}
            switch (component) {
                case "event":

                    listInfo = { "doc": UpcomingEvents.find({ "community": roles.scope }).fetch(), "toggleState": "event" }
                    return listInfo
                case "announcement":

                    listInfo = { "doc": Announcements.find({ "community": roles.scope }).fetch(), "toggleState": "announcement" }

                    return listInfo
                case "blog":

                    listInfo = { "doc": Blogs.find({ "community": roles.scope }).fetch(), "toggleState": "blog" }
                    return listInfo
                case "newsupdate":

                    listInfo = { "doc": NewsUpdate.find({ "community": roles.scope }).fetch(), "toggleState": "newsupdate" }
                    return listInfo
                case "forum":

                    listInfo = { "doc": ForumLink.find({ "community": roles.scope }).fetch(), "toggleState": "forum" }
                    return listInfo
                case "interview":

                    listInfo = { "doc": Interview.find({ "community": roles.scope }).fetch(), "toggleState": "interview" }
                    return listInfo
                case "video":

                    listInfo = { "doc": Videos.find({ "community": roles.scope }).fetch(), "toggleState": "video" }
                    return listInfo
                case "learnLink":

                    listInfo = { "doc": LearnLinks.find({ "community": roles.scope }).fetch(), "toggleState": "video" }
                    return listInfo
            }
        } else {
            return "Please log in"
        }
    },
    retrieveAboutEdit: function () {
        if (this.userId) {
            let roles = Meteor.roleAssignment.findOne({ 'user._id': this.userId }).inheritedRoles
            let roleArr = roles.map(role => role._id);
            if (roleArr.includes('super-admin')) {
                let aboutData = About.findOne({})
                console.log(aboutData)

                let formattedData = {
                    "organizationName": aboutData.organizationName,
                    "images": aboutData.imageGallery,
                    "initiatives": aboutData.initiatives,
                    "story": aboutData.story,
                    "mission": aboutData.mission,
                    "user": aboutData.user,
                    "_id": aboutData._id
                }

                return formattedData
            }
            else {
                return "Not authorized"
            }
        }
        else {
            return "Not authorized"
        }
    }


})

