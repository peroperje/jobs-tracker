jest.mock('../../../store/jwtStorage');

import {call, put, takeEvery} from 'redux-saga/effects';

import {
  FETCH_JOBS_REQUEST,
  ADD_JOB_REQUEST,
  UPDATE_JOB_REQUEST,
  DELETE_JOB_REQUEST
} from '../jobs.constant';
import {getJobs, addJob, updateJob} from '../jobs.service';
import {
  fetchJobsSuccess,
  fetchJobsFailure,
  addJobRequestSuccess,
  addJobRequestFailure,
  updateJobRequest as updateJobRequestAction,
  updateJobRequestSuccess,
  updateJobRequestFailure
} from '../jobs.action';
import {jobsRequest, addJobRequest, updateJobRequest, deleteJobRequest, watchJobs} from '../jobs.saga';

import initialStore from '../../../store/initialStore';

describe('Jobs Saga', () => {

  describe('Jobs watcher', () => {

    const genWatcher = watchJobs();

    it('Should call jobsRequest on fetch jobs request action', () => {
      expect(genWatcher.next().value).toEqual(takeEvery(FETCH_JOBS_REQUEST, jobsRequest));
    });

    it('Should call addJobRequest', () => {
      expect(genWatcher.next().value).toEqual(takeEvery(ADD_JOB_REQUEST, addJobRequest));
    });

    it('Should call updateJobRequest', () => {
      expect(genWatcher.next().value).toEqual(takeEvery(UPDATE_JOB_REQUEST, updateJobRequest));
    });

    xit('Should call deleteJobRequest', () => {
      expect(genWatcher.next().value).toEqual(takeEvery(DELETE_JOB_REQUEST,deleteJobRequest));
    });

  });

  describe('Fetch jobs worker', () => {

    const res = {
      response: {
        data: [{_id: '546464'}, {_id: '11546464'}]
      }
    };
    const err = {
      error: {
        data: 'opsss'
      }
    };


    it('Should call getJobs request', () => {

      const gen = jobsRequest();
      const nextPoint = gen.next(res).value;
      const callResult = call(getJobs);

      expect(nextPoint).toEqual(callResult);

    });

    it('Should emit fetch jobs success action', () => {

      const gen = jobsRequest();
      gen.next(res);
      const nextPoint = gen.next(res).value;
      const putResult = put(fetchJobsSuccess(res.response.data));

      expect(nextPoint).toEqual(putResult);

    });

    it('Should emit fetch jobs failure action ', () => {

      const gen = jobsRequest();
      gen.next(err);

      expect(gen.next(err).value).toEqual(put(fetchJobsFailure(err.error.data)));

    });

  });

  describe('Add job worker', () => {

    const action = {payload: {title: 'Some title'}};

    describe('Successful', () => {

      const gen = addJobRequest(action);
      const res = {
        response: {
          data: {
            _id: '45464564',
            title: 'Some title'
          }
        }
      };

      it('Should call add job app', () => {
        expect(gen.next(res).value).toEqual(call(addJob, action.payload));
      });

      it('Should emit success action', () => {
        expect(gen.next(res).value).toEqual(put(addJobRequestSuccess(res.response.data)));
      });

    });

    describe('Failed', () => {
      const gen = addJobRequest(action);
      const errMessage = 'Opps';
      const err = {
        error: errMessage
      };
      gen.next(err);
      expect(gen.next(err).value).toEqual(put(addJobRequestFailure(err.error.data)));

    });
  });

  describe('Update job worker', () => {

    const {_id, ...data} = initialStore.jobs.items[0];
    const action = updateJobRequestAction(_id, data);

    describe('App call success', () => {

      const gen = updateJobRequest(action);

      it('Should make api call', () => {
        expect(gen.next([_id, data]).value).toEqual(call(updateJob, _id, data));
      });

      it('Should emit success action', () => {

        const res = {
          response: {
            data: initialStore.jobs.items[0]
          }
        };
        const {_id, ...data} = res.response.data;
        const nextSaga = gen.next(res).value;

        expect(nextSaga).toEqual(put(updateJobRequestSuccess(_id, data)));

      });
    });

    describe('App call failed', () => {

      const gen = updateJobRequest(action);
      const err = 'Opps';
      const res = {error: {data: err}};
      gen.next(res);
      const nextSaga = gen.next(res).value;

      expect(nextSaga).toEqual(put(updateJobRequestFailure(err)));

    });
  });

});
