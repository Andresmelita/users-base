const router = require('express').Router()
const passportJWT = require('../middleware/auth.middleware')

const userServices = require('./users.services')


//? /api/v1/users
router.get("/", passportJWT.authenticate('jwt', {session: false}), userServices.getAllUsers) 
router.post("/", userServices.postUser) //*Agregar usuarios no requerirá autenticación

router.get("/:id", passportJWT.authenticate('jwt', {session: false}),userServices.getUserById)
router.patch('/:id', passportJWT.authenticate('jwt', {session: false}), userServices.patchUser)
router.delete('/:id', passportJWT.authenticate('jwt', {session: false}),userServices.deleteUser)

module.exports = router