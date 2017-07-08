jest.mock('../../../store/jwtStorage');

import {call, put, takeEvery} from 'redux-saga/effects';

import {FETCH_JOBS_REQUEST, ADD_JOB_REQUEST} from '../jobs.constant';
import {getJobs, addJob} from '../jobs.service';
import {
  fetchJobsSuccess,
  fetchJobsFailure,
  fetchAddJobSuccess,
  fetchAddJobFailure
} from '../jobs.action';
import {jobRequest, addJobRequest, watchJobs} from '../jobs.saga';

describe('Jobs Saga', () => {

  describe('Fetch Jobs', () => {

    describe('Fetch jobs watcher', () => {

      const genWatcher = watchJobs();

      it('Should call jobRequest on fetch jobs request action', () => {
        expect(genWatcher.next().value).toEqual(takeEvery(FETCH_JOBS_REQUEST, jobRequest));
      });

      it('Should call addJobRequest', () => {
        expect(genWatcher.next().value).toEqual(takeEvery(ADD_JOB_REQUEST, addJobRequest));
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

        const gen = jobRequest();
        const nextPoint = gen.next(res).value;
        const callResult = call(getJobs);

        expect(nextPoint).toEqual(callResult);

      });

      it('Should emit fetch jobs success action', () => {

        const gen = jobRequest();
        gen.next(res);
        const nextPoint = gen.next(res).value;
        const putResult = put(fetchJobsSuccess(res.response.data));

        expect(nextPoint).toEqual(putResult);

      });

      it('Should emit fetch jobs failure action ', () => {

        const gen = jobRequest();
        gen.next(err);

        expect(gen.next(err).value).toEqual(put(fetchJobsFailure(err.error.data)));

      });

    });

    describe('Fetch add job worker', () => {

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
          expect(gen.next(res).value).toEqual(put(fetchAddJobSuccess(res.response.data)));
        });

      });

      describe('Failed', () => {
        const gen = addJobRequest(action);
        const err = {
          error: {
            data: {
              _id: '45464564',
              title: 'Some title'
            }
          }
        };
        gen.next(err);
        expect(gen.next(err).value).toEqual(put(fetchAddJobFailure(err.error.data)));

      });
    });

  });

});
