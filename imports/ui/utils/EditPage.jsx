import React, { useState, useEffect } from 'react';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Meteor } from 'meteor/meteor';
import { EditPicker, useAccount } from "./utils";
const EditPage = () => {
    const { user } = useAccount();
    const documentId = FlowRouter.getParam('_id')
    const componentId = FlowRouter.getParam('component')

    const [model, setModel] = useState(false)
    const [toggleState, setToggleState] = useState(false)

    React.useEffect(() => {
        Meteor.call("retrieveEditInfo", componentId, documentId, (e, r) => {
            console.log(e)
            if (!e) {
                console.log(r)
                setModel(r.doc)
                setToggleState(r.toggleState)
            }
        })
    }, [user])
    return (
        <>
            {toggleState ?
                <div>
                    <EditPicker toggleState={toggleState} model={model} />
                </div> :
                <div>
                    Loading
  </div>
            }
        </>
    )
}

export default EditPage;