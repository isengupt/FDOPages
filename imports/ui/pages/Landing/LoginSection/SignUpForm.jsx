import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Input } from 'semantic-ui-react'

const SignUpForm = ({
  toggleState,
  email,
  setEmail,
  password,
  setPassword,
  setConfirmPassword,
  confirmPassword,
  readTC,
  setReadTC,
  signup,
}) => {
  return (
    <div className="panel content-width-extra-large">
      <div className="panel-body grid-halves">
        <div className="justify-column-between">
          <div className="space-bottom">
            <h1 className="card-heading no-bottom-space">Create an account.</h1>
            <div className="card-heading-2">

            </div>
          </div>
          <div>
            <div>Already have an account?</div>
            <a
              onClick={(event) =>
                event.stopPropagation() ||
                event.preventDefault() ||
                toggleState("login")
              }
              className="information-link"
            >
              Sign in here
            </a>
          </div>
        </div>
        <div className="form w-form">
          <form
            className="form-vertical"
            onSubmit={() => event.preventDefault() || signup()}
          >
            <input
              type="email"
              className="form-input-2 form-input-large w-input"
              maxLength={256}
              name="email"
              data-name="Email"
              placeholder="Email Address"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              className="form-input-2 form-input-large w-input"
              maxLength={256}
              name="Password"
              data-name="Password"
              placeholder="Password"
              id="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              type="password"
              className="form-input-2 form-input-large w-input"
              maxLength={256}
              name="Confirm-Password"
              data-name="Confirm Password"
              placeholder="Confirm Password"
              id="Confirm-Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <input
              type="submit"
              defaultValue="Create Account"
              data-wait="Please wait..."
              className="button button-large bg-gradient-4 w-button"
            />
            <label className="w-checkbox field-row">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                data-name="Checkbox"
                checked={readTC}
                onChange={() => setReadTC(!readTC)}
                required
              />
              <span className="checkbox-label text-small w-form-label">
                I have read and agree to the{" "}
                <a href="../utility/legal.html" className="information-link">
                  Terms &amp; Conditions
                </a>
              </span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm