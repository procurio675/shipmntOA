const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

// Example route for health check
router.get('/health', healthController.checkHealth);

module.exports = router;
