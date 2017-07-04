/**
 * @namespace App
 */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group';

// component
import AuthRoute from '../../HoCs/AuthRoute';
import JobsListContainer from '../jobs/list/JobsListContainer';
import Home from '../static/Home';
import About from '../static/About';
import MainDrawer from '../navigation/MainDrawer';
import LoginContainer from '../auth/LoginContainer';
import SignUpContainer from '../auth/SignUpContainer';
import './App.css';

/**
 * @class App
 * @memberOf App
 * @extends React.Component
 * @description Render FilterLinks
 */
class App extends Component {

  /**
   * @description render
   * @memberOf App
   * @return {Object} JSX HTML Content
   */
  render() {
    const isLogged = false;
    return (
      <Router>
        <Route render={({location}) => (
          <div>
            <Route path="/" key={'/'} component={MainDrawer}/>
            <CSSTransitionGroup
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
              transitionAppear={true}
              transitionAppearTimeout={300}
              transitionName="fade"
            >
              <Switch key={location.key} location={location}>
                <Route exact path="/" component={Home}/>
                <AuthRoute
                  shouldRedirect={!isLogged}
                  redirectTo="/login"
                  path="/jobs"
                  component={JobsListContainer}
                />
                <Route path="/about" component={About}/>
                <AuthRoute
                  shouldRedirect={isLogged}
                  redirectTo="/jobs"
                  path="/login"
                  component={LoginContainer}
                />
                <AuthRoute
                  shouldRedirect={isLogged}
                  redirectTo="/jobs"
                  path="/signup"
                  component={SignUpContainer}
                />
              </Switch>
            </CSSTransitionGroup>
          </div>
        )}
        />
      </Router>
    );
  }
}

export default App;
