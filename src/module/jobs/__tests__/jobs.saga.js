jest.mock('../../../store/jwtStorage');

import {call, put, takeEvery} from 'redux-saga/effects';

import {FETCH_JOBS_REQUEST} from '../jobs.constant';
import {getJobs} from '../jobs.service';
import {fetchJobsSuccess, fetchJobsFailure} from '../jobs.action';
import {jobRequest, watchJobs} from '../jobs.saga';

describe('Jobs Saga', () => {

  describe('Fetch Jobs', () => {

    describe('Fetch jobs watcher', () => {

      const genWatcher = watchJobs();

      it('Should call jobRequest on fetch jobs request action', () => {
        expect(genWatcher.next().value).toEqual(takeEvery(FETCH_JOBS_REQUEST, jobRequest));
      });

    });

    describe('Fetch jobs worker', () => {

      const res = {
        response: {
          data: {
            jobs: [{_id: '546464'}, {_id: '11546464'}]
          }
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
        const putResult = put(fetchJobsSuccess(res.response.data.jobs));

        expect(nextPoint).toEqual(putResult);

      });

      it('Should emit fetch jobs failure action ', () => {

        const gen = jobRequest();
        gen.next(err);

        expect(gen.next(err).value).toEqual(put(fetchJobsFailure(err.error.data)));

      });

    });

  });

});
