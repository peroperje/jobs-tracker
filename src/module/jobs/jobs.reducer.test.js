import uniqid from 'uniqid';
import {ADD_JOB, UPDATE_JOB, DELETE_JOB, CHANGE_STATUS, SET_VISIBILITY_FILTER, jobsFilter} from './jobs.constant';
import {jobs, jobsVisibilityFilter} from './jobs.reducer';
import initialStore from './../../store/initialStore';

describe('Jobs Reducer', () => {
  let state;
  beforeEach(() => {
    state = initialStore.jobs;
  });

  test('Should add new job', () => {
    const jobToAdd = Object.assign({}, state[0], {
      id: uniqid(),
      title: 'Job added by testing'
    });
    const action = {
      type: ADD_JOB,
      payload: jobToAdd
    };
    const newState = jobs(state, action);
    expect(newState).toContain(action.payload);
  });

  test('Should update job data by id', () => {
    const {id, ...data} = state[0];
    const {id: idForUpdate} = state[2];
    const action = {
      type: UPDATE_JOB,
      payload: {
        id: idForUpdate,
        data: data
      }
    };
    const newState = jobs(state, action);
    expect(newState[2].id).not.toEqual(id);
    expect(newState[2]).toMatchObject(data);
  });

  test('Should delete job', () => {
    const jobForDelete = state[2];
    const action = {
      type: DELETE_JOB,
      payload: {
        id: jobForDelete.id
      }
    };
    const newState = jobs(state, action);
    expect(newState).not.toContainEqual(jobForDelete);
    expect(newState.length).toBe(state.length - 1);
  });

  test('Should change job status', () => {
    const action = {
      type: CHANGE_STATUS,
      payload: {
        id: state[0].id
      }
    };
    const newState = jobs(state, action);
    expect(newState[0].active).toBe(!state[0].active);
  });


});

describe('Visibility filter', () => {
  test('Should change visibility filter', () => {
    const action = {
      type: SET_VISIBILITY_FILTER,
      payload: {
        jobsVisibilityFilter: jobsFilter.SHOW_ACTIVE
      }
    };
    const filter = jobsVisibilityFilter(jobsFilter.SHOW_ALL, action);
    expect(filter).toBe(jobsFilter.SHOW_ACTIVE);
  });
});
