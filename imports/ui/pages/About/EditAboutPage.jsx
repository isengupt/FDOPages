import React, { useState } from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, ListField, ListItemField, NestField, HiddenField, DateField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data'
import 'uniforms-bridge-simple-schema-2';
import { About, AboutSchema } from '../../../api/schema/About';
import { setButtonState, useAccount } from "../../utils/utils"
import EditInitiatives from './EditInitiatives';
import EditMission from './EditMission'
import EditStory from './EditStory'
const EditAboutPage = () => {

    const [state, setState] = useState("Mission");
    const { user, isLoggingIn } = useAccount();
    const [doc, setDoc] = useState(false)
    const [_id, setId] = useState(false)

    const toggleState = (state) => {
        const allowedStates = ["Mission", "Initiatives", "Story"];
        const stateStr = state;
        if (allowedStates.includes(stateStr)) {
          setState(stateStr);
        }
    };

    React.useEffect(() => {
        Meteor.call("retrieveAboutEdit", (e, r) => {
            console.log(e)
            if (!e) {
                console.log(r)
                setDoc(r)
                setId(r._id)

            }
        })
    }, [user])




    function submit(data, formRef) {
        const {initiatives, mission, organizationName, story} = data
        About.update(_id, { $set: { initiatives, mission, organizationName, story} }, (error) => (error ?
            swal('Error', error.message, 'error') :
            swal('Success', 'Item updated successfully', 'success'))); 
    };




    if (state === "Mission")  {
        return (
            <>
            {doc ? 
        <EditMission schema = {AboutSchema} submit={submit} model={doc} toggleState={toggleState}/>
        : <div> Loading Data</div>
            }
            </>
        )
    }

    if (state === "Story")  {
        return (
            <>
            {doc ? 
        <EditStory schema = {AboutSchema} submit={submit} model={doc} toggleState={toggleState}/>
        : <div> Loading Data</div>
    }
    </>
        )
    }

    if (state === "Initiatives") {
        return (
            <>
            {doc ? 
        <EditInitiatives schema = {AboutSchema} submit={submit} model={doc} toggleState={toggleState}/>
        : <div> Loading Data</div>
    }
    </>
        )
    }

   
   
      
        
      

};

export default EditAboutPage