import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (WrappedComponent) => {
    class Auth extends Component {
        componentDidMount() {
            if(!this.props.auth) {
                this.props.history.push('/');
            }
        }

        componentWillReceiveProps(nextProps) {
            if(!nextProps.auth) {
                nextProps.history.push('/');
            }
        }

        render() {
            return <WrappedComponent {...this.props}/>
        };
    };

    function mapStateToProps(state) {
        return {
            auth: state.user.auth
        };
    };

    return connect(mapStateToProps)(Auth);
};