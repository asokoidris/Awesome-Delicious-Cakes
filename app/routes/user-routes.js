const express = require ('express')
const router = express.Router();
const {
    createUserSchema,
    loginUserSchema,
  } = require('../validation/schema/user');
const UserController = require ('../controller/user-controller')
const { validate } = require('../validation/validateClass');



router.post('/signup', validate(createUserSchema), UserController.createUser);

router.post('/login', validate(loginUserSchema), UserController.login);




module.exports = router