import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { FlowRouter } from "meteor/ostrio:flow-router-extra"
import Modal from '../utils/Modal'
import LoginSection from '../pages/Landing/LoginSection'
import { Roles } from 'meteor/alanning:roles';
import './Navbar.css'
import ActionButton from "./ActionButton";
import { setButtonState, useAccount } from "./utils";

const Navbar = () => {

  const [showLogin, setShowLogin] = useState(false); // manage, import
  const [showModal, setShowModal] = useState(false); // manage, import
  const { user, userId, isLoggingIn} = useAccount();
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

  useEffect(() => {
    if (user) {
      setShowLogin(false);
      setShowModal(false);
    }
  }, [user]);

  useEffect(() => {
    if (!user && !isLoggingIn) {
      setShowLogin(true);
      
    }
  }, [user]);


  return (


    <div className="navbar__container">
      <div className="navbar__left">

        <div className="navbar__item">

          <a href="/">
            <h3 className="brand">
              <span className="contain text-span-5">FFHMO</span>
            </h3>
          </a>
          </div>
          <div className="navbar__item">
            <a href="/">About</a>
          </div>
          <div className="navbar__item">
            <a href="/resources">Resources</a>
          </div>
          <div className="navbar__item">
            <a href="/community">Community</a>
          </div>

      </div>
      <div className="navbar__right">

        <div className="navbar__links">
        <div className="navbar-buttons">
                  { showLogin ?
                    <>
                      <Modal
                        isOpen={showModal}
                        closeModal={() => {
                          setShowModal(false);
                          if (!user) {
                            if ( "/" !== FlowRouter.current().path )  FlowRouter.go("/");
                          }
                        }}
                      >
                        <LoginSection />
                      </Modal>
                      <button
                        aria-current="page"
                        className="button w-button w--current"
                        onClick={(event) =>
                          event.preventDefault() || setShowModal(true)
                        }
                      >
                        Login
                      </button>
                    </>
                    :
                    <ActionButton />
                  }
                </div>

        </div>

      </div>

    </div>


  );

}

export default Navbar
