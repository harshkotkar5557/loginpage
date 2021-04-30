const { Router } = require('express');
const authcontroller = require('../controller/auth')
const router = Router();


router.post('/login', authcontroller.login_post)


module.exports= router;