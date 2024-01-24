const express = require('express')
const router = express.Router()
const {registerUser, authUser, allUsers, deleteUser} = require('../controllers/userController')
const { protect } = require("../middleware/authMiddleware");

router.route('/').post(registerUser).get(protect ,allUsers)

router.post('/login', authUser)

router.delete("/:id", deleteUser)

module.exports = router