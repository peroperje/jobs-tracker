import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

const propTypes = {
  isLogged: PropTypes.bool.isRequired
};

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
   * @description Handle logout. close Drawer and call props function
   */
  handleLogout = () => {
    this.toggleDrawer();
    this.props.handleLogout();
  };

  renderLogged = () => {
    return (
      <div>
        <Link to="/jobs" style={{textDecoration: 'none'}}>
          <MenuItem onTouchTap={this.toggleDrawer}>Jobs</MenuItem>
        </Link>
        <MenuItem onTouchTap={this.handleLogout}>Logout</MenuItem>
      </div>
    );
  };

  renderNonLogged = () => {
    return (
      <div>
        <Link to="/login" style={{textDecoration: 'none'}}>
          <MenuItem onTouchTap={this.toggleDrawer}>Login</MenuItem>
        </Link>
        <Link to="/signup" style={{textDecoration: 'none'}}>
          <MenuItem onTouchTap={this.toggleDrawer}>SignUp</MenuItem>
        </Link>
      </div>
    );
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const {isLogged} = this.props;
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
          <Link to="/about" style={{textDecoration: 'none'}}>
            <MenuItem onTouchTap={this.toggleDrawer}>About me</MenuItem>
          </Link>
          {isLogged && this.renderLogged()}
          {!isLogged && this.renderNonLogged()}
        </Drawer>
      </div>
    );
  }
}
MainDrawer.propTypes = propTypes;

export default MainDrawer;
