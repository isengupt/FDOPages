import React from 'react';
import { Meteor } from 'meteor/meteor';
import "../imports/routes/routes";
import Modal from "react-modal";
import 'semantic-ui-css/semantic.css';
import './main.css'
import './css/ishan-fdo-design.webflow.css'
import './normalize.css'
import './webflow.css'


Modal.setAppElement("#react-target");

Meteor.startup(() => {
  $('body').addClass('body')
});
