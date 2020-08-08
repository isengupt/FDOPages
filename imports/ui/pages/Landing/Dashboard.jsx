import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { setButtonState, useAccount } from "../../utils/utils";


const Dashboard = () => {

  const { user, userId, isLoggingIn } = useAccount();
  let subtoken;
  
  useEffect(() => {
    subtoken = PubSub.subscribe("MANAGE_DATA", (msg, data) => {
      if (!user && !isLoggingIn) {
        setShowLogin(true);
      }
    });
    return function cleanup() {
      PubSub.unsubscribe(subtoken);
    };
  }, [user, isLoggingIn]);

  setButtonState("community");
  return (
    <div>Some Dashboard Text</div>
  );


};

export default Dashboard

