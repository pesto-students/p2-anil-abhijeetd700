var express = require('express');
var router = express.Router();

let userController = require('../controllers/users')

router.post('/login',userController.loginUser);
router.post('/register',userController.registerUser);
router.get('/info',userController.showInfo);
router.delete('/:id',userController.deleteUser)
router.put('/:id',userController.editUser)
router.post('/:year',userController.filterByYear)
router.post('/by/:month',userController.filterByMonth)

module.exports = router;
