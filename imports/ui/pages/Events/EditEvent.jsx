import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, HiddenField, DateField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import {useTracker} from 'meteor/react-meteor-data'
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2'; 
import { UpcomingEvents, UpcomingEventschema } from '../../../api/schema/UpcomingEvent';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

export default function UpdateEventForm(props) {
  //const documentId = props._id;
  const documentId = FlowRouter.getParam('_id')
  React.useEffect(() => {
    console.log(documentId)
  })

   const { doc, user } = useTracker(() => {
    Meteor.subscribe('UpcomingEvents');

    return ({
      doc: UpcomingEvents.findOne(documentId),
      user: Meteor.user(),
    });
  });
    
    
    function submit(data, formRef) {
     const {title, description, eventType, eventOccuranceDate, _id} = data;
     UpcomingEvents.update(_id, { $set: { title, description, eventType, eventOccuranceDate } }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Item updated successfully', 'success')));
    };  



  
    return (
     
         <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Edit Event</Header>
            <AutoForm schema={UpcomingEventschema} onSubmit={data => submit(data)} model={doc}>
              <Segment>
                <TextField name='title'/>
                <TextField name='description'/>
                <SelectField name='eventType'/>
                <DateField name="eventOccuranceDate"/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner' />
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid> 
    );
  };