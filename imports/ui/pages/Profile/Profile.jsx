import React, { useState, useEffect } from 'react';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Meteor } from 'meteor/meteor';
import {useTracker} from 'meteor/react-meteor-data'
import { Profile, ProfileSchema} from '../../../api/schema/Profile';

const ProfilePage = (props) => {

    const documentId = FlowRouter.getParam('_id')
    React.useEffect(() => {
      console.log(documentId)
    })

    const { doc, user } = useTracker(() => {
      Meteor.subscribe('Profile');
  if (documentId) {
      return ({
        doc: Profile.findOne({email: documentId}),
        user: Meteor.user(),
      });
    }
    });

    
    return (
      <div className="simple-todos-react">
{doc && doc.email}
    </div>

    )
}

export default ProfilePage;