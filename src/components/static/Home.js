import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

import './Home.css';

/**
 * @class Home
 * @extends React.Component
 * @description Render component
 */
class Home extends Component {

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    return (
      <div className="Home">
        <h3>A simple application for tracking your activity in a job quest </h3>
        <Link to="/login"><RaisedButton label="Get Started" secondary={true} /></Link>
      </div>
    );
  }
}

export default Home;

