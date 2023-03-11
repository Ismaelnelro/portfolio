
/*
Event Routes
localhost +/api/events
*/

const { Router } = require('express');
const { getFavorites, saveFavorites, updateFavorites, removeFavorites } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

// como todas esas rutas van a recibir la validacion del toquen puedo user el use en router
router.use(validarJWT);


router.get('/', getFavorites);
router.post('/', saveFavorites);
router.delete('/', removeFavorites);

module.exports = router