import React, { useState } from 'react';
import Initiatives from './components/Initiatives'
import Leadership from './components/Leadership'
import History from './components/History'
import Advisor from './components/Advisor'
import ImageGallery from './components/ImageGallery'
import Fundraising from './components/Fundraising'

import { useTracker } from 'meteor/react-meteor-data';
import { ChapterInfo } from '../../../api/schema/ChapterInfo';
const CommunityPage = () => {

    const { chapter, user } = useTracker(() => {

        Meteor.subscribe('ChapterInfo');
    
        return ({
          chapter: ChapterInfo.find({}).fetch(),
          user: Meteor.user(),
        });
      });

    console.log(chapter)
    return (
        <div>
           {chapter[0] ?
        <div>
          <h1> {chapter[0].chapterName} Community Page</h1>
            <div className="chapter__election"> {chapter[0].electionDate.toString()} </div>
            <Initiatives initiatives={chapter[0].initiatives}/>
            <Leadership leadership={chapter[0].leadership}/>
            <History history = {chapter[0].history}/>
            <Advisor advisor = {chapter[0].advisor} />
            <ImageGallery images = {chapter[0].ImageGallery}/>
            <Fundraising fundraising = {chapter[0].fundraising}/>
        </div>
        :
        <div>
          Loading...
            </div>}
          
            
           
        </div>
    )
}

export default CommunityPage;