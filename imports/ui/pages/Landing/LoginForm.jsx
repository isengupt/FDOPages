import React, { useState } from 'react';
import { Input, Header } from 'semantic-ui-react'


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
    <>
      <form onSubmit={submit} className="login-form">
        <div>Login</div>
        <label htmlFor="email">Email</label>

        <Input
          type="text"
          placeholder="Email"
          name="email"
          required

          onChange={(e) => setEmail(e.currentTarget.value)}
        />

        <label htmlFor="password">Password</label>

        <Input
          type="password"
          placeholder="Password"
          name="password"
          required

          onChange={(e) => setPassword(e.currentTarget.value)}
        />

        <button type="submit">Log In</button>
        <button className="ui primary labeled icon button" onClick={() => setLogging('signup')}>Create an account</button>
      </form>

    </>
  );
};
