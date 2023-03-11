const { response } = require('express')
const { validationResult } = require('express-validator')


const validarCampos = (req, res = response, next) => {

    //manejo de errores
    const errors = validationResult(req);
    const obj = errors.mapped()
    console.log('====================================');
    console.log(obj);
    console.log('====================================');
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            msg: obj?.name?.msg || obj?.email?.msg || obj?.password?.msg
        })
    }

    next();
}


module.exports = {
    validarCampos,
}



