const express = require('express')
const { loadHomepage } = require('../controllers/user/userController')
const router = express.Router()
const userController=require('../controllers/user/userController')


router.get("/pageNoteFound",userController.pageNoteFound)
router.get('/',userController.loadHomepage)











module.exports = router;