import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Nav from './nav';
import Home from './home';
import AboutUs from './about-us';
import Operatives from './operatives';
import Secret from './secret';
import { Route } from 'react-router-dom';
import auth from '../hoc/auth';
import SignUp from './sign-up';
import SignIn from './sign-in';
import Quotes from './quotes';

const App = () => (
    <div className="container">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/secret" component={auth(Secret)} />
        <Route path="/operatives-list" component={Operatives} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/quotes" component={auth(Quotes)} />
    </div>
);

export default App;
