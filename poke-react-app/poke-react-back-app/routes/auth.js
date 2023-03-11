/*
    Rutas de Usuario/ Auth
    host+ /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { newUser, login, reNew } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

// NEW USER
router.post('/new',
    [//middlewares
        check('name', 'el nombre es obligatorio').not().isEmpty(),
        check('email', 'el email es obligatorio').isEmail(),
        check('password', 'el password debe tener 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    newUser)


// LOGIN USER
router.post('/',
    [//middlewares
        check('email', 'el email es obligatorio').isEmail(),
        check('password', 'el password debe tener 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ], login)



// RENEW TOKEN
router.get('/renew',
    [//middlewares
        validarJWT
    ], reNew)

module.exports = router;