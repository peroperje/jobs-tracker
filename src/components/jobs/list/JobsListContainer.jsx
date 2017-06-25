/**
 *@namespace jobslist
 */


import {connect} from 'react-redux';
import uniqid from 'uniqid';

import {setVisibilityFilter, changeStatus, deleteJob, addJob, updateJob} from './../../../module/jobs/jobs.action';
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
const mapStateToPops = (state, ownProps) => ({
  jobs: filterByStatus(state.jobs, state.jobsVisibilityFilter)
});

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
  onClickArchive: (id) => {
    dispatch(changeStatus(id));
  },
  onClickDelete: (id) => {
    dispatch(deleteJob(id));
  },
  handleSubmitJobForm: (jobData) => {
    if (!jobData.id) {
      jobData.id = uniqid();
      jobData.active = true;
      dispatch(addJob(jobData));
    } else {
      const {id, ...data} = jobData;
      dispatch(updateJob(id, data));
    }
  }
});

export default connect(mapStateToPops, mapDispatchToProps)(JobsList);
