import uniqid from 'uniqid';
import {
  SET_VISIBILITY_FILTER,
  jobsFilter
} from '../jobs.constant';

import * as jobsAction from '../jobs.action';
import {jobs, jobsVisibilityFilter} from '../jobs.reducer';
import initialStore from '../../../store/initialStore';

describe('Jobs Reducer', () => {

  let initState;
  beforeEach(() => {
    initState = initialStore.jobs;
  });

  describe('Fetch Jobs', () => {

    it('Fetch jobs request', () => {
      const action = jobsAction.fetchJobsRequest();
      const state = jobs(initState, action);

      expect(state).toEqual({
        items: initState.items,
        isFetching: true,
        errorFetching: null
      });

    });

    describe('Fecth job success action', () => {
      const beginigState = initialStore.jobs;

      const action = jobsAction.fetchJobsSuccess(beginigState.items);
      const state = jobs({...beginigState, ...{items: []}}, action);

      it('Should has same state as init store ', () => {
        expect(state.items).toEqual(beginigState.items);
      });

      it('isFetching property should has false', () => {
        expect(state.isFetching).toBeFalsy();
      });

      it('errorFetching should be null', () => {
        expect(state.errorFetching).toBeNull();
      });
    });

    describe('Fetch job failure action', () => {

      it('Should has error message', () => {

        const errorMessage = 'oppps';
        const action = jobsAction.fetchJobsFailure(errorMessage);
        const state = jobs(initState, action);

        expect(state.errorFetching).toBe(errorMessage);

      });

    });

  });

  describe('Add New Job', () => {

    describe('Fetch add job request', () => {

      const action = jobsAction.addJobRequest();
      const state = jobs(initState, action);

      it('isFetching should has value true', () => {
        expect(state.isFetching).toBeTruthy();
      });

      it('errorFetching should has value null', () => {
        expect(state.errorFetching).toBeNull();
      });

    });

    describe('Fetch add job success', () => {

      const initJobsState = {
        ...initialStore.jobs,
        ...{isFetching: true}
      };
      const data = initJobsState.items[0];
      const action = jobsAction.addJobRequestSuccess(data);
      const state = jobs(initJobsState, action);

      it('Should add new job', () => {
        expect(state.items.length).toBe(initJobsState.items.length + 1);
      });

      it('isFetching should be false', () => {
        expect(state.isFetching).toBeFalsy();
      });

      it('errorFetching should has value null', () => {
        expect(state.errorFetching).toBeNull();
      });

    });

  });

  describe('Clean Jobs state', () => {
    it('Should clean jobs state ', () => {
      const action = jobsAction.cleanJobsState();
      const state = jobs(initState, action);
      const expextedState = {...initState, ...{items: []}};
      expect(state).toEqual(expextedState);
    });

  });

  describe('Update job', () => {

    it('Update job request ', () => {
      const action = jobsAction.updateJobRequest(initState.items[0]._id);
      const state = jobs(initState, action);

      expect(state).toEqual(expect.objectContaining({
        isFetching: true,
        errorFetching: null
      }));
    });

    it('Update job request success', () => {

      const {_id, ...data} = initState.items[0];
      const resivedData = {...data, ...{title: 'Must Be changed'}};
      const action = jobsAction.updateJobRequestSuccess(_id, resivedData);
      const state = jobs(initState, action);

      expect(state.items[0]).toEqual(expect.objectContaining(resivedData));

    });

    it('Update job request failure', () => {
      const error = 'Oppps';
      const action = jobsAction.updateJobRequestFailure(error);
      const state = jobs(initState, action);

      expect(state).toEqual(expect.objectContaining({
        errorFetching: error,
        isFetching: false
      }));
    });

  });

  describe('Delete job', () => {

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
