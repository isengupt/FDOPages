import React, { useState } from 'react';
import { Input, Header } from 'semantic-ui-react'
import "./forms.css"

const LoginForm = ({ toggleState,
  email,
  setEmail,
  password,
  setPassword,
  login, }) => {


  return (
    <div className="form__component">
      <form onSubmit={() =>
        event.stopPropagation() || event.preventDefault() || login()
      } className="form__container">
        <div className="form__title__container">
          <div className="form__title">
            Sign In
       </div>
        </div>

        <div className="form__field">
          <div className="form__input__title">Email</div>

          <Input
            type="text"
            placeholder="Email"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form__field">
          <div className="form__input__title">Password</div>

          <Input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form__buttons">
          <input
            type="submit"
            defaultValue="Sign In"
            data-wait="Please wait..."
            className="button-4 button-large bg-gradient-4 w-button"
          />


        </div>
      </form>
      <div className="text-center">
        Don't have an account yet?&nbsp;
          <a
          onClick={(event) => event.preventDefault() || toggleState("signup")}
          className="information-link"
        >
          Create one
          </a>
      </div>
    </div>
  );
};

export default LoginForm