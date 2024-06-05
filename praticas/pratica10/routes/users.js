var express = require('express');
const controller = require('../controllers/users');
var router = express.Router();
const auth = require('../middlewares/auth');

router.post('/', controller.criar);

router.post('/login', controller.entrar);

router.post('/renovar', auth, controller.renovar);

module.exports = router;
