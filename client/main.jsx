import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import "../imports/routes/routes";
import Modal from "react-modal";
import 'semantic-ui-css/semantic.css';

Meteor.startup(() => {
  $('body').addClass('body')
});
