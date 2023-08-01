const { Router } = require('express');
const { createUser, loginUser, getFindAllUsers } = require('../controllers/user.controllers');
const { createUserValidator, loginUserValidator } = require('../validators/user.validator');
const authenticate = require('../middlewares/auth.middleware');
const { uploadAvatar } = require('../middlewares/multer');
const { recortarImageAvatar } = require('../middlewares/recortarImage');


const router = Router();

router.post('/users', uploadAvatar.single('profileImage'), recortarImageAvatar, createUserValidator, createUser);

router.post('/login', loginUserValidator, loginUser);

router.get('/users', getFindAllUsers);

// proteger este endpoint
router.get('/users', authenticate, (req, res) => { res.send('users') });

module.exports = router;