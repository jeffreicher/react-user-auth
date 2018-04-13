import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInputChange } from '../actions';

class Field extends Component {

    render() {
        
        const { label, type, placeholder, name, values, handleInputChange } = this.props;
        const value = values[name] || '';

        return (
            <div>
                <div className="form-group">
                    <label className="text-white">{label}</label>
                    <input onChange={handleInputChange} value={value} name={name} type={type} className="form-control" placeholder={placeholder} />
                </div>                
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        values: state.form.values        
    };
};

export default connect(mapStateToProps, { handleInputChange })(Field);