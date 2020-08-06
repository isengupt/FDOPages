import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { FlowRouter } from "meteor/ostrio:flow-router-extra"
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';
import { useAccount } from "./utils";
import './Navbar.css'

const Navbar = () => {

  const [showLogin, setShowLogin] = useState(false); // manage, import

  const { user, role } = useTracker(() => {
    Meteor.subscribe('users.all');

    return ({
      role: Meteor.roleAssignment.find({}).fetch(),
      user: Meteor.user(),
    });
  });

  function logout() {
    Meteor.logout();
  }

  console.log(role)


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
            <a href="/about">About</a>
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
          {role[0] ? <div className="navbar__item">{role[0].role._id}</div> : <div className="navbar__item">No Role</div>}
          {user ?
            <>
              <div className="navbar__item">
                {user.username}

              </div>
              <div className="navbar__item">
                <a href="/createEvent">createEvent</a>
              </div>
              <div className="navbar__item">
                <a href="/listEvents">listEvents</a>
              </div>
              <div className="navbar__item">
                <button onClick={logout}>Logout</button>
              </div>
            </>
            :
            <div className="navbar__item">
              <div>Login</div>
            </div>
          }
        </div>

      </div>

    </div>


  );

}

export default Navbar
