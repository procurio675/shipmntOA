const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');
const customer = require('../controllers/customer');

// Example route for health check
router.get('/health', healthController.checkHealth);

router.post('/customer', customer.createCustomer);
router.post('/item', customer.createItem);

module.exports = router;
