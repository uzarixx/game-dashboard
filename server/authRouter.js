const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleware = require('./middlewaree/authMiddleware')
const roleMiddleware = require('./middlewaree/roleMiddleware')

router.post('/registration', [
    check('username', "Bad validation").notEmpty(),
    check('password', "Pass min lenght 4 max lenght 10 words").isLength({min: 4, max: 30})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', authMiddleware,roleMiddleware(['ADMIN']), controller.getUsers)

module.exports = router