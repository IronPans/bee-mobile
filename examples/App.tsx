import * as React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Main from './cases/Main';
import Docs from './cases/Docs';
import './App.scss';

export default class App extends React.PureComponent {
    render() {
        return (
            <div className="App height-100">
                <Router>
                    <div className="height-100">
                        <Route exact path="/" render={() => (
                                <Redirect to="/docs/introduce"/>
                        )}/>
                        <Route path="/components" component={Main}/>
                        <Route path="/docs" component={Docs}/>
                    </div>
                </Router>
            </div>
        );
    }
}
