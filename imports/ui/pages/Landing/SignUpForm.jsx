import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Input } from 'semantic-ui-react'

export default function SignupForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')


    const submit = (e) => {
        e.preventDefault();

        Accounts.createUser({ email, username: email, password }, (err) => {

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
                  <div>SignUp</div>
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

            <button type="submit">Sign Up</button>
        </form>
         <button className="ui primary labeled icon button" onClick={() => setLogging('login')}>
         <i class="unlock alternate icon"></i>
             
             Login to account</button>
         </>
    );
};
