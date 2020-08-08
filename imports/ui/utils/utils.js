import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import PubSub from "pubsub-js";

export const useAccount = () =>
  useTracker(() => {
    const user = Meteor.user();
    const userId = Meteor.userId();
    const isLoggingIn = Meteor.loggingIn();
    

    return {
      user,
      userId,
      isLoggingIn,

    };
  }, []);

  const allowedButtonStates = [
    "community",
    "dashboard",
    "manage-save",
    "share-data",
    "risk-assessment",
    "sign-up",
    "dashboard-manage-locations",
    "login",
    "edit-data",
    "save-edit"
  ];

  export const setButtonState = (state) => {
    if (allowedButtonStates.includes(state))
      PubSub.publish("SET_TOP_BUTTON_STATE", state);
    else throw new Meteor.Error("Incorrect state");
  };