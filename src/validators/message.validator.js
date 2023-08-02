const { check } = require('express-validator');
const validateResult = require('../middlewares/validate.middleware');


const createMessagesValidator = [
    check('conversationId', 'Error en el campo conversationId')
        .exists().withMessage('conversationId es obligatorio')
        .notEmpty().withMessage('El conversationId no debe estar vacío')
        .isInt().withMessage('El tipo de dato debe ser entero'),
    check('content', 'Error en el campo content')
        .exists().withMessage('El campo content es obligatorio')
        .notEmpty().withMessage('El campo content no debe estar vacío')
        .isString().withMessage('El tipo de dato debe ser string'),
    check('senderId', 'Error en el campo senderId')
        .exists().withMessage('El campo senderId es obligatorio')
        .notEmpty().withMessage('El campo senderId no debe estar vacío')
        .isInt().withMessage('El tipo de dato debe ser entero'),
    validateResult
]


module.exports = {
    createMessagesValidator,
};