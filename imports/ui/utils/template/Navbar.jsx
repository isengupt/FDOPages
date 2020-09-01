import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import useModal from "../components/useModal";
import LoginSection from "../../pages/Login/LoginSection";
import ActionButton from "../components/ActionButton";
import { useAccount } from "../utils";
import { Menu, Responsive, Dropdown, DropdownMenu } from 'semantic-ui-react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Laptop Item')
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
    <div
   
      id="Navigation"
      role="banner"
      class="header-component w-nav"
    >
      <div class="navigation-container">
        <div class="navigation-left">
          <a href="/" class="brand w-nav-brand">
            FDO
          </a>
        </div>

        
        <div class="navigation-right ">

          <nav role="navigation" class="nav-menu w-nav-menu">
            <a href="/" class="nav-link w-nav-link active">
              About
            </a>

            {user ? (
              <>
                <a href="/community" class="nav-link w-nav-link">
                  Community
                </a>
                <a href="/resources" class="nav-link w-nav-link">
                  Resources
                </a>
              </>
            ) : (
              <></>
            )}

            {showLogin ? (
              <>
                <button
                  type="button"
                  data-w-id="1016f89e-a6d4-3ad3-1275-306d519c93d3"
                  className="login-button w-button"
                  onClick={toggle}
                >
                  Login
                </button>
                <Modal isShowing={isShowing} hide={toggle}>
                  <LoginSection />
                </Modal>
              </>
            ) : (
              <ActionButton />
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
