const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');
const encryptMiddleware = require('../middleware/encryptMiddleware');

router.post('/', protect, encryptMiddleware, sendMessage);
router.get('/', protect, getMessages);

module.exports = router;

