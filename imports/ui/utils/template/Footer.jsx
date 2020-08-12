import React from "react";
import { Meteor } from "meteor/meteor";
import { useAccount } from "../utils";

const Footer = () => {
  const { user } = useAccount();
  return (
    <>
      <div className="footer">
        <div className="container">
          <div
            data-w-id="6005ea17-5c5e-08b5-5153-579c064184bf"
            className="panel"
          >
            <div className="panel-body footer-1-panel-body">
              <div className="footer-1-top-row">
                <div className="content-width-extra-small">
    
                  <div>
                    <div className="big-social-list">
                     
                    </div>
                  </div>
                </div>
                <div className="footer-menu-grids">
                  <div className="w-layout-grid vertical-menu-grid">
                    {user ? (
                      <a
                        href="#"
                        className="text-link"
                        onClick={(ev) => ev.preventDefault() || Meteor.logout()}
                      >
                        Log out
                      </a>
                    ) : null}
                  </div>
                  <div className="w-layout-grid vertical-menu-grid"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;