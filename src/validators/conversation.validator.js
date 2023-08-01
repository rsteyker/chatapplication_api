const { check } = require('express-validator');
const validateResult = require('../middlewares/validate.middleware');

const createConversationValidator = [
    check('title', 'Error en el campo title')
        .exists().withMessage('Title es obligatorio')
        .notEmpty().withMessage('El title no debe estar vacío')
        .isString().withMessage('El tipo de dato debe ser string'),
    validateResult
]

module.exports = createConversationValidator;