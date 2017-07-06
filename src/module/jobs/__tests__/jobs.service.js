jest.mock('../../../service/request');

import {getJobs, addJob} from '../jobs.service';

describe('Jobs Service', () => {

  describe('getJobs', () => {

    it('Should be same request data', () => {

      const expectedRequest = {
        url: 'jobs/',
        method: 'GET'
      };

      getJobs().then(({response}) => {
        expect(response).toEqual(expectedRequest);
      });

    });

  });

  describe('addJob', () => {

    it('Should make add job api call', () => {


      const data = {_id: '4565456465'};
      const expected = {
        response: {
          url: 'jobs',
          method: 'POST',
          data
        }
      };
      addJob(data).then((res) => {
        expect(res).toEqual(expected);
      });

    });

  });

});
