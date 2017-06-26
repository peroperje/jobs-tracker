import React, {Component, Children} from 'react';
import {CSSTransitionGroup} from 'react-transition-group';

import './Slider.css';

/**
 * @class Slider
 * @extends React.Component
 * @description Render component
 */
class Slider extends Component {

  state = {
    currentItem: 0
  };

  /**
   * @description componentDidMount for Slider
   */
  componentDidMount() {
    this.startInterval();
  }

  /**
   * @description Start interval
   */
  startInterval() {
    const totalItem = Children.count(this.props.children);
    this.interval = setInterval(() => {
      this.setState(prevState => {
        let nextItem = prevState.currentItem + 1;
        if (nextItem === totalItem) {
          nextItem = 0;
        }
        return {currentItem: nextItem};
      });
    }, 2500);
  }

  /**
   * @description Clear Interval
   */
  clearInterval() {
    clearInterval(this.interval);
  }

  /**
   * @description componentWillUnmount for Slider.
   */
  componentWillUnmount() {
    this.clearInterval();
  }

  /**
   * @description handle On Mouse Enter
   */
  handleOnMouseEnter = () => {
    this.clearInterval();
  };

  /**
   * @description Handle on mouse leave
   */
  handleOnMouseLeave = () => {
    this.startInterval();
  };


  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const arr = Children.toArray(this.props.children);
    return (
      <div
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <CSSTransitionGroup transitionName="carousel" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
          {arr[this.state.currentItem]}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Slider;
