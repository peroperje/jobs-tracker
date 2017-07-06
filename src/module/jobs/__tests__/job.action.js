import * as job from '../jobs.action';
import {ADD_JOB, UPDATE_JOB, DELETE_JOB, CHANGE_STATUS, SET_VISIBILITY_FILTER} from '../jobs.constant';
import initialState from '../../../store/initialStore';

describe('Job Atction', () => {
  let state;
  beforeEach(() => {
    state = initialState.jobs.items;
  });
  test('Should create new Actions for addJob ', () => {

    const action = job.addJob(state[0]);
    expect(action.type).toBe(ADD_JOB);
    expect(action.payload).toEqual(state[0]);
  });

  test('Should create new action for updateJob', () => {
    const action = job.updateJob(state[1]._id, state[0]);
    const {type, payload: {_id, data}} = action;
    expect(type).toBe(UPDATE_JOB);
    expect(_id).toBe(state[1]._id);
    expect(data).toEqual(state[0]);
  });

  test('Should create action for changeStatus', () => {
    const action = job.changeStatus(state[0]._id);
    const {type, payload: {_id}} = action;
    expect(type).toBe(CHANGE_STATUS);
    expect(_id).toBe(state[0]._id);
  });

  test('Should create new action for deleteJob', () => {
    const action = job.deleteJob(state[0]._id);
    const {type, payload: {_id}} = action;
    expect(type).toBe(DELETE_JOB);
    expect(_id).toBe(state[0]._id);

  });

  test('Should create action for visibility filter ', () => {
    const action = job.setVisibilityFilter(true);
    const {type, payload: {jobsVisibilityFilter}} = action;
    expect(type).toBe(SET_VISIBILITY_FILTER);
    expect(jobsVisibilityFilter).toBe(true);
  });


});
