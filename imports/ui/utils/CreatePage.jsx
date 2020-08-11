import React, { useState, useEffect } from 'react';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Meteor } from 'meteor/meteor';
import { CreatePicker, useAccount } from "./utils";
const CreatePage = () => {
    const { user, userId, isLoggingIn } = useAccount();
    const componentId = FlowRouter.getParam('component')
    const [toggleState, setToggleState] = useState(false)
    const [editable, setEditable]  = useState(false)
    const [userScope, setUserScope] = useState(false)

    React.useEffect(() => {
        setToggleState(componentId)
    
        Meteor.call("setEditable", componentId, (e, r) => {
            if (!e) {
                console.log(r)
                setEditable(r)
                
            }
        })   
    }, [user])

    React.useEffect(() => {
        Meteor.call("getScope", (e, r) => {
            if (!e) {
           
                console.log(r)
                setUserScope(r)
            }    
          })
    })


    return (
   <>
   {userScope ? 
 <div>
  <CreatePicker toggleState={toggleState} userScope={userScope}/> 
 </div> :
  <div>
      You can't create this type of item
  </div>
}
   </>
    )
}

export default CreatePage;