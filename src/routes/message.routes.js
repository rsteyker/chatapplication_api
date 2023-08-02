const { Router } = require('express');
const { createMessage } = require('../controllers/message.controllers');
const { createMessagesValidator } = require('../validators/message.validator');

const router = Router();

router.post('/messages', createMessagesValidator, createMessage);


module.exports = router;