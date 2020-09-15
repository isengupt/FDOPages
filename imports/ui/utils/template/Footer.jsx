import React from "react";
import { Meteor } from "meteor/meteor";
import { useAccount } from "../utils";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
const Footer = () => {
  const { user } = useAccount();

  function logoutFunction() {
    Meteor.logout((error) => {
      if (error) {
        console.log(error.reason);
      }
      else {
        FlowRouter.go('/')

      }
    })
  }
  return (
    <>
      <div class="footer">
        <div class="container footer-container">
          <div class="w-layout-grid footer-grid">
            <div id="w-node-a159dcc6da5a-dcc6da57" class="footer-column">
              <h1 class="doniation-hero">
                Considering donating to our cause be{" "}
                <span class="brand-span">Doctors </span>too.
              </h1>
              <a
                href="order.html"
                data-w-id="b182de3d-7584-894c-f529-1e38180592b2"
                class="contact-us-button w-button"
              >
                Donate
              </a>
            </div>
            <div id="w-node-a159dcc6da5e-dcc6da57" class="footer-column">
              <div class="title">Links</div>
              <a
                href="index.html"
                aria-current="page"
                class="footer-link w--current"
              >
                About
              </a>
              <a href="order.html" class="footer-link">
                Community
              </a>
              <a href="faq.html" class="footer-link">
                FAQ
              </a>
              <a href="mailto:hello@website.com?subject=Hi" class="footer-link">
                Contact
              </a>
              {user ? (
                <a
                  href="#"
                  className="footer-link"
                  onClick={(ev) => ev.preventDefault() || 
                  logoutFunction()
                  
                 }
                >
                  Log out
                </a>
              ) : null}
            </div>
            <div id="w-node-a159dcc6da72-dcc6da57" class="footer-column">
              <div class="title">Social Media</div>
              <div class="social-icon-wrap">
                <a href="#" class="social-link w-inline-block">
                  <img
                    src="https://uploads-ssl.webflow.com/5e360a99f4dd53fd793925af/5e362b9c121267b0fabbef18_social-instagram.svg"
                    alt=""
                    class="social-icon"
                  />
                </a>
                <a href="#" class="social-link w-inline-block">
                  <img
                    src="https://uploads-ssl.webflow.com/5e360a99f4dd53fd793925af/5e362b9cf4dd53d8073a05cd_social-twitter.svg"
                    alt=""
                    class="social-icon"
                  />
                </a>
                <a href="#" class="social-link w-inline-block">
                  <img
                    src="https://uploads-ssl.webflow.com/5e360a99f4dd53fd793925af/5e362b9c7c077b1740e27d28_social-youtube.svg"
                    alt=""
                    class="social-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
