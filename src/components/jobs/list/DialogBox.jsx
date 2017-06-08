/**
 *@namespace jobslist
 */

import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';

/**
 * @class DialogBox
 * @memberOf jobslist.component
 * @extends React.Component
 * @description Render component
 */
class DialogBox extends Component {

  /**
   * @description render
   * @memberOf jobslist.DialogBox
   * @return {Object} JSX HTML Content
   */
  render() {
    return (
      <Dialog
        title="Dialog With Custom Width"
        open={this.props.openDialog}
        autoScrollBodyContent={true}
        modal={false}
        onRequestClose={this.props.closeDialog}
      >
        {this.props.children}
      </Dialog>
    );
  }
}

export default DialogBox;
