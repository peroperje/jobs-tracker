const {Router} = require('express');
const {getJobs, getJob, updateJob, addJob, deleteJob} = require('./jobs.controller');

const router = new Router();

router.route('/jobs').get(getJobs);
router.route('/jobs/:id').get(getJob);
router.route('/jobs/:id').patch(updateJob);
router.route('/jobs').post(addJob);
router.route('/jobs/:id').delete(deleteJob);

module.exports = router;
