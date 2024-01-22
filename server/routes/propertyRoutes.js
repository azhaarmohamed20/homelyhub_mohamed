const experss = require('express')
const router = experss.Router()
const { fetchProperty, fetchPropertyById, addProperty, updateProperty, deleteProperty } = require('../controllers/propertyController')


router.route('/').get(fetchProperty)
router.route('/:id').get(fetchPropertyById)
// Routes unten müssen protected werden
router.route('/').post(addProperty)
router.route('/:id').put(updateProperty)
router.route('/:id').delete(deleteProperty)

module.exports = router