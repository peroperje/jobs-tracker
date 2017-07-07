import * as jobsConstants from '../jobs.constant';

describe('Jobs Constant', () => {

  describe('Fetch jons', () => {

    it('Should has be defined FETCH_JOBS_REQUEST ', () => {
      expect(jobsConstants.FETCH_JOBS_REQUEST).toBeDefined();
    });

    it('Should has be defined FETCH_JOBS_SUCCESS', () => {
      expect(jobsConstants.FETCH_JOBS_SUCCESS).toBeDefined();
    });

    it('Should has be defined FETCH_JOBS_FAILURE', () => {
      expect(jobsConstants.FETCH_JOBS_FAILURE).toBeDefined();
    });

    it('Should has be defined FETCH_ADD_JOB_REQUEST', () => {
      expect(jobsConstants.FETCH_ADD_JOB_REQUEST).toBeDefined();

    });

    it('Should has be defined FETCH_ADD_JOB_SUCCESS', () => {
      expect(jobsConstants.FETCH_ADD_JOB_SUCCESS).toBeDefined();
    });

    it('Should be defined FETCH_ADD_JOB_FAILURE', () => {
      expect(jobsConstants.FETCH_ADD_JOB_FAILURE).toBeDefined();
    });

    it('Should be defined CLEAR_JOBS_STATE', () => {
      expect(jobsConstants.CLEAR_JOBS_STATE).toBeDefined();
    });

  });
});