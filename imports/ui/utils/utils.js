import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import PubSub from "pubsub-js";
import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, ListField, ListItemField, NestField, HiddenField, DateField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import 'uniforms-bridge-simple-schema-2';
import { BlogSchema, Blogs, BlogFormSchema } from '../../api/schema/Blogs';
import { AnnouncementsSchema, Announcements, AnnouncementFormSchema } from '../../api/schema/Announcements';
import { UpcomingEventschema, UpcomingEvents, UpcomingEventFormSchema } from "../../api/schema/UpcomingEvent";
import { Profile, ProfileSchema, ProfileFormSchema } from '../../api/schema/Profile'
import { NewsUpdate, NewsUpdateSchema, NewsFormSchema } from '../../api/schema/NewsUpdate'
import { ForumLink, ForumSchema, ForumFormSchema } from "../../api/schema/ForumLink";
import { Interview, InterviewSchema, InterviewFormSchema } from '../../api/schema/Interviews'
import { Videos, VideoSchema, VideoFormSchema } from '../../api/schema/Video'
import { LearnLinks, LearnLinksSchema, LearnFormSchema } from '../../api/schema/LearnLinks'
import { AboutSchema, About } from "../../api/schema/About";
import { ChapterSchema } from "../../api/schema/ChapterInfo";
import swal from "sweetalert";

export const useAccount = () =>
  useTracker(() => {
    const user = Meteor.user();
    const userId = Meteor.userId();
    const isLoggingIn = Meteor.loggingIn();


    return {
      user,
      userId,
      isLoggingIn,

    };
  }, []);

const allowedButtonStates = [
  "community",
  "dashboard",
  "manage-save",
  "share-data",
  "risk-assessment",
  "sign-up",
  "dashboard-manage-locations",
  "login",
  "edit-about",
  "edit-community",
  "save-edit"
];

export const setButtonState = (state) => {
  if (allowedButtonStates.includes(state))
    PubSub.publish("SET_TOP_BUTTON_STATE", state);
  else throw new Meteor.Error("Incorrect state");
};

function checkList(listInfo) {
  if (listInfo && listInfo.length) {
    return true
  }
}



export const DetailComponents = {
  ContentUpdateDetail: function ContentUpdateDetail(props) {
    return <div>

    </div>
  },
  BlogDetail: function BlogDetail(props) {
    return <div>
      {props.detailInfo ?
        <div>
          <div> Title {props.detailInfo.title}</div>
          <div> Id {props.detailInfo._id}</div>
          <div> Content {props.detailInfo.content}</div>
          <div> Image {props.detailInfo.image}</div>
          <div> Community {props.detailInfo.community}</div>
          <div> User {props.detailInfo.user}</div>
          <a href={`/edit/blog/${props.detailInfo._id}`}>Edit Event</a>
        </div>

        :
        <div>
          No Item
      </div>
      }
    </div>
  },
  AnnouncementDetail: function AnnouncementDetail(props) {
    return <div>
      {props.detailInfo ?
        <div key={props.detailInfo._id}>
          <div>Title: {props.detailInfo.title}</div>
          <div>Content: {props.detailInfo.content}</div>
          <div>Contact: {props.detailInfo.contact}</div>
          <div>User: {props.detailInfo.user}</div>
          <div>User: {props.detailInfo.community}</div>
          <a href={`/profile/${props.detailInfo.user}`}>Visit Profie</a>
          <a href={`/edit/announcement/${props.detailInfo._id}`}>Edit Announcement</a>
          <br></br>

        </div>
        :
        <div>
          No Item
</div>
      }
    </div>
  },
  EventDetail: function EventDetail(props) {
    return <div>
      {props.detailInfo ?
        <div key={props.detailInfo._id}>
          <div>Title: {props.detailInfo.title}</div>
          <div>Description: {props.detailInfo.description}</div>
          <div>EventType: {props.detailInfo.eventType}</div>
          <div>Owner: {props.detailInfo.owner}</div>
          <a href={`/profile/${props.detailInfo.owner}`}>Visit Profie</a>
          <div>Community: {props.detailInfo.community}</div>
          <a href={`/edit/event/${props.detailInfo._id}`}>Edit Event</a>
          <br></br>

        </div>
        :
        <div>
          No Item
</div>
      }
    </div>
  },

  NewsUpdateDetail: function NewsUpdateDetail(props) {
    return <div>
      {props.detailInfo ?
        <div key={props.detailInfo._id}>
          <div>Title: {props.detailInfo.title}</div>
          <div>Description: {props.detailInfo.description}</div>
          <div>User: {props.detailInfo.newsLink}</div>
          <div>User: {props.detailInfo.user}</div>
          <a href={`/profile/${props.detailInfo.user}`}>Visit Profie</a>
          <div>Community: {props.detailInfo.community}</div>
          <a href={`/edit/newsupdate/${props.detailInfo._id}`}>Edit News Update</a>
          <br></br>
        </div>
        :
        <div>
          No Item
</div>
      }
    </div>
  },
  ForumDetail: function ForumDetail(props) {
    return <div>
      {props.detailInfo ?
        <div>
          <div>{props.detailInfo._id}</div>
          <div>{props.detailInfo.title}</div>
          <div>{props.detailInfo.voteCount}</div>
          <div>{props.detailInfo.user}</div>
          <div>{props.detailInfo.community}</div>
          <a href={`/edit/forum/${props.detailInfo._id}`}>Edit Forum</a>
        </div>
        :
        <div>
          No Item
</div>
      }
    </div>
  },
  InterviewDetail: function InterviewDetail(props) {
    return <div>
      {props.detailInfo ?
        <div>
          <div> Id{props.detailInfo._id}</div>
          <div> Title{props.detailInfo.title}</div>
          <div> Description {props.detailInfo.description}</div>
          <div> Community {props.detailInfo.community}</div>
          <div> user {props.detailInfo.user}</div>
          <a href={`/edit/interview/${props.detailInfo._id}`}>Edit Interview</a>
        </div>
        :
        <div>
          No Item
</div>
      }
    </div>
  },

  VideoDetail: function VideoDetail(props) {
    return <div>
      {props.detailInfo ?
        <div>
          <div>{props.detailInfo._id}</div>
          <div>{props.detailInfo.title}</div>
          <div>{props.detailInfo.videoType}</div>
          <div>{props.detailInfo.videoInput}</div>
          <a href={`/edit/video/${props.detailInfo._id}`}>Edit Interview</a>
        </div>
        :
        <div>
          No Item
</div>
      }
    </div>
  },
  LearnLinksDetail: function LearnLinksDetail(props) {
    return <div>
      {props.detailInfo ?
        <div>

          <div> Id{props.detailInfo._id}</div>
          <div> Title {props.detailInfo.title}</div>
          <div> Description {props.detailInfo.description}</div>
          <div> Link {props.detailInfo.linkType}</div>
          <div> Owner {props.detailInfo.owner}</div>
          <div> Community {props.detailInfo.community}</div>
          <a href={`/edit/learnlink/${props.detailInfo._id}`}>Edit Learning Resource</a>
        </div>
        :
        <div>
          No Item
</div>
      }
    </div>

  },
  StoryDetail: function StoryDetail(props) {
    return (
      <div>
        {
          props.detailInfo ?
            <>
              <div>{props.detailInfo.title}</div>
              <div>{props.detailInfo.story}</div>
              <img className="story__image" src={props.detailInfo.founderImage} alt="" />
              <div>{props.detailInfo.Name}</div>
            </>
            :
            <div>
              No Item
</div>
        }
      </div>
    )
  },

  MissionDetail: function MissionDetail(props) {
    return (
      <div>
        {
          props.detailInfo ?
            <>
              <div>{props.detailInfo.mission}</div>
              <div>{props.detailInfo.vision}</div>
            </>
            :
            <div>
              No Item
   </div>
        }
      </div>
    )
  },
  InitiativesDetail: function InitiativesDetail(props) {
    return (
      <div>
        {
          props.detailInfo ?
              <div>Initiatvies</div>
            :
            <div>
              No Item
 </div>
        }
      </div>
    )
  },
  ImageGalleryDetail: function ImageGalleryDetail(props) {
    return (
      <div>
        {
          props.detailInfo ?
            <div>ImageGallery Page</div>
            :
            <div>
              No Item
</div>

        }
      </div>
    )
  },
  LeadershipDetail: function LeadershipDetail(props) {
    return (
      <div>
        {
          props.detailInfo ?
            <div>LeadershipDetail</div>
            :
            <div>
              No Item
 </div>

        }
      </div>
    )
  },
  HistoryDetail: function HistoryDetail(props) {
    return (
      <div>
        {
          props.detailInfo ?
            <>
              <img className="advisor__image" src={props.detailInfo.founderImage} alt="founder-image" />
              <div>{props.detailInfo.founderName}</div>
              <div>{props.detailInfo.founderStory}</div>
              <div>{props.detailInfo.founderQuote}</div>
              <div>{props.detailInfo.foundProfileLink}</div>
              <div>{props.detailInfo.founderProfileLink}</div>
            </>
            :
            <div>
              No Item
 </div>

        }
      </div>
    )
  },
  FundraisingDetail: function FundraisingDetail(props) {
    return (
      <div>
        {
          props.detailInfo ?
            <>
              <div>Fundrasing Info</div>
              <div>{props.detailInfo.fundName}</div>
              <div>{props.detailInfo.fundLink}</div>
            </>
            :
            <div>
              No Item
 </div>

        }
      </div>
    )
  },
  AdvisorDetail: function AdvisorDetail(props) {
    return (
      <div>
        {
          props.detailInfo ?
            <div className="advisor__container">
              <div className="advisor__container__left">
                <img className="advisor__image" src={props.detailInfo.advisorImage} />
              </div>
              <div className="advisor__container__right">
                <div className="advisor__item__margin advisor__name">{props.detailInfo.advisorName}</div>
                <div className="advisor__item__margin advisor__biography">{props.detailInfo.advisorBiography}</div>
                <div className="advisor__item__margin advisor__quote"><i>{props.detailInfo.advisorQuote}</i></div>
                <a className="advisor__item__margin advisor__contact" href={`/profile/${props.detailInfo.advisorProfileLink}`}>Get in Contact</a>
              </div>

            </div>
            :
            <div>
              No Item
 </div>

        }
      </div>
    )
  }
}

export const ListComponents = {
  BlogList: function BlogList(props) {
    if (checkList(props.listInfo)) {
      return <div>
        {props.listInfo.map(blog =>
          <div>
            <div> Title {blog.title}</div>
            <div> Id {blog._id}</div>
            <div> Content {blog.content}</div>
            <div> Image {blog.image}</div>
            <div> Community {blog.community}</div>
            <div> User {blog.user}</div>
            <a href={`/edit/blog/${blog._id}`}>Edit Event</a>
          </div>
        )

        }
      </div>
    }
    else {
      return <div>No Items Found</div>
    }
  },
  AnnouncementList: function AnnouncementList(props) {
    if (checkList(props.listInfo)) {
      return <div>
        {props.listInfo.map(announcement =>
          <div key={announcement._id}>
            <div className="announcement__title">Title: {announcement.title}</div>
            <div>Content: {announcement.content}</div>
            <div>Contact: {announcement.contact}</div>
            <div>User: {announcement.user}</div>
            <div>User: {announcement.community}</div>
            <a href={`/profile/${announcement.user}`}>Visit Profie</a>
            <a href={`/edit/announcement/${announcement._id}`}>Edit Announcement</a>
            <br></br>

          </div>

        )}
      </div>
    }
    else {
      return <div>No Items Found</div>
    }
  },
  EventList: function EventList(props) {
    if (checkList(props.listInfo)) {
      return <div>
        {props.listInfo.map(event =>
          <div key={event._id}>
            <div>Title: {event.title}</div>
            <div>Description: {event.description}</div>
            <div>EventType: {event.eventType}</div>
            <div>Owner: {event.owner}</div>
            <a href={`/profile/${event.owner}`}>Visit Profie</a>
            <div>Community: {event.community}</div>
            <a href={`/edit/event/${event._id}`}>Edit Event</a>
            <br></br>
          </div>
        )
        }

      </div>
    }
    else {
      return <div>No Items Found</div>
    }
  },

  NewsList: function NewsList(props) {
    if (checkList(props.listInfo)) {
      return <div>
        {props.listInfo.map(update =>
          <div key={update._id}>
            <div>Title: {update.title}</div>
            <div>Description: {update.description}</div>
            <div>User: {update.newsLink}</div>
            <div>User: {update.user}</div>
            <a href={`/profile/${update.user}`}>Visit Profie</a>
            <div>Community: {update.community}</div>
            <a href={`/edit/newsupdate/${update._id}`}>Edit News Update</a>
            <br></br>
          </div>

        )}
      </div>
    }
    else {
      return <div>No Items Found</div>
    }
  },
  ForumList: function ForumList(props) {
    if (checkList(props.listInfo)) {
      return <div>
        {props.listInfo.map(forums =>
          <div>
            <div>{forums._id}</div>
            <div>{forums.title}</div>
            <div>{forums.voteCount}</div>
            <div>{forums.user}</div>
            <div>{forums.community}</div>
            <a href={`/edit/forum/${forums._id}`}>Edit Forum</a>
          </div>
        )}
      </div>
    }
    else {
      return <div>No Items Found</div>
    }
  },
  InterviewList: function InterviewList(props) {
    if (checkList(props.listInfo)) {
      return <div>
        {props.listInfo.map(interviews =>
          <div>
            <div> Id{interviews._id}</div>
            <div> Title{interviews.title}</div>
            <div> Description {interviews.description}</div>
            <div> Community {interviews.community}</div>
            <div> user {interviews.user}</div>
            <a href={`/edit/interview/${interviews._id}`}>Edit Interview</a>
          </div>
        )}

      </div>
    }
    else {
      return <div>No Items Found</div>
    }
  },

  VideoList: function VideoList(props) {
    if (checkList(props.listInfo)) {
      return <div>
        {props.listInfo.map(video =>
          <div>
            <div>{video._id}</div>
            <div>{video.title}</div>
            <div>{video.videoType}</div>
            <div>{video.videoInput}</div>
            <a href={`/edit/video/${video._id}`}>Edit Interview</a>
          </div>
        )}
      </div>
    }
    else {
      return <div>No Items Found</div>
    }
  },
  LearnList: function LearnList(props) {
    if (checkList(props.listInfo)) {
      return <div>
        {props.listInfo.map(learnLink =>
          <div>

            <div> Id{learnLink._id}</div>
            <div> Title {learnLink.title}</div>
            <div> Description {learnLink.description}</div>
            <div> Link {learnLink.linkType}</div>
            <div> Owner {learnLink.owner}</div>
            <div> Community {learnLink.community}</div>
            <a href={`/edit/learnlink/${learnLink._id}`}>Edit Learning Resource</a>
          </div>
        )}
      </div>
    }
    else {
      return <div>No Items Found</div>
    }
  }


}

export const CreateComponents = {
  CreateEvent: function CreateEvent(props) {


    let fRef = null;

    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Event</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={UpcomingEventFormSchema} onSubmit={data => props.submit(data, fRef, props.userScope)} >
            <Segment>
              <TextField name='title' />
              <TextField name='description' />
              <SelectField name='eventType' />
              <DateField name="eventOccuranceDate" />

              <SubmitField value='Submit' />
              <ErrorsField />



            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    )
  },
  CreateBlog: function CreateBlog(props) {


    let fRef = null;

    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Stuff</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={BlogFormSchema} onSubmit={data => props.submit(data, fRef, userScope)} >
            <Segment>
              <TextField name='title' />
              <TextField name='content' />
              <DateField name="timePosted" />
              <TextField name='image' />
              <ListField name="links">
                <TextField name="$" />
              </ListField>
              <SubmitField value='Submit' />
              <ErrorsField />

            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    )
  },

  CreateAnnouncement: function CreateAnnouncement(props) {


    let fRef = null;

    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Stuff</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={AnnouncementFormSchema} onSubmit={data => props.submit(data, fRef, props.userScope)} >
            <Segment>
              <TextField name='title' />
              <TextField name='content' />


              <SubmitField value='Submit' />
              <ErrorsField />

            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    )
  },
  CreateNews: function CreateNews(props) {


    let fRef = null;

    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Stuff</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={NewsFormSchema} onSubmit={data => props.submit(data, fRef, props.userScope)} >
            <Segment>
              <TextField name='title' />
              <TextField name='description' />
              <TextField name='newsLink' />

              <DateField name='timePosted' />
              <SubmitField value='Submit' />
              <ErrorsField />

            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    )
  },
  CreateForumLink: function CreateForumLink(props) {


    let fRef = null;

    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Stuff</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={ForumFormSchema} onSubmit={data => props.submit(data, fRef, props.userScope)} >
            <Segment>
              <TextField name='title' />
              <TextField name='description' />
              <TextField name='community' />
              <SelectField name='category' />
              <DateField name="timePosted" />

              <SubmitField value='Submit' />
              <ErrorsField />
              <HiddenField name='user' />
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    )
  },
  CreateProfile: function CreateProfile(props) {


    let fRef = null;

    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Stuff</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={ProfileFormSchema} onSubmit={data => props.submit(data, fRef, props.userScope)} >
            <Segment>
              <TextField name='email' />
              <TextField name='aboutMe' />

              <NestField name="interests">
                <TextField name="healthInterests" />
                <TextField name="degreeInterests" />
                <TextField name="funFacts" />

              </NestField>
              <DateField name='gradYear' />

              <SubmitField value='Submit' />
              <ErrorsField />

            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    )
  },
  CreateVideo: function CreateVideo(props) {


    let fRef = null;

    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Stuff</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={VideoFormSchema} onSubmit={data => props.submit(data, fRef, props.userScope)} >
            <Segment>
              <TextField name='title' />
              <TextField name='description' />
              <TextField name='videoInput' />
              <SelectField name='videoType' />

              <SubmitField value='Submit' />
              <ErrorsField />

            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    )
  },
  CreateInterview: function CreateInterview(props) {


    let fRef = null;

    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Stuff</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={InterviewFormSchema} onSubmit={data => props.submit(data, fRef, props.userScope)} >
            <Segment>
              <TextField name='title' />
              <TextField name='description' />
              <TextField name='image' />

              <DateField name="timeConducted" />

              <ListField name="interviewQuestions">
                <NestField name="$">
                  <TextField name="question" />
                  <TextField name="answer" />


                </NestField>
              </ListField>
              <SubmitField value='Submit' />
              <ErrorsField />
              <HiddenField name='user' />
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    )
  },
  CreateLearnLink: function CreateLearnLink(props) {


    let fRef = null;

    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Stuff</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={LearnFormSchema} onSubmit={data => props.submit(data, fRef, props.userScope)} >
            <Segment>
              <TextField name='title' />
              <TextField name='description' />
              <SelectField name='linkType' />
              <TextField name="link" />
              <SubmitField value='Submit' />
              <ErrorsField />

            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    )
  },
}




export const EditComponents = {
  BlogEdit: function BlogEdit(props) {
    return <Grid container centered>
      <Grid.Column>
        <Header as="h2" textAlign="center">Edit Blog</Header>
        <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model}>
          <Segment>
            <TextField name='title' />
            <TextField name='content' />
            <ListField name="links">
              <TextField name="$" />
            </ListField>
            <SubmitField value='Submit' />
            <ErrorsField />
            <HiddenField name='user' />
          </Segment>
        </AutoForm>
      </Grid.Column>
    </Grid>;
  },
  AnnouncementEdit: function AnnouncementEdit(props) {
    return <Grid container centered>
      <Grid.Column>
        <Header as="h2" textAlign="center">Edit Announcement</Header>
        <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model}>
          <Segment>
            <TextField name='title' />
            <TextField name='content' />
            <SubmitField value='Submit' />
            <ErrorsField />
            <HiddenField name='user' />
          </Segment>
        </AutoForm>
      </Grid.Column>
    </Grid>;
  },
  EventEdit: function EventEdit(props) {
    return <Grid container centered>
      <Grid.Column>
        <Header as="h2" textAlign="center">Edit Event</Header>
        <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model}>
          <Segment>
            <TextField name='title' />
            <TextField name='description' />
            <SelectField name='eventType' />
            <DateField name="eventOccuranceDate" />
            <SubmitField value='Submit' />
            <ErrorsField />
            <HiddenField name='owner' />
          </Segment>
        </AutoForm>
      </Grid.Column>
    </Grid>;

  },
  ProfileEdit: function ProfileEdit(props) {
    return <Grid container centered>
      <Grid.Column>
        <Header as="h2" textAlign="center">Edit Profile</Header>
        <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model}>
          <Segment>
            <TextField name='email' />
            <TextField name='aboutMe' />
            <NestField name="interests">
              <TextField name="healthInterests" />
              <TextField name="degreeInterests" />
              <TextField name="funFacts" />

            </NestField>
            <TextField name='gradYear' />

            <SubmitField value='Submit' />
            <ErrorsField />
            <HiddenField name='user' />
          </Segment>
        </AutoForm>
      </Grid.Column>
    </Grid>;


  },
  NewsUpdateEdit: function NewsUpdateEdit(props) {
    return <Grid container centered>
      <Grid.Column>
        <Header as="h2" textAlign="center">Edit News Update</Header>
        <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model}>
          <Segment>
            <TextField name='title' />
            <TextField name='description' />
            <TextField name='newsLink' />

            <SubmitField value='Submit' />
            <ErrorsField />
            <HiddenField name='user' />
          </Segment>
        </AutoForm>
      </Grid.Column>
    </Grid>;

  },
  ForumEdit: function ForumEdit(props) {
    return <Grid container centered>
      <Grid.Column>
        <Header as="h2" textAlign="center">Edit Forum</Header>
        <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model}>
          <Segment>
            <TextField name='title' />
            <TextField name='description' />
            <SelectField name='category' />

            <SubmitField value='Submit' />
            <ErrorsField />
            <HiddenField name='user' />
          </Segment>
        </AutoForm>
      </Grid.Column>
    </Grid>;

  },
  InterviewEdit: function InterviewEdit(props) {
    return <Grid container centered>
      <Grid.Column>
        <Header as="h2" textAlign="center">Edit Interviews</Header>
        <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model}>
          <Segment>
            <TextField name='title' />
            <TextField name='description' />
            <TextField name='image' />
            <DateField name="timeConducted" />
            <ListField name="interviewQuestions">
              <NestField name="$">
                <TextField name="question" />
                <TextField name="answer" />


              </NestField>
            </ListField>
            <SubmitField value='Submit' />
            <ErrorsField />

          </Segment>
        </AutoForm>
      </Grid.Column>
    </Grid>;

  },
  VideoEdit: function VideoEdit(props) {
    return <Grid container centered>
      <Grid.Column>
        <Header as="h2" textAlign="center">Edit Blog</Header>
        <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model}>
          <Segment>
            <TextField name='title' />
            <TextField name='description' />
            <TextField name="videoInput" />
            <SelectField name='videoType' />

            <SubmitField value='Submit' />
            <ErrorsField />

          </Segment>
        </AutoForm>
      </Grid.Column>
    </Grid>;

  },
  LearnLinksEdit: function LearnLinksEdit(props) {
    return <Grid container centered>
      <Grid.Column>
        <Header as="h2" textAlign="center">Edit Blog</Header>
        <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model}>
          <Segment>
            <TextField name='title' />
            <TextField name='description' />
            <SelectField name='linkType' />

            <SubmitField value='Submit' />
            <ErrorsField />

          </Segment>
        </AutoForm>
      </Grid.Column>
    </Grid>;

  },
  InitiativesEdit: function InitiativesEdit(props) {
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Edit Initiatives</Header>
          <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model} >
            <Segment>
              <HiddenField name="organizationName" />
              <ListField name="initiatives.organizationInitiatives">
                <TextField name="$" />

              </ListField>

              <SubmitField value='Submit' />

              <ErrorsField />
            </Segment>
          </AutoForm>

        </Grid.Column>
      </Grid>
    )
  },
  MissionsEdit: function MissionsEdit(props) {

    return (
      <Grid container centered>

        <Grid.Column>
          <Header as="h2" textAlign="center">Edit Mission</Header>
          <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model} >
            <Segment>


              <HiddenField name="organizationName" />


              <NestField name="mission">
                <TextField name="mission" />
                <TextField name="vision" />

              </NestField>

              <SubmitField value='Submit' />

              <ErrorsField />
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    )
  },
  StoryEdit: function StoryEdit(props) {
    return (
      <Grid container centered>


        <Grid.Column>
          <Header as="h2" textAlign="center">Edit Story</Header>
          <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model} >
            <Segment>


              <HiddenField name="organizationName" />



              <NestField name="story">
                <TextField name="founderImage" />
                <TextField name="founderName" />
                <TextField name="story" />
                <TextField name="title" />

              </NestField>

              <SubmitField value='Submit' />

              <ErrorsField />
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    )
  },
  ElectionDateEdit: function ElectionDateEdit(props) {
    return (
   <Grid container centered>

    <Grid.Column>
        <Header as="h2" textAlign="center">Edit Election</Header>
        <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model} >
                    <Segment>
                    <DateField name="electionDate"/>

                        <SubmitField value='Submit' />

                        <ErrorsField />
                    </Segment>
                </AutoForm>
                </Grid.Column>
    </Grid>
    )
  },
  FundraisingEdit: function FundraisingEdit(props) {
    return (
      <Grid container centered>

      <Grid.Column>
          <Header as="h2" textAlign="center">Edit Fundraising</Header>
          <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model} >
                    <Segment>
                        <NestField name="fundraising">
                                <TextField name="fundName" />
                                <TextField name="fundLink" />

                            </NestField>

                        <SubmitField value='Submit' />

                        <ErrorsField />
                    </Segment>
                </AutoForm>
                  </Grid.Column>
      </Grid>
    )
  },
  HistoryEdit: function HistoryEdit(props) {
    return (
      <Grid container centered>

      <Grid.Column>
          <Header as="h2" textAlign="center">Edit History</Header>
          <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model} >
                        <Segment>
                            <NestField name="history">
                                <TextField name="founderImage" />
                                <TextField name="founderName" />
                                <TextField name="founderProfileLink" />
                                <TextField name="founderQuote" />
                                <TextField name="founderStory" />

                            </NestField>

                            <SubmitField value='Submit' />

                            <ErrorsField />
                        </Segment>
                    </AutoForm>
                  </Grid.Column>
      </Grid>
    )
  },
  ChapterInitiativesEdit: function ChapterInitiativesEdit(props) {
    return (
      <Grid container centered>

      <Grid.Column>
          <Header as="h2" textAlign="center">Edit Chapter Initiatives</Header>
          <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model} >
                    <Segment>

                        <ListField name="initiatives.chapterInitiatives">               
                                    <TextField name="$" />          
                        </ListField>

                        <SubmitField value='Submit' />

                        <ErrorsField />
                    </Segment>
                </AutoForm>
                  </Grid.Column>
      </Grid>
    )
  },
  LeadershipEdit: function LeadershipEdit(props) {
    return (
      <Grid container centered>

      <Grid.Column>
          <Header as="h2" textAlign="center">Edit Chapter Initiatives</Header>
          <AutoForm schema={props.schema} onSubmit={data => props.submit(data)} model={props.model} >
                    <Segment>
                    <ListField name="leadership">                     
                      <TextField name="$" />                 
                    </ListField>

                        <SubmitField value='Submit' />

                        <ErrorsField />
                    </Segment>
                </AutoForm>
                  </Grid.Column>
      </Grid>
    )
  }


}

export const CreateFunctions = {
  blogCreate: function blogCreate(data, formRef) {

  },
  eventsCreate: function eventsCreate(data, formRef, community) {

    const { title, description, eventType, eventOccuranceDate } = data;
    const owner = Meteor.user().username;
    const eventPostedDate = Date.now()
    console.log(community)

    UpcomingEvents.insert({ title, description, eventType, owner, eventPostedDate, eventOccuranceDate, community },
      (err) => {
        if (err) {
          swal('Error', err.message, 'error')
        } else {
          swal('Success', 'Event posted', 'success')
          formRef.reset()
        }
      }
    )
  },
  announcementCreate: function announcementCreate(data, formRef, community) {
    const { title, content } = data;
    const user = Meteor.user().username;
    const contact = Meteor.user().username;
    const timePosted = Date.now()
    console.log(community)

    Announcements.insert({ title, content, user, contact, timePosted, community },
      (err) => {
        if (err) {
        
          swal('Error', err.message, 'error')
        } else {
          swal('Success', 'Event posted', 'success')
          formRef.reset()
        }
      }
    )
  },
  profileCreate: function profileCreate(data, formRef, community) {
    const { email, aboutMe, gradYear, interests } = data;
    const user = Meteor.user().username;


    console.log(community)

    Profile.insert({ email, aboutMe, gradYear, interests, user, community },
      (err) => {
        if (err) {
          swal('Error', err.message, 'error')
        } else {
          swal('Success', 'Event posted', 'success')
          formRef.reset()
        }
      }
    )
  },
  newsCreate: function newsCreate(data, formRef, community) {
    const { title, description, newsLink } = data;
    const user = Meteor.user().username;
    const timePosted = Date.now()


    console.log(community)

    NewsUpdate.insert({ title, description, newsLink, timePosted, user, community },
      (err) => {
        if (err) {
          swal('Error', err.message, 'error')
        } else {
          swal('Success', 'Event posted', 'success')
          formRef.reset()
        }
      }
    )

  },
  forumLinkCreate: function forumLinkCreate(data, formRef, community) {
    const { title, description, category } = data;
    const user = Meteor.user().username;
    const timePosted = Date.now()


    console.log(community)

    ForumLink.insert({ title, description, category, timePosted, user, community },
      (err) => {
        if (err) {
          swal('Error', err.message, 'error')
        } else {
          swal('Success', 'Event posted', 'success')
          formRef.reset()
        }
      }
    )

  },
  interviewCreate: function interviewCreate(data, formRef, community) {
    const { title, description, timeConducted, interviewQuestions } = data;
    const user = Meteor.user().username;
    const timePosted = Date.now()


    Interview.insert({ title, description, timePosted, interviewQuestions, timeConducted, user, community },
      (err) => {
        if (err) {
          swal('Error', err.message, 'error')
        } else {
          swal('Success', 'Event posted', 'success')
          formRef.reset()
        }
      }
    )

  },
  learnLinkCreate: function learnLinkCreate(data, formRef, community) {
    const { title, description, linkType, link } = data;
    const owner = Meteor.user().username;


    console.log(community)

    LearnLinks.insert({ title, description, linkType, link, owner, community },
      (err) => {
        if (err) {
          swal('Error', err.message, 'error')
        } else {
          swal('Success', 'Event posted', 'success')
          formRef.reset()
        }
      }
    )

  },
  videoCreate: function videoCreate(data, formRef, community) {
    const { title, description, videoType, videoInput } = data;
    const user = Meteor.user().username;
    const timePosted = Date.now()


    console.log(community)

    Videos.insert({ title, description, timePosted, videoType, videoInput, user, community },
      (err) => {
        if (err) {
          swal('Error', err.message, 'error')
        } else {
          swal('Success', 'Event posted', 'success')
          formRef.reset()
        }
      }
    )

  }
}


export const EditFunctions = {
  blogSubmit: function blogSubmit(data) {
    const { title, content, links, _id } = data;
    Blogs.update(_id, { $set: { title, content, links } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Blog updated successfully', 'success')));
  },
  eventsSubmit: function eventsSubmit(data) {
    const { title, description, eventType, eventOccuranceData, _id } = data;
    UpcomingEvents.update(_id, { $set: { title, description, eventType, eventOccuranceData } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Event updated successfully', 'success')));
  },
  announcementSubmit: function announcementSubmit(data) {
    const { title, content, _id } = data;
    Announcements.update(_id, { $set: { title, content } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Announcement updated successfully', 'success')));
  },
  profileSubmit: function profileSubmit(data) {
    const { title, aboutMe, interests, gradYear, _id } = data;
    Profile.update(_id, { $set: { title, aboutMe, interests, gradYear } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Profile updated successfully', 'success')));
  },
  newsupdateEdit: function newsupdateEdit(data) {
    const { title, description, newsLink, _id } = data;
    NewsUpdate.update(_id, { $set: { title, description, newsLink } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'News update updated successfully', 'success')));
  },
  forumlinkEdit: function forumlinkEdit(data) {
    const { title, description, category, _id } = data;
    ForumLink.update(_id, { $set: { title, description, category } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Forum updated successfully', 'success')));
  },
  interviewEdit: function interviewEdit(data) {
    const { title, description, image, timeConducted, interviewQuestions, _id } = data;
    Interview.update(_id, { $set: { title, description, image, timeConducted, interviewQuestions } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'News update updated successfully', 'success')));
  },
  learnLinkEdit: function learnLinkEdit(data) {
    const { title, description, linkType, _id } = data;
    LearnLinks.update(_id, { $set: { title, description, linkType } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Learn link updated successfully', 'success')));
  },
  videoEdit: function videoEdit(data) {
    const { title, description, videoType, _id } = data;
    Videos.update(_id, { $set: { title, description, videoType } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'News update updated successfully', 'success')));
  },
  aboutEdit: function aboutEdit(data) {
    const { initiatives, mission, organizationName, story, _id } = data
    About.update(_id, { $set: { initiatives, mission, organizationName, story } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  },
  chapterEdit: function chapterEdit(data) {
    const {history, leadership, fundraising, electiondate, initiatives, _id} = data
    ChapterInfo.update(_id, { $set: { history, leadership, fundraising, electiondate, initiatives} }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Item updated successfully', 'success')));
  }

}

export function EditPicker(props) {
  switch (props.toggleState) {
    case "event":
      return <EditComponents.UpcomingEventsEdit schema={UpcomingEventschema} submit={EditFunctions.eventsSubmit} model={props.model} />;
    case "blog":
      return <EditComponents.BlogEdit schema={BlogSchema} submit={EditFunctions.blogSubmit} model={props.model} />;
    case "announcement":
      return <EditComponents.AnnouncementEdit schema={AnnouncementsSchema} submit={EditFunctions.announcementSubmit} model={props.model} />;
    case "profile":
      return <EditComponents.ProfileEdit schema={ProfileSchema} submit={EditFunctions.profileSubmit} model={props.model} />;
    case "newsupdate":
      return <EditComponents.NewsUpdateEdit schema={NewsUpdateSchema} submit={EditFunctions.newsupdateEdit} model={props.model} />;
    case "forum":
      return <EditComponents.ForumEdit schema={ForumSchema} submit={EditFunctions.forumlinkEdit} model={props.model} />;
    case "learnLink":
      return <EditComponents.LearnLinksEdit schema={LearnLinksSchema} submit={EditFunctions.learnLinkEdit} model={props.model} />;
    case "video":
      return <EditComponents.VideoEdit schema={VideoSchema} submit={EditFunctions.videoEdit} model={props.model} />;
    case "interview":
      return <EditComponents.InterviewEdit schema={InterviewSchema} submit={EditFunctions.interviewEdit} model={props.model} />;
    case "mission":
      return <EditComponents.MissionsEdit schema={AboutSchema} submit={EditFunctions.aboutEdit} model={props.model} />;
    case "story":
      return <EditComponents.StoryEdit schema={AboutSchema} submit={EditFunctions.aboutEdit} model={props.model} />;
    case "initiatives":
      return <EditComponents.InitiativesEdit schema={AboutSchema} submit={EditFunctions.aboutEdit} model={props.model} />;
    case "chapterinitiatives":
      return <EditComponents.ChapterInitiativesEdit schema={ChapterSchema} submit={EditFunctions.chapterEdit} model={props.model} />;
    case "history":
      return <EditComponents.HistoryEdit schema={ChapterSchema} submit={EditFunctions.chapterEdit} model={props.model} />;
    case "electiondate":
      return <EditComponents.ElectionDateEdit schema={ChapterSchema} submit={EditFunctions.chapterEdit} model={props.model} />;
    case "fundraising":
      return <EditComponents.FundraisingEdit schema={ChapterSchema} submit={EditFunctions.chapterEdit} model={props.model} />;
    case "leadership":
      return <EditComponents.LeadershipEdit schema={ChapterSchema} submit={EditFunctions.chapterEdit} model={props.model} />; 
  }
}

export function DetailPicker(props) {
  switch (props.toggleState) {
    case "event":
      return <DetailComponents.UpcomingEventsDetail detailInfo={props.detailInfo} />;
    case "blog":
      return <DetailComponents.BlogDetail detailInfo={props.detailInfo} />;
    case "announcement":
      return <DetailComponents.AnnouncementDetail detailInfo={props.detailInfo} />;
    case "profile":
      return <DetailComponents.ProfileDetail detailInfo={props.detailInfo} />;
    case "newsupdate":
      return <DetailComponents.NewsUpdateDetail detailInfo={props.detailInfo} />;
    case "forum":
      return <DetailComponents.ForumDetail detailInfo={props.detailInfo} />;
    case "learnLink":
      return <DetailComponents.LearnLinksDetail detailInfo={props.detailInfo} />;
    case "video":
      return <DetailComponents.VideoDetail detailInfo={props.detailInfo} />;
    case "interview":
      return <DetailComponents.InterviewDetail detailInfo={props.detailInfo} />;
  }
}

export function ListPicker(props) {
  switch (props.toggleState) {
    case "event":
      return <ListComponents.EventList listInfo={props.listInfo} />;
    case "blog":
      return <ListComponents.BlogList listInfo={props.listInfo} />;
    case "announcement":
      return <ListComponents.AnnouncementList listInfo={props.listInfo} />;
    case "newsupdate":
      return <ListComponents.NewsList listInfo={props.listInfo} />;
    case "forum":
      return <ListComponents.ForumList listInfo={props.listInfo} />;
    case "learnLink":
      return <ListComponents.LearnList listInfo={props.listInfo} />;
    case "video":
      return <ListComponents.VideoList listInfo={props.listInfo} />;
    case "interview":
      return <ListComponents.InterviewList listInfo={props.listInfo} />;
  }
}

export function CreatePicker(props) {
  switch (props.toggleState) {
    case "event":
      return <CreateComponents.CreateEvent userScope={props.userScope} submit={CreateFunctions.eventsCreate} />;
    case "blog":
      return <CreateComponents.CreateBlog userScope={props.userScope} submit={CreateFunctions.blogCreate} />;
    case "announcement":
      return <CreateComponents.CreateAnnouncement userScope={props.userScope} submit={CreateFunctions.announcementCreate} />;
    case "newsupdate":
      return <CreateComponents.CreateNews userScope={props.userScope} submit={CreateFunctions.newsCreate} />;
    case "forum":
      return <CreateComponents.CreateForumLink userScope={props.userScope} submit={CreateFunctions.forumLinkCreate} />;

    case "profile":
      return <CreateComponents.CreateProfile userScope={props.userScope} submit={CreateFunctions.profileCreate} />
    case "learnLink":
      return <CreateComponents.CreateLearnLink userScope={props.userScope} submit={CreateFunctions.learnLinkCreate} />;
    case "video":
      return <CreateComponents.CreateVideo userScope={props.userScope} submit={CreateFunctions.videoCreate} />;
    case "interview":
      return <CreateComponents.CreateInterview userScope={props.userScope} submit={CreateFunctions.interviewCreate} />;
  }
}