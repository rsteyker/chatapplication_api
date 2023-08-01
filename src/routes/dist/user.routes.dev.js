"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/user.controllers'),
    createUser = _require2.createUser,
    loginUser = _require2.loginUser,
    getFindAllUsers = _require2.getFindAllUsers;

var _require3 = require('../validators/user.validator'),
    createUserValidator = _require3.createUserValidator,
    loginUserValidator = _require3.loginUserValidator;

var authenticate = require('../middlewares/auth.middleware');

var _require4 = require('../middlewares/multer'),
    uploadAvatar = _require4.uploadAvatar;

var _require5 = require('../middlewares/recortarImage'),
    recortarImageAvatar = _require5.recortarImageAvatar;

var router = Router();
router.post('/users', uploadAvatar.single('profileImage'), recortarImageAvatar, createUserValidator, createUser);
router.post('/login', loginUserValidator, loginUser);
router.get('/users', getFindAllUsers); // proteger este endpoint

router.get('/users', authenticate, function (req, res) {
  res.send('users');
});
module.exports = router;
//# sourceMappingURL=user.routes.dev.js.map
