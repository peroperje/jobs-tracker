import uniqid from 'uniqid';
import {
  ADD_JOB,
  UPDATE_JOB,
  DELETE_JOB,
  CHANGE_STATUS,
  SET_VISIBILITY_FILTER,
  jobsFilter
} from '../jobs.constant';
import {deleteJob} from '../jobs.action';
import {jobs, jobsVisibilityFilter} from '../jobs.reducer';
import initialStore from '../../../store/initialStore';

describe('Jobs Reducer', () => {

  let state;
  beforeEach(() => {
    state = initialStore.jobs;
  });

  it('Should add new job', () => {

    const jobToAdd = Object.assign({}, state[0], {
      id: uniqid(),
      title: 'Job added by testing'
    });
    const action = {
      type: ADD_JOB,
      payload: jobToAdd
    };
    const newState = jobs(state, action);
    expect(newState.items).toContain(action.payload);

  });

  it('Should update job data by id', () => {

    const {id, ...data} = state.items[0];
    const {id: idForUpdate} = state.items[2];
    const action = {
      type: UPDATE_JOB,
      payload: {
        id: idForUpdate,
        data: data
      }
    };
    const newState = jobs(state, action);

    expect(newState.items[2].id).not.toEqual(id);
    expect(newState.items[2]).toMatchObject(data);

  });

  it('Should delete job', () => {

    const {id} = state.items[0]
    const action = deleteJob(id);
    const newState = jobs(state, action);

    expect(newState.items.length).toBe(2);

  });

  it('Should change job status', () => {

    const action = {
      type: CHANGE_STATUS,
      payload: {
        id: state.items[0].id
      }
    };
    const newState = jobs(state, action);

    expect(newState.items[0].active).toBe(!state.items[0].active);

  });


});

describe('Visibility filter', () => {
  it('Should change visibility filter', () => {
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
