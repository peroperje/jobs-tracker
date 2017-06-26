/**
 * @namespace App
 */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// component
import JobsListContainer from '../jobs/list/JobsListContainer';
import Home from '../static/Home';
import About from '../static/About';


/**
 * @class App
 * @memberOf App
 * @extends React.Component
 * @description Render FilterLinks
 */
class App extends Component {
  state = {
    openDrawer: false
  };

  toggleDrawer = () => {
    this.setState(prevState => ({openDrawer: !prevState.openDrawer}));
  };

  /**
   * @description render
   * @memberOf App
   * @return {Object} JSX HTML Content
   */
  render() {
    return (
      <Router>
        <div>
          <AppBar
            title="Jobs Tracker"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.toggleDrawer}
          />
          <Drawer
            docked={false}
            open={this.state.openDrawer}
            onRequestChange={this.toggleDrawer}
          >
            <Link to="/"><MenuItem onTouchTap={this.toggleDrawer}>Home</MenuItem></Link>
            <Link to="/jobs"><MenuItem onTouchTap={this.toggleDrawer}>Jobs Tracking</MenuItem></Link>
            <Link to="/about"><MenuItem onTouchTap={this.toggleDrawer}>Jobs Tracking</MenuItem></Link>
          </Drawer>

          <Route exact path="/" component={Home}/>
          <Route path="/jobs" component={JobsListContainer}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
