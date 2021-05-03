const { Router } = require('express');
const authcontroller = require('../controller/auth')
const router = Router();



router.get('/login', (req,res)=>{
    res.render('login')
})

router.post('/login', authcontroller.login_post)


module.exports= router;