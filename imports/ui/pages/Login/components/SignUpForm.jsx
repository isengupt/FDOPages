import React, { useState } from 'react';
import Select from 'react-select';

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
  school,
  setSchool,
  options,
  handleChange
}) => {
  return (

    <div className="login-form">
    <h1 className="signin-hero">
      Welcome back <span className="brand-span">Doctor.</span>
    </h1>
    <div className="mission-signup">
      <div className="text-block-88">Continue your mission.</div>
      <div className="mission-small">
       Already have an account?
        <span
          className="sign-up-span"
          onClick={(event) => event.preventDefault() || toggleState("signup")}
        >
          Click here.
        </span>
      </div>
    </div>
    <div className="login-form-component w-form">
      <form
        id="email-form"
        name="email-form"
        data-name="Email Form"
        onSubmit={() =>
          event.stopPropagation() || event.preventDefault() || signup()
        }
      >
        <label for="name" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="text-field w-input"
          name="name"
          data-name="Name"
          placeholder="Email"
          id="name"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />


<div className="div-block-8">
          <label for="password" className="form-label">
            Password
          </label>
         
        </div>
        <input
          type="password"
          className="w-input"
          name="password"
          data-name="Password"
          placeholder="Password"
          id="password"
          required=""
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

<div className="div-block-8">
          <label for="confirmPassowrd" className="form-label">
           Confirm Password
          </label>
        
        </div>
        <input
          type="password"
          className="w-input"
          name="confirmPassowrd"
          data-name="confirmPassword"
          placeholder="Confirm Password"
          id="confirmPassowrd"
          required=""
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
  <Select
placeholder="School"
        value={school}
        onChange={(value) => handleChange(value)}
        options={options}
      />

        <input
          type="submit"
          value="Sign In"
          data-wait="Please wait..."
          className="submit-signup w-button"
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
    <a href="#" className="google-signin-button w-button">
      School Portal Sign In
    </a>
  </div>
      
     
     

  );
};

export default SignUpForm