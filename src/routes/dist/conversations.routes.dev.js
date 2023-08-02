"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/conversation.controllers'),
    createConversation = _require2.createConversation,
    getConversationParticipantMessages = _require2.getConversationParticipantMessages,
    deleteConversation = _require2.deleteConversation,
    getAllConversationUser = _require2.getAllConversationUser;

var authenticate = require('../middlewares/auth.middleware');

var createConversationValidator = require('../validators/conversation.validator');

var router = Router();
router.post('/conversations', authenticate, createConversationValidator, createConversation);
router.get('/conversations/:id', getAllConversationUser);
router.get('/conversations/:id/messages', getConversationParticipantMessages);
router["delete"]('/conversations/:id', deleteConversation);
module.exports = router;
//# sourceMappingURL=conversations.routes.dev.js.map
