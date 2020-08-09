import React, { useState } from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, HiddenField, DateField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data'
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2';
import { About, AboutSchema } from '../../../api/schema/About';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { setButtonState, useAccount } from "../../utils/utils"
const EditAboutPage = () =>  {

    const { user, isLoggingIn } = useAccount();
    const [doc, setDoc] = useState(false)
    const [_id, setId] = useState(false)
    React.useEffect(() => {
        Meteor.call("retrieveAboutEdit", (e, r) => {
            console.log(e)
            if (!e) {
            console.log(r)
            setDoc(r)

            }
        })
    }, [user])




    function submit(data, formRef) {
        const { mission, story} = data;
        About.update(_id, { $set: { title, description, eventType, eventOccuranceDate } }, (error) => (error ?
            swal('Error', error.message, 'error') :
            swal('Success', 'Item updated successfully', 'success')));
    };




    return (

        <Grid container centered>
            <Grid.Column>
                <Header as="h2" textAlign="center">Edit About</Header>
                <AutoForm schema={AboutSchema} onSubmit={data => submit(data)} model={doc}>
                    <Segment>
                        <TextField name='mission.mission' />
                        <TextField name='mission.vision' />

                      
                    </Segment>
                </AutoForm>
            </Grid.Column>
        </Grid>
    );
};

export default EditAboutPage