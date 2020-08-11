import React, { useState } from 'react';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data'
import 'uniforms-bridge-simple-schema-2';
import { ChapterInfo, ChapterSchema } from '../../../api/schema/ChapterInfo';
import { setButtonState, useAccount } from "../../utils/utils"
import EditInitiatives from './EditInitiatives';
import EditFundraising from './EditFundraising'
import EditHistory from './EditHistory'
import EditLeadership from './EditLeadership'
import EditElectionDate from './EditElectionDate'
const EditCommunityPage = () => {

    const [state, setState] = useState("History");
    const { user, isLoggingIn } = useAccount();
    const [doc, setDoc] = useState(false)
    const [_id, setId] = useState(false)

    const toggleState = (state) => {
        const allowedStates = ["History", "Initiatives", "Fundraising", 'ElectionDate', "Leadership"];
        const stateStr = state;
        if (allowedStates.includes(stateStr)) {
          setState(stateStr);
        }
    };

    React.useEffect(() => {
        Meteor.call("getCurrentCommunityData", (e, r) => {
            console.log(e)
            if (!e) {
                console.log(r)
                setDoc(r)
                setId(r._id)

            }
        })
    }, [user])




    function submit(data, formRef) {
      console.log(data)
/*         const {initiatives, mission, organizationName, story} = data
        ChapterInfo.update(_id, { $set: { initiatives, mission, organizationName, story} }, (error) => (error ?
            swal('Error', error.message, 'error') :
            swal('Success', 'Item updated successfully', 'success')));  */
    };




    if (state === "Leadership")  {
        return (
            <>
            {doc ? 
        <EditLeadership schema = {ChapterSchema} submit={submit} model={doc} toggleState={toggleState}/>
        : <div> Loading Data</div>
            }
            </>
        )
    }

    if (state === "History")  {
        return (
            <>
            {doc ? 
  <EditHistory schema = {ChapterSchema} submit={submit} model={doc} toggleState={toggleState}/>
        : <div> Loading Data</div>
    }
    </>
        )
    }

    if (state === "Initiatives") {
        return (
            <>
            {doc ? 
        <EditInitiatives schema = {ChapterSchema} submit={submit} model={doc} toggleState={toggleState}/>
        : <div> Loading Data</div>
    }
    </>
        )
    }

    if (state === "ElectionDate") {
      return (
          <>
          {doc ? 
      <EditElectionDate schema = {ChapterSchema} submit={submit} model={doc} toggleState={toggleState}/>
      : <div> Loading Data</div>
  }
  </>
      )
  }

  if (state === "Fundraising") {
    return (
        <>
        {doc ? 
    <EditFundraising schema = {ChapterSchema} submit={submit} model={doc} toggleState={toggleState}/>
    : <div> Loading Data</div>
}
</>
    )
}

   
   
      
        
      

};

export default EditCommunityPage