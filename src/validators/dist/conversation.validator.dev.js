"use strict";

var _require = require('express-validator'),
    check = _require.check;

var validateResult = require('../middlewares/validate.middleware');

var createConversationValidator = [check('title', 'Error en el campo title').exists().withMessage('Title es obligatorio').notEmpty().withMessage('El title no debe estar vacío').isString().withMessage('El tipo de dato debe ser string'), check('createdBy', 'Error en el campo createdBy').exists().withMessage('createdBy es obligatorio').notEmpty().withMessage('El createdBy no debe estar vacío').isInt().withMessage('El tipo de dato debe ser entero'), check('type', 'Error en el campo type').isString().withMessage('El tipo de dato debe ser string'), validateResult];
module.exports = createConversationValidator;
//# sourceMappingURL=conversation.validator.dev.js.map
