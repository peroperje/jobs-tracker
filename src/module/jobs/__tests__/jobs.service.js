jest.mock('../../../service/request');

import {getJobs, addJob, updateJob} from '../jobs.service';

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

  describe('Update job', () => {

    it('Shoul be defined service updateJob', () => {

      expect(updateJob).toBeDefined();

    });

    it('Should makes app call for updateJob', () => {

      const {_id, ...data} = {
        _id: '564546',
        title: 'React',
        URL: 'http://google.com',
        clientLocation: 'Serbia, Belgrade',
        jobLocation: 'Serbia, Belgrade',
        comment: 'Some comment',
        active: true
      };
      const expectedRequest = {
        url: `jobs/${_id}`,
        method: 'PATCH',
        data
      };

      updateJob(_id, data).then(({response}) => {
        expect(response).toEqual(expectedRequest);
      });

    });

  });

});
