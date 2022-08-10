const express = require('express')
const { forRegisterUser, gettingUserInfo } = require('../controllers/registratio.controller')
const multipart = require('connect-multiparty')
const path = require('path')
const multiPartyMiddleWare = multipart({ uploadDir: path.join(__dirname, "uploads") })

const registrationRouter = express.Router()

registrationRouter.post('/post', multiPartyMiddleWare, forRegisterUser)

registrationRouter.get('/get', gettingUserInfo)


module.exports = registrationRouter