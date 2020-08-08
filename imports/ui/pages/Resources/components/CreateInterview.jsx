import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, DateField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { UpcomingEvents, UpcomingEventschema } from '../../../api/schema/UpcomingEvent';

const UpcomingEventFormSchema = new SimpleSchema({
    title: String,
    description: String,
    eventType: {
        type: String,
        allowedValues: ['Podcast', 'Meeting', 'Livestream'],
        defaultValue: 'Meeting',
    },
    eventOccuranceDate: Date,
})

const Interview = () => {
    function submit(data, formRef) {
     const {title, description, eventType, eventOccuranceDate} = data;
     const owner = Meteor.user().username;
     const eventPostedDate = Date.now()
    
      UpcomingEvents.insert({ title, description, eventType, owner, eventPostedDate, eventOccuranceDate},
        (err) => {
            if (err) {
                swal('Error', err.message, 'error')
            } else {
                swal ('Success', 'Event posted', 'success')
                formRef.reset()
            }
        }
        ) 
    };

    let fRef = null;
  
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Stuff</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={UpcomingEventFormSchema} onSubmit={data => submit(data, fRef)} >
              <Segment>
                <TextField name='title'/>
                <TextField name='description'/>
                <SelectField name='eventType'/>
                <DateField name="eventOccuranceDate"/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  };

export default Interview