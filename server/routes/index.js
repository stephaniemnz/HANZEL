const router = require('express').Router();
const apiRoutes = require('./api/users');

router.use('/api', apiRoutes);

module.exports = router;