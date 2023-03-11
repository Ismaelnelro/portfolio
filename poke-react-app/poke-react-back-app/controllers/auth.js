const { response } = require('express');
const bcrypt = require('bcryptjs')
const User = require('../models/User');
const { generarJWT } = require('../helpers/jwt');


/*CREATING NEW USER*/
const newUser = async (req, res = response) => {

    const { email, password } = req.body;
    console.log(email, password);
    try {

        let user = await User.findOne({ email })
        console.log(user);
        // Validacion de usuario existente
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            })
        }
        user = new User(req.body);

        // encriptar password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);


        await user.save();

        // Generar JWT
        const token = await generarJWT(user.id, user.name);


        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Porfavor hablar con el administrador!'
        })
    }

}


/*LOGIN USER*/
const login = async (req, res = response) => {
    const { email, password } = req.body

    try {

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'El passsword o contrasena no son correcto!'
            })
        }
        // Confirmar los paswords
        const validPass = bcrypt.compareSync(password, user.password)
        if (!validPass) {
            return res.status(400).json({
                ok: false,
                msg: 'El passsword no valida!'
            })
        }

        //Generar token
        const token = await generarJWT(user.id, user.name);


        res.status(200).json({
            ok: true,
            uid: user.id,
            name: user.name
            , token

        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Porfavor hablar con el administrador'
        })
    }


}

/*RENEWE TOKEN*/
const reNew = async (req, res = response) => {

    const uid = req.uid;
    const name = req.name;

    //generar un nuevo JWT 
    const token = await generarJWT(uid, name)
    res.json({
        ok: true,
        uid,
        name,
        token
    })

}


module.exports = {
    newUser,
    login,
    reNew
}