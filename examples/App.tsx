import * as React from 'react';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.scss';
import {MainPage} from './containers/cases/MainPage';
import {DocsPage} from './containers/api/DocsPage';

export default class App extends React.PureComponent {
    render() {
        return (
            <div className="App height-100">
                <Router>
                    <div className="height-100">
                        <Route
                            exact={true}
                            path="/"
                            render={() => (
                                <Redirect to="/docs/introduce"/>
                            )}
                        />
                        <Route path="/components" component={MainPage}/>
                        <Route path="/docs" component={DocsPage}/>
                    </div>
                </Router>
            </div>
        );
    }
}
