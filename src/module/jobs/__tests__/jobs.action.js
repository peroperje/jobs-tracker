import * as job from '../jobs.action';
import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  ADD_JOB_REQUEST,
  ADD_JOB_REQUEST_SUCCESS,
  ADD_JOB_REQUEST_FAILURE,
  UPDATE_JOB_REQUEST,
  UPDATE_JOB_REQUEST_SUCCESS,
  UPDATE_JOB_REQUEST_FAILURE,
  DELETE_JOB_REQUEST,
  DELETE_JOB_REQUEST_SUCCESS,
  DELETE_JOB_REQUEST_FAILURE,
  SET_VISIBILITY_FILTER,
  CLEAR_JOBS_STATE

} from '../jobs.constant';
import initialState from '../../../store/initialStore';

describe('Jobs Actions', () => {

  let state;
  beforeEach(() => {
    state = initialState.jobs.items;
  });

  describe('Fetch Jobs', () => {

    it('Should create an action for fetch jobs', () => {

      const action = job.fetchJobsRequest();
      const expectedAction = {type: FETCH_JOBS_REQUEST};

      expect(action).toEqual(expectedAction);

    });

    it('Should create an action for successful fetch jobs', () => {

      const data = [{_id: '546546546'}, {_id: '545564'}];
      const action = job.fetchJobsSuccess(data);
      const expetedAction = {
        type: FETCH_JOBS_SUCCESS,
        payload: data
      };

      expect(action).toEqual(expetedAction);

    });

    it('Should create an action for failed fetch jobs', () => {

      const error = 'Something is wrong';
      const action = job.fetchJobsFailure(error);
      const expectedAction = {
        type: FETCH_JOBS_FAILURE,
        payload: {
          errorFetching: error
        }
      };

      expect(action).toEqual(expectedAction);

    });

  });

  describe('Add Job Request', () => {

    it('Should create action for request', () => {
      const data = {_id: '54566'};
      const action = job.addJobRequest(data);

      expect(action).toEqual({
        type: ADD_JOB_REQUEST,
        payload: data
      });

    });

    it('Should create action for fetch job success', () => {

      const data = {
        _id: '5645645465'
      };
      const action = job.addJobRequestSuccess(data);

      expect(action).toEqual({
        type: ADD_JOB_REQUEST_SUCCESS,
        payload: data
      });

    });

    it('Should create action for fetch job failure', () => {

      const errMessage = 'Opps';
      const action = job.addJobRequestFailure(errMessage);

      expect(action).toEqual({
        type: ADD_JOB_REQUEST_FAILURE,
        payload: {
          errorFetching: errMessage
        }
      });
    });

  });

  describe('Update Job', () => {

    it('Should be defined action creator for update job request', () => {

      expect(job.updateJobRequest()).toBeDefined();

    });

    it('Should create action for update job request', () => {

      const {_id, ...data} = state[0];
      const action = job.updateJobRequest(_id, data);
      const expectedAction = {
        type: UPDATE_JOB_REQUEST,
        payload: {
          _id: _id,
          data
        }
      };

      expect(action).toEqual(expectedAction);

    });

    it('Should be defined action creator update job request success', () => {
      expect(job.updateJobRequestSuccess).toBeDefined();
    });

    it('Should create action for update job request success', () => {

      const {_id, data} = state[0];
      const action = job.updateJobRequestSuccess(_id, data);
      const expectedAction = {
        type: UPDATE_JOB_REQUEST_SUCCESS,
        payload: {
          _id,
          data
        }

      };

      expect(action).toEqual(expectedAction);

    });

    it('Should be defined action update job request failure', () => {
      expect(job.updateJobRequestFailure).toBeDefined();
    });

    it('Should create action for update job request failure', () => {

      const err = 'Opps';
      const action = job.updateJobRequestFailure(err);
      const expectedAction = {
        type: UPDATE_JOB_REQUEST_FAILURE,
        payload: {
          errorFetching: err
        }
      };

      expect(action).toEqual(expectedAction);

    });

  });
  describe('Delete Job', () => {


    it('Should create new action for deleteJobRequest', () => {
      const {_id} = state[0]._id;
      const action = job.deleteJobRequest(_id);
      expect(action).toEqual({
        type: DELETE_JOB_REQUEST,
        payload: {
          _id
        }
      });
    });

    it('Should create action for delete job request success', () => {
      const {_id} = state[0];
      const action = job.deleteJobRequestSuccess(_id);
      expect(action).toEqual({
        type: DELETE_JOB_REQUEST_SUCCESS,
        payload: {_id}
      });
    });

    it('Should create action for delete job request failure', () => {
      const err = 'Opps';
      const action = job.deleteJobRequestFailure(err);
      expect(action).toEqual({
        type: DELETE_JOB_REQUEST_FAILURE,
        payload: {errorFetching: err}
      })
    });
  });

  it('Should create action for visibility filter ', () => {
    const action = job.setVisibilityFilter(true);
    const {type, payload: {jobsVisibilityFilter}} = action;
    expect(type).toBe(SET_VISIBILITY_FILTER);
    expect(jobsVisibilityFilter).toBe(true);
  });

  describe('Clean Jobs State', () => {

    it('Shouldl be defined', () => {

      expect(job.cleanJobsState).toBeDefined();

    });

    it('Should create action', () => {

      const action = job.cleanJobsState();
      expect(action).toEqual({type: CLEAR_JOBS_STATE});

    });

  });


});
