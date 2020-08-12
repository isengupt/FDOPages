import React, { useState, useEffect } from 'react';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Meteor } from 'meteor/meteor';
import { DetailsPicker, useAccount } from "../utils";
const DetailPage = () => {
    const { user, userId, isLoggingIn } = useAccount();

    const componentId = FlowRouter.getParam('component')
    const documentId = FlowRouter.getParam('_id')
    const [detailInfo, setDetailInfo] = useState(false)
    const [toggleState, setToggleState] = useState(false)

    React.useEffect(() => {
        Meteor.call("retrieveDetailInfo", componentId, documentId,  (e, r) => {
            console.log(e)
            if (!e) {
                console.log(r)
                setDetailInfo(r.doc)
                setToggleState(r.toggleState)
            }
        })
    }, [user])


    return (
   <>
   {toggleState ? 
 <div>
 <DetailsPicker toggleState={toggleState} detailInfo={detailInfo}/> 
 </div> :
  <div>
      Loading
  </div>
}
   </>
    )
}

export default DetailPage;