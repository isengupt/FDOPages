import React, { useState } from 'react';
import { Input, Header } from 'semantic-ui-react'
import "./forms.css"

export const LoginForm = ({ setLogging }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        setError(err.reason)
      } else {
        setError('')
      }
    });
  };

  return (
    <div className="form__component">
      <form onSubmit={submit} className="form__container">
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

            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className="form__field">
          <div className="form__input__title">Password</div>

          <Input
            type="password"
            placeholder="Password"
            name="password"
            required

            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className="form__buttons">
          <button className="ui secondary button" onClick={() => setLogging('signup')}>Create an Account</button>
          <button className="ui primary button" type="submit">Log In</button>

        </div>
      </form>

    </div>
  );
};
