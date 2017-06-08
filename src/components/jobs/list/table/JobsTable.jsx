/**
 *@namespace jobslist
 */

import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';

/**
 * @class JobTable
 * @memberOf jobslist
 * @extends React.Component
 * @description This component render action action
 */
class JobTable extends Component {

  /**
   * @description render
   * @memberOf jobslist.JobTable
   * @return {Object} JSX HTML Content
   */
  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow >
            <TableHeaderColumn>Job Title</TableHeaderColumn>
            <TableHeaderColumn>Client Location</TableHeaderColumn>
            <TableHeaderColumn>Job Location</TableHeaderColumn>
            <TableHeaderColumn>Comment</TableHeaderColumn>
            <TableHeaderColumn />
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.children}
        </TableBody>);
      </Table>
    );
  }
}

export default JobTable;
