import React, { Component } from 'react';
import Field from './field';
import { connect } from 'react-redux';
import { formError, signUp } from '../actions';

class SignUp extends Component {
    handleSignUp(event) {
        event.preventDefault();
        const { username, email, password, confirmPassword } = this.props.values;
        const errors = [];

        if(!username) {
            errors.push('Please entire a username');
        };

        if(!email) {
            errors.push('Please entire an email');
        };

        if(!password) {
            errors.push('Please entire a password');
        };

        if(password !== confirmPassword) {
            errors.push('Passwords do not match');
        };

        this.props.formError(errors);

        if(errors.length === 0) {
            this.props.signUp({ email, password });
        }; 
    };

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

        const { values, errors } = this.props;
        console.log('Errors:', errors)

        const fields = inputs.map((field, index) => {
            return <Field key={index} {...field} value={values[field.name] || ''}/>
        });

        return (
           <div>
                <h1 className="text-center mb-3">SIGN UP</h1>
                <div className="row justify-content-center">
                    <div className="card col-8 bg-primary">
                        <div className="card-body">
                            <form onSubmit={this.handleSignUp.bind(this)}>
                                {fields}
                                <div className="row">
                                    <button className="btn btn-light">Sign-Up</button>
                                </div>
                            </form>
                        </div>                   
                    </div>
                </div>
            </div> 
        );
    };
};

function mapStateToProps(state) {
    return {
        values: state.form.values,        
        errors: state.form.errors
    };
};

export default connect(mapStateToProps, { formError, signUp })(SignUp);