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

    it('Should has be defined ADD_JOB_REQUEST', () => {
      expect(jobsConstants.ADD_JOB_REQUEST).toBeDefined();

    });

    it('Should has be defined ADD_JOB_REQUEST_SUCCESS', () => {
      expect(jobsConstants.ADD_JOB_REQUEST_SUCCESS).toBeDefined();
    });

    it('Should be defined ADD_JOB_REQUEST_FAILURE', () => {
      expect(jobsConstants.ADD_JOB_REQUEST_FAILURE).toBeDefined();
    });

    it('Should be defined CLEAR_JOBS_STATE', () => {
      expect(jobsConstants.CLEAR_JOBS_STATE).toBeDefined();
    });

    it('Should be defined UPDATE_JOB_REQUEST', () => {
      expect(jobsConstants.UPDATE_JOB_REQUEST).toBeDefined();
    });

    it('Should be defined UPDATE_JOB_REQUEST_SUCCESS', () => {
      expect(jobsConstants.UPDATE_JOB_REQUEST_SUCCESS).toBeDefined();
    });

    it('Should be defined UPDATE_JOB_REQUEST_FAILURE', () => {
      expect(jobsConstants.UPDATE_JOB_REQUEST_FAILURE).toBeDefined();
    });

  });
});