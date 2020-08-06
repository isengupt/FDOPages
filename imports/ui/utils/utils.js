import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

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