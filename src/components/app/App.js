import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group';
import PropTypes from 'prop-types';

// component
import AuthRoute from '../../HoCs/AuthRoute';
import JobsListContainer from '../jobs/list/JobsListContainer';
import Home from '../static/Home';
import About from '../static/About';
import MainDrawer from '../navigation/MainDrawer';
import LoginContainer from '../auth/LoginContainer';
import SignUpContainer from '../auth/SignUpContainer';
import './App.css';

const propTypes = {
  isLogged: PropTypes.bool.isRequired,
  shouldCheckIsLogged: PropTypes.bool.isRequired,
  checkIsLogged: PropTypes.func.isRequired
};

/**
 * @class App
 * @memberOf App
 * @extends React.Component
 * @description Render FilterLinks
 */
class App extends Component {

  /**
   * @description componentDidMount call to check is user logged
   */
  componentDidMount() {
    if (this.props.shouldCheckIsLogged) {
      this.props.checkIsLogged();
    }
  };

  /**
   * @description render
   * @memberOf App
   * @return {Object} JSX HTML Content
   */
  render() {
    const {isLogged} = this.props;
    return (
      <Router>
        <Route render={({location}) => (
          <div>
            <Route path="/" key={'/'} render={props => (<MainDrawer isLogged={isLogged} {...props} />)}/>
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

App.propTypes = propTypes;

export default App;
