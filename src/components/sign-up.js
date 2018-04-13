import React, { Component } from 'react';
import Field from './field';

class SignUp extends Component {
    render() {

        const inputs = [
            {
                label: 'Username',
                type: 'Text',
                placeholder: 'Choose a username',
                name: 'username'
            },
            {
                label: 'Email Address',
                type: 'Text',
                placeholder: 'Enter your email',
                name: 'email'
            },
            {
                label: 'Password',
                type: 'password',
                placeholder: 'Enter a password',
                name: 'password'
            },
            {
                label: 'Password',
                type: 'password',
                placeholder: 'Confirm your password',
                name: 'confirmPassword'
            },
        ];

        const fields = inputs.map((field, index) => {
            return <Field key={index} {...field}/>
        });

        return (
           <div>
                <h1 className="text-center mb-3">SIGN UP</h1>
                <div className="row justify-content-center">
                    <div className="card col-8 bg-primary">
                            <div className="card-body">
                                    <form>
                                        {fields}
                                    </form>
                            </div>                   
                    </div>
                </div>
            </div> 
        );
    };
};

export default SignUp;