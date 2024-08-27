const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');

router.get('/', getUsers);

module.exports = router;
