import React, { useState, useEffect } from "react";

import PubSub from "pubsub-js";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

const ActionButton = ({ state }) => {
  const [buttonState, setButtonState] = useState(state || "dashboard");

  useEffect(() => {
    subtoken = PubSub.subscribe("SET_TOP_BUTTON_STATE", (msg, data) => {
      setButtonState(data);
    });
    return function cleanup() {
      PubSub.unsubscribe(subtoken);
    };
  }, []);

  onClickAction = () => {
    switch (buttonState) {
      case "community":
        FlowRouter.go("/community")
      case "dashboard":
        FlowRouter.go("/dashboard");
        break;
      case "edit-community":
        FlowRouter.go("/editCommunity")
      case "edit-about":
        FlowRouter.go("/editAbout")
      case "save-edit":
      case "manage-save":
      case "share-data":
        PubSub.publish("MANAGE_DATA", "save");
        break;
      case "risk-assessment":
        PubSub.publish("MANAGE_DATA", "assess");
        break;
      case "sign-up":
        PubSub.publish("MANAGE_DATA", "signup");
        break;
    }
  };

  getButtonText = () => {
    switch (buttonState) {
      case "community":
        return "Community"
      case "edit-community":
      case "edit-about":
        return "Edit"
      case "dashboard":
        return "Dashboard";
      case "save-edit":
      case "manage-save":
        return "Save Data";
      case "share-data":
        return "Share Data";
      case "risk-assessment":
        return "Get Risk Analysis";
      case "sign-up":
        return "Sign up";
    }
  };

  return (
    <button
      aria-current="page"
      className="button w-button w--current"
      onClick={onClickAction}
    >
      {getButtonText()}
    </button>
  );
};

export default ActionButton;