import React from 'react';
import auth from '../hoc/auth';

const OpList = props => {
    return (
        <div>
            <h1 className="text-center">SPECIAL AGENT</h1>
            <ol>
                <li>Jeff</li>
                <li>Nolan</li>
                <li>Matt</li>
                <li>Parker</li>
            </ol>
        </div>        
    );
};

export default auth(OpList);