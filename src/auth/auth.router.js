const router = require('express').Router()

//* creación de ruta
const authServices = require('./auth.services')
router.post('/login', authServices.postLogin) 

module.exports = router
