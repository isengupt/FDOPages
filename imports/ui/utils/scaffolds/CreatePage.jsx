import React, { useState, useEffect, useRef } from "react";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Meteor } from "meteor/meteor";
import { CreatePicker, useAccount } from "../utils";
const CreatePage = () => {
  const { user } = useAccount();
  const componentId = FlowRouter.getParam("component");
  const [toggleState, setToggleState] = useState(false);
  const [editable, setEditable] = useState(false);
  const [userScope, setUserScope] = useState(false);

  React.useEffect(() => {
    console.log(toggleState);
    setToggleState(componentId);

    Meteor.call("setEditable", componentId, (e, r) => {
      if (!e) {
        console.log(r, "editable");
        setEditable(r);
      }
    });
  }, [user]);

  React.useEffect(() => {
    Meteor.call("getScope", (e, r) => {
      if (!e) {
        console.log(r);
        setUserScope(r);
      }
    });
  }, [user]);

  if (editable) {
    return (
      <>
        {userScope ? (
          <div>
            <CreatePicker toggleState={toggleState} userScope={userScope} />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  } else {
    return <>Can't create this type of item</>;
  }
};


export default CreatePage;