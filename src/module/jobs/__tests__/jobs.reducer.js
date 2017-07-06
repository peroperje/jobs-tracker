import uniqid from 'uniqid';
import {
  ADD_JOB,
  UPDATE_JOB,
  DELETE_JOB,
  CHANGE_STATUS,
  SET_VISIBILITY_FILTER,
  jobsFilter
} from '../jobs.constant';
import {deleteJob, fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure} from '../jobs.action';
import {jobs, jobsVisibilityFilter} from '../jobs.reducer';
import initialStore from '../../../store/initialStore';

describe('Jobs Reducer', () => {

  let initState;
  beforeEach(() => {
    initState = initialStore.jobs;
  });

  describe('Fetch Jobs', () => {

    it('Fetch jobs request', () => {
      const action = fetchJobsRequest();
      const state = jobs(initState, action);

      expect(state).toEqual({
        items: initState.items,
        isFetching: true,
        errorFetching: null
      });

    });

    describe('Fecth job success action', () => {
      const beginigState = initialStore.jobs;
      const action = fetchJobsSuccess(beginigState.items);
      const state = jobs(beginigState, action);

      it('Should has same state as init store ', () => {
        expect(state).toEqual(beginigState);
      });

      it('isFetching property should has false', () => {
        expect(state.isFetching).toBeFalsy();
      });

      it('errorFetching should be null', () => {
        expect(state.errorFetching).toBeNull();
      });
    });

  });

  it('Should add new job', () => {

    const jobToAdd = Object.assign({}, initState[0], {
      _id: uniqid(),
      title: 'Job added by testing'
    });
    const action = {
      type: ADD_JOB,
      payload: jobToAdd
    };
    const newState = jobs(initState, action);
    expect(newState.items).toContain(action.payload);

  });

  it('Should update job data by _id', () => {

    const {_id, ...data} = initState.items[0];
    const {_id: idForUpdate} = initState.items[2];
    const action = {
      type: UPDATE_JOB,
      payload: {
        _id: idForUpdate,
        data: data
      }
    };
    const newState = jobs(initState, action);

    expect(newState.items[2]._id).not.toEqual(_id);
    expect(newState.items[2]).toMatchObject(data);

  });

  it('Should delete job', () => {

    const {_id} = initState.items[0];
    const action = deleteJob(_id);
    const newState = jobs(initState, action);

    expect(newState.items.length).toBe(2);

  });

  it('Should change job status', () => {

    const action = {
      type: CHANGE_STATUS,
      payload: {
        _id: initState.items[0]._id
      }
    };
    const newState = jobs(initState, action);

    expect(newState.items[0].active).toBe(!initState.items[0].active);

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
