const { Router } = require('express');
const { createConversation, getConversationParticipantMessages, deleteConversation, getAllConversationUser } = require('../controllers/conversation.controllers');
const authenticate = require('../middlewares/auth.middleware');
const createConversationValidator = require('../validators/conversation.validator');

const router = Router();

router.post('/conversations', authenticate, createConversationValidator, createConversation);

router.get('/conversations/:id', getAllConversationUser);

router.get('/conversations/:id/messages', getConversationParticipantMessages);

router.delete('/conversations/:id', deleteConversation);

module.exports = router;