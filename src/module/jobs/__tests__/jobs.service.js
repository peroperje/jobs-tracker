jest.mock('../../../service/request');

import {getJobs} from '../jobs.service';

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

});
