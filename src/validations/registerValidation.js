const {check} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio'),

    check('email')
    .isEmail().withMessage('Debes ingresar un email válido'),

    check('backgroundColour')
    .notEmpty().withMessage('Debes seleccionar un color'),
    
    check('age')
    .notEmpty().withMessage('Debes ingresar tu edad').bail()
    .isNumeric().withMessage('Debes ingresar un número')
]