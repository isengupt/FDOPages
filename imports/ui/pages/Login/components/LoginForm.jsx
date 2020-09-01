import React from "react";
import { Input } from "semantic-ui-react";

const LoginForm = ({
  toggleState,
  email,
  setEmail,
  password,
  setPassword,
  login,
}) => {
  return (
    <div className="login-form">
      <h1 className="signin-hero">
        Welcome back <span className="brand-span">Doctor.</span>
      </h1>
      <div className="mission-signup">
        <div className="text-block-88">Continue your mission.</div>
        <div className="mission-small">
          New here? 
          <span
            className="sign-up-span"
            onClick={(event) => event.preventDefault() || toggleState("signup")}
          >
            Sign up at this link
          </span>
        </div>
      </div>
      <div className="login-form-component w-form">
        <form
          id="email-form"
          name="email-form"
          data-name="Email Form"
          onSubmit={() =>
            event.stopPropagation() || event.preventDefault() || login()
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
            placeholder=""
            id="name"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="div-block-8">
            <label for="email" className="form-label">
              Password
            </label>
            <label for="email-2" className="password-forgot-label">
              Forgot your password?
            </label>
          </div>
          <input
            type="password"
            className="w-input"
            name="email"
            data-name="Email"
            placeholder=""
            id="email"
            required=""
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <input
            type="submit"
            value="Sign In"
            data-wait="Please wait..."
            className="submit-signup w-button"
          />
        </form>
      </div>
      <a href="#" className="google-signin-button w-button">
        School Portal Sign In
      </a>
    </div>
  );
};

export default LoginForm;
