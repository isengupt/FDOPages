import React from 'react';
import { Meteor } from 'meteor/meteor';
import "../imports/routes/routes";
import Modal from "react-modal";
import 'semantic-ui-css/semantic.css';



Modal.setAppElement("#react-target");

Meteor.startup(() => {
  $('body').addClass('body')
});
