const { check } = require('express-validator');
const validateResult = require('../middlewares/validate.middleware');


const createUserValidator = [
    check('firstname', 'Error en el campo firstname')
        .exists().withMessage('Firstname es obligatorio')
        .notEmpty().withMessage('El firstname no debe estar vacío')
        .isString().withMessage('El tipo de dato debe ser string')
        .isLength({ max: 30 }).withMessage('El firstname debe tener mínimo 30 carácteres'),
    check('lastname', 'Error en el campo lastname')
        .exists().withMessage('Lastname es obligatorio')
        .notEmpty().withMessage('El lastname no debe estar vacío')
        .isString().withMessage('El tipo de dato debe ser string')
        .isLength({ max: 30 }).withMessage('El lastname debe tener máximo 30 carácteres'),
    check('username', 'Error en el campo username')
        .exists().withMessage('Username es obligatorio')
        .notEmpty().withMessage('El username no debe estar vacío')
        .isString().withMessage('El tipo de dato debe ser string')
        .isLength({ min: 8, max: 30 }).withMessage('El username debe ser mínimo 8 carácteres y máximo 30'),
    check('email', 'Error en el campo email')
        .exists().withMessage('Email es obligatorio')
        .isString().withMessage('El tipo de dato debe ser string')
        .notEmpty().withMessage('Email no debe de estar vacío')
        .isEmail().withMessage('El Email no tiene el formato de correo')
        .isLength({ min: 10, max: 50 }).withMessage('El email debe ser mínimo 8 carácteres y máximo 50'),

    check('password', 'Error en el campo password')
        .exists().withMessage('Password es obligatorio')
        .isString().withMessage('El tipo de dato debe ser string')
        .notEmpty().withMessage('Password no debe de estar vacío')
        .isLength({ min: 8 }).withMessage('El password debe tener mínimo 8 carácteres'),
    validateResult
];

const loginUserValidator = [
    check('email', 'Error en el campo email')
        .exists().withMessage('Email es obligatorio')
        .isString().withMessage('El tipo de dato debe ser string')
        .notEmpty().withMessage('Email no debe de estar vacío')
        .isEmail().withMessage('El Email no tiene el formato de correo'),
    check('password', 'Error en el campo password')
        .exists().withMessage('Password es obligatorio')
        .isString().withMessage('El tipo de dato debe ser string')
        .notEmpty().withMessage('Password no debe de estar vacío'),
    validateResult
];

module.exports = {
    createUserValidator,
    loginUserValidator,
}