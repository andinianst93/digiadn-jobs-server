const express = require('express')
const testUser = require('../middleware/testUser')

const router = express.Router()

const {
  getAllJobs,
  getSingleJob,
  createJob,
  deleteJob,
  updateJob,
  showStats,
} = require('../controllers/jobs')

router.route('/').get(getAllJobs).post(testUser, createJob)
router.route('/stats').get(showStats)
router
  .route('/:id')
  .get(getSingleJob)
  .patch(testUser, updateJob)
  .delete(testUser, deleteJob)

module.exports = router
