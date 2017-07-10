//TODO refactoring JobList container


import {connect} from 'react-redux';
import uniqid from 'uniqid';

import {
  fetchJobsRequest,
  addJobRequest,
  setVisibilityFilter,
  changeStatus,
  deleteJob,
  updateJobRequest
} from './../../../module/jobs/jobs.action';
import {jobsFilter} from './../../../module/jobs/jobs.constant';
import JobsList from './JobsList';

/**
 * @description Filter jobs state by jobVisibilityFilter
 * @memberOf jobslist
 * @param {Array} jobs Objects of jobs list
 * @param {String} jobVisibilityFilter filter value
 * @return {Array} filtered list of jobs
 */
const filterByStatus = (jobs, jobVisibilityFilter) => {
  switch (jobVisibilityFilter) {
    case jobsFilter.SHOW_ALL:
      return jobs;
    case jobsFilter.SHOW_ACTIVE:
      return jobs.filter(job => job.active === true);
    case jobsFilter.SHOW_ARHIVED:
      return jobs.filter(job => job.active === false);
    default:
      return jobs;

  }
};


/**
 * @description Map state to property
 * @function mapStateToPops
 * @memberOf jobslist
 * @param {Object} state The app state
 * @param {Object} ownProps The Component JobListContainer props
 * @return {Array} Filtered jobs
 */
const mapStateToPops = (state, ownProps) => {

  return {
  jobs: filterByStatus(state.jobs.items, state.jobsVisibilityFilter)
}};

/**
 * @description Map Dispatch to props
 * @param {Function} dispatch redux dispatch fn
 * @param {Object} ownProps Object of component props
 * @return {Object} mapped dispatched props
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickFilterLink: (filter) => {
    dispatch(setVisibilityFilter(filter));
  },
  onClickArchive: (_id,data) => {
    dispatch(updateJobRequest(_id, data));
  },
  onClickDelete: (id) => {
    dispatch(deleteJob(id));
  },
  fetchJobs: () => {
    dispatch(fetchJobsRequest());
  },
  handleSubmitJobForm: (jobData) => {
    if (!jobData._id) {
      dispatch(addJobRequest(jobData));
    } else {
      const {_id, ...data} = jobData;
      dispatch(updateJobRequest(_id, data));
    }
  }
});

export default connect(mapStateToPops, mapDispatchToProps)(JobsList);
