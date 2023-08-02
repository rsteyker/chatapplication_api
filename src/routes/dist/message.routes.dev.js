"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/message.controllers'),
    createMessage = _require2.createMessage;

var _require3 = require('../validators/message.validator'),
    createMessagesValidator = _require3.createMessagesValidator;

var router = Router();
router.post('/messages', createMessagesValidator, createMessage);
module.exports = router;
//# sourceMappingURL=message.routes.dev.js.map
