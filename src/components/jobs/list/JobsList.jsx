//Todo make this simple
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import JobTable from './table/JobsTable';
import JobsTableRow from './table/JobsTableRow';
import FilterLinks from './FilterLinks';
import SearchBar from './SearchBar';
import DialogBox from './DialogBox';
import JobForm from './JobForm';
import AddJobButton from './AddJobButton';

/**
 * @class JobsList
 * @memberOf jobslist
 * @extends React.Component
 * @description Render component
 */
class JobsList extends Component {

  state = {
    openDialog: false,
    job: {},
    search: ''
  };

  componentDidMount() {
    const {jobs,fetchJobs} = this.props;
    if(jobs.length === 0){
      fetchJobs();
    }
  }

  /**
   * @description Handle open dialog click
   * @memberOf jobslist.JobsList
   * @param {Boolean | String} jobID Job ID if open edit form
   */
  handleOpenFormDialog = (jobID = false) => {
    const job = jobID ? this.props.jobs.find(j => j._id === jobID) : {};
    this.setState({openDialog: true, job: job});
  };

  /**
   * @description Handle close dialog
   * @memberOf jobslist.JobsList
   */
  handleCloseFormDialog = () => {
    this.setState({openDialog: false, job: {}});
  };

  /**
   * @description Handle Job Form submit
   * @param {Object} data Job data
   */
  handleJobFormSubmit = (data) => {
    this.props.handleSubmitJobForm(data);
    this.setState({openDialog: false, job: {}});
  };

  /**
   *@description Handle search change
   * @param {String} search search data
   */
  handleSerachChange = (search) => {
    this.setState({search});
  };

  /**
   * @description Handle clear search
   */
  handleClearSearch = () => {
    this.setState({search: ''});
  };

  filterJobsBySearch = () => {
    const {search} = this.state;
    const {jobs} = this.props;
    return jobs.filter((job) => (
      job.title.toUpperCase().indexOf(search.toUpperCase()) !== -1 ||
      job.clientLocation.toUpperCase().indexOf(search.toUpperCase()) !== -1 ||
      job.jobLocation.toUpperCase().indexOf(search.toUpperCase()) !== -1 ||
      job.comment.toUpperCase().indexOf(search.toUpperCase()) !== -1
    ));
  };

  /**
   * @description render
   * @memberOf jobslist.JobsList
   * @return {Object} JSX HTML Content
   */
  render() {
    const paperStyle = {
      margin: 20,
      textAlign: 'center',
      display: 'inline-block'
    };
    const jobsFilteredBySearch = this.filterJobsBySearch();
    const rows = jobsFilteredBySearch.map((job) => (<JobsTableRow
      key={job._id}
      {...job}
      onClickDelete={this.props.onClickDelete}
      onClickArchive={this.props.onClickArchive}
      onClickEdit={this.handleOpenFormDialog}
    />));
    return (
      <Paper style={paperStyle} zDepth={5}>
        <FilterLinks onClickFilter={this.props.onClickFilterLink}/>
        <SearchBar
          search={this.state.search}
          handleSerachChange={this.handleSerachChange}
          handleClearSearch={this.handleClearSearch}
        />
        <DialogBox openDialog={this.state.openDialog} closeDialog={this.handleCloseFormDialog}>
          <JobForm onSubmit={this.handleJobFormSubmit} initialValues={this.state.job}/>
        </DialogBox>
        <JobTable>
          {rows}
        </JobTable>
        <AddJobButton clickToOpenDialog={this.handleOpenFormDialog}/>
      </Paper>
    );
  }
}

JobsList.propTypes = {
  jobs: PropTypes.array.isRequired,
  onClickFilterLink: PropTypes.func.isRequired,
  onClickArchive: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  handleSubmitJobForm: PropTypes.func.isRequired
};

export default JobsList;
