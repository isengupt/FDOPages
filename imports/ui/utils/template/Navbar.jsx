import React, { useState, useEffect } from 'react';
import Modal from "../components/Modal";
import useModal from '../components/useModal';
import LoginSection from '../../pages/Login/LoginSection'
import ActionButton from "../components/ActionButton";
import { useAccount } from "../utils";
import './Navbar.css'

const Navbar = () => {
  const { isShowing, toggle } = useModal();
  const [showLogin, setShowLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
            {showLogin ?
              <>


                {/*  <Modal
                        isOpen={showModal}
                        closeModal={() => {
                          setShowModal(false);
                          if (!user) {
                            if ( "/" !== FlowRouter.current().path )  FlowRouter.go("/");
                          }
                        }}
                      >
                        <LoginSection />
                      </Modal> */}
                {/*   <button
                        aria-current="page"
                        className="button w-button w--current"
                        onClick={(event) =>
                          event.preventDefault() || setShowModal(true)
                        }
                      > */}
                <button type="button" className="button-default" onClick={
                  toggle
                }>
                  Login
                      </button>
                <Modal
                  isShowing={isShowing}
                  hide={toggle}

                ><LoginSection /></Modal>
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
