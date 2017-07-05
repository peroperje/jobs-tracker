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
    const action = job.updateJob(state[1].id, state[0]);
    const {type, payload: {id, data}} = action;
    expect(type).toBe(UPDATE_JOB);
    expect(id).toBe(state[1].id);
    expect(data).toEqual(state[0]);
  });

  test('Should create action for changeStatus', () => {
    const action = job.changeStatus(state[0].id);
    const {type, payload: {id}} = action;
    expect(type).toBe(CHANGE_STATUS);
    expect(id).toBe(state[0].id);
  });

  test('Should create new action for deleteJob', () => {
    const action = job.deleteJob(state[0].id);
    const {type, payload: {id}} = action;
    expect(type).toBe(DELETE_JOB);
    expect(id).toBe(state[0].id);

  });

  test('Should create action for visibility filter ', () => {
    const action = job.setVisibilityFilter(true);
    const {type, payload: {jobsVisibilityFilter}} = action;
    expect(type).toBe(SET_VISIBILITY_FILTER);
    expect(jobsVisibilityFilter).toBe(true);
  });


});
