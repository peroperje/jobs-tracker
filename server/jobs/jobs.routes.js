const {Router} = require('express');
const {getJobs, getJob, updateJob, addJob, deleteJob} = require('./jobs.controller');
const {authenticate} = require('../middleware/authenticate');

const router = new Router();

router.route('/jobs').all(authenticate).get(getJobs);
router.route('/jobs/:id').all(authenticate).get(getJob);
router.route('/jobs/:id').all(authenticate).patch(updateJob);
router.route('/jobs').all(authenticate).post(addJob);
router.route('/jobs/:id').all(authenticate).delete(deleteJob);

module.exports = router;
