/**
 * @namespace App
 */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group';

import '../static/About.css';

// component
import JobsListContainer from '../jobs/list/JobsListContainer';
import Home from '../static/Home';
import About from '../static/About';
import MainDrawer from '../navigation/MainDrawer';
import LoginContainer from '../auth/LoginContainer';
import SignUpContainer from '../auth/SignUpContainer';

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
    return (
      <Router>
        <Route render={({location}) => (
          <div>
            <Route path="/" key={'/'} component={MainDrawer}/>
            <CSSTransitionGroup
              transitionEnterTimeout={600}
              transitionLeaveTimeout={600}
              transitionAppear={true}
              transitionAppearTimeout={600}
              transitionName="fade"
            >
              <Switch key={location.key} location={location}>
                <Route exact path="/" component={Home}/>
                <Route path="/jobs" component={JobsListContainer}/>
                <Route path="/about" component={About}/>
                <Route path="/login" component={LoginContainer}/>
                <Route path="/signup" component={SignUpContainer}/>
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
