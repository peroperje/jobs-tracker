import * as job from '../jobs.action';
import {
  FETCH_ADD_JOB_SUCCESS,
  UPDATE_JOB,
  DELETE_JOB,
  CHANGE_STATUS,
  SET_VISIBILITY_FILTER,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE
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

  it('Should create new Actions for addJob ', () => {

    const action = job.addJob(state[0]);
    expect(action.type).toBe(FETCH_ADD_JOB_SUCCESS);
    expect(action.payload).toEqual(state[0]);
  });

  it('Should create new action for updateJob', () => {
    const action = job.updateJob(state[1]._id, state[0]);
    const {type, payload: {_id, data}} = action;
    expect(type).toBe(UPDATE_JOB);
    expect(_id).toBe(state[1]._id);
    expect(data).toEqual(state[0]);
  });

  it('Should create action for changeStatus', () => {
    const action = job.changeStatus(state[0]._id);
    const {type, payload: {_id}} = action;
    expect(type).toBe(CHANGE_STATUS);
    expect(_id).toBe(state[0]._id);
  });

  it('Should create new action for deleteJob', () => {
    const action = job.deleteJob(state[0]._id);
    const {type, payload: {_id}} = action;
    expect(type).toBe(DELETE_JOB);
    expect(_id).toBe(state[0]._id);

  });

  it('Should create action for visibility filter ', () => {
    const action = job.setVisibilityFilter(true);
    const {type, payload: {jobsVisibilityFilter}} = action;
    expect(type).toBe(SET_VISIBILITY_FILTER);
    expect(jobsVisibilityFilter).toBe(true);
  });


});
