import React, { useState, useEffect } from 'react';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Meteor } from 'meteor/meteor';
import { ListPicker, useAccount } from "./utils";
const ListPage = () => {
    const { user, userId, isLoggingIn } = useAccount();

    const componentId = FlowRouter.getParam('component')
    
    const [listInfo, setListInfo] = useState(false)
    const [toggleState, setToggleState] = useState(false)

    React.useEffect(() => {
        Meteor.call("retrieveListInfo", componentId, (e, r) => {
            console.log(e)
            if (!e) {
                console.log(r)
                setListInfo(r.doc)
                setToggleState(r.toggleState)
            }
        })
    }, [user])


    return (
   <>
   {toggleState ? 
 <div>
 <ListPicker toggleState={toggleState} listInfo={listInfo}/> 
 </div> :
  <div>
      Loading
  </div>
}
   </>
    )
}

export default ListPage;