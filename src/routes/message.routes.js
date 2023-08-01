const { Router } = require('express');
const { createMessage } = require('../controllers/message.controllers');

const router = Router();

router.post('/messages', createMessage);


module.exports = router;