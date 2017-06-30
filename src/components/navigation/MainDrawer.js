import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

/**
 * @class MainDrawer
 * @extends React.Component
 * @description Render component
 */
class MainDrawer extends Component {

  state = {
    openDrawer: false
  };

  /**
   * @description Toggle Drawer
   */
  toggleDrawer = () => {
    this.setState(prevState => ({openDrawer: !prevState.openDrawer}));
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    return (
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
          <Link to="/" style={{textDecoration: 'none'}}>
            <MenuItem onTouchTap={this.toggleDrawer}>Home</MenuItem>
          </Link>
          <Link to="/jobs" style={{textDecoration: 'none'}}>
            <MenuItem onTouchTap={this.toggleDrawer}>Jobs</MenuItem>
          </Link>
          <Link to="/about" style={{textDecoration: 'none'}}>
            <MenuItem onTouchTap={this.toggleDrawer}>About me</MenuItem>
          </Link>
          <Link to="/login" style={{textDecoration: 'none'}}>
            <MenuItem onTouchTap={this.toggleDrawer}>Login</MenuItem>
          </Link>
          <Link to="/signup" style={{textDecoration: 'none'}}>
            <MenuItem onTouchTap={this.toggleDrawer}>SignUp</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default MainDrawer;
