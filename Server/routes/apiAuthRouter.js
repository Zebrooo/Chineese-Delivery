const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models')


const apiAuthRouter = express.Router()


apiAuthRouter.route('/signup')
.post(async (res, req)=>{
    const {password, name, email} = req.body
    const pass = await bcrypt.hash(password,10)
    const role = req.body.role === 'admin'
    if(!email && !password && !name){
        return res.sendStatus(403)
    }
    try{
        const [user, create]= await User.findOrcreate({
            where: {email},
           defaults: {
            pass,
            name,
            role
           }

        })
        if(!create)return res.sendStatus(401)
        const tocken = jwt.sign({id: user.id, email: user.mail, role },process.env.SECRET_KEY,
            {expiresIn:'24h'}
            )
            return res.json({tocken})



    }catch(err){
        console.log(err);
        return res.sendStatus(401)
    }
})

module.exports= apiAuthRouter