const express = require('express');
const cors = require('cors');
const formController = require('../controllers/table');
const authMiddleware = require('../utils/authMiddleware'); 


const router = express.Router();

// Enable CORS for this router
router.use(cors());

// Handle POST requests to /login
router.get("/formDetails", formController.getForm);

module.exports = router;
