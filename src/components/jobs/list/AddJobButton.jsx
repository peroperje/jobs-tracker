/**
 *@namespace jobslist
 */

import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

/**
 * @class AddJobButton
 * @memberOf jobslist.component
 * @extends React.Component
 * @description Render component
 */
class AddJobButton extends Component {

  /**
   * @description render
   * @memberOf jobslist.AddJobButton
   * @return {Object} JSX HTML Content
   */
  render() {
    const style = {
      margin: 0,
      top: 'auto',
      right: 'auto',
      bottom: 30,
      left: 'auto',
      position: 'fixed',
      zIndex: 90,
      textAlign: 'center',
      display: 'inline-block'
    };
    return (
      <FloatingActionButton style={style} onTouchTap={this.props.clickToOpenDialog}>
        <ContentAdd/>
      </FloatingActionButton>
    );
  }
}

export default AddJobButton;
