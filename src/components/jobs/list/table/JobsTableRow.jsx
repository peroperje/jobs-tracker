/**
 *@namespace jobslist
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {TableRow, TableRowColumn} from 'material-ui/Table';
import Archive from 'material-ui/svg-icons/content/archive';
import Unarchive from 'material-ui/svg-icons/content/unarchive';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import {red500, red200, green500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';

/**
 * @description PropType for JobsTableRow
 * @type {Object}
 */
const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
  clientLocation: PropTypes.string.isRequired,
  jobLocation: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickArchive: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired
};

/**
 * @class JobsTableRow
 * @memberOf jobslist.component
 * @extends React.Component
 * @description Render component
 */
class JobsTableRow extends Component {

  /**
   * @description JobsTableRow Component
   * @memberOf jobslist.JobsTableRow
   * @param {Object} props Component properties
   */
  constructor(props) {
    super(props);
    this.handleClickArchive = this.handleClickArchive.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  /**
   * @description Handles click of (un)archive icon
   * @memberOf jobslist.JobsTableRow
   */
  handleClickArchive() {
    this.props.onClickArchive(this.props._id);
  }

  /**
   * @description Handles click on delete
   * @memberOf jobslist.JobsTableRow
   */
  handleClickDelete() {
    this.props.onClickDelete(this.props._id);
  }

  /**
   * @description Handler for click edit
   * @memberOf jobslist.JobsTableRow
   */
  handleClickEdit() {
    this.props.onClickEdit(this.props._id);
  }

  /**
   * @description Render Archive Icon Button
   * @return {XML} JSX HTML Content
   */
  renderArchiveIcon() {
    const icon = this.props.active ? <Archive color={green500}/> : <Unarchive color={red200}/>;
    return (
      <IconButton onTouchTap={this.handleClickArchive}>
        {icon}
      </IconButton>
    );
  }

  /**
   * @description render
   * @memberOf jobslist.JobsTableRow
   * @return {Object} JSX HTML Content
   */
  render() {
    const {id, title, URL, clientLocation, jobLocation, comment, active} = this.props;
    return (
      <TableRow key={id} style={active ? {} : {opacity: 0.3}}>
        <TableRowColumn><a href={URL} target="_banko">{title}</a></TableRowColumn>
        <TableRowColumn>{clientLocation}</TableRowColumn>
        <TableRowColumn>{jobLocation}</TableRowColumn>
        <TableRowColumn>{comment}</TableRowColumn>
        <TableRowColumn>
          {this.renderArchiveIcon()}
          <IconButton onTouchTap={this.handleClickEdit}>
            <ModeEdit color={green500}/>
          </IconButton>
          <IconButton onTouchTap={this.handleClickDelete}>
            <DeleteForever color={red500}/>
          </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}

JobsTableRow.propTypes = propTypes;

export default JobsTableRow;
