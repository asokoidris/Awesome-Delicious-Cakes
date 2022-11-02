const UserSchema = require ('../models/user');
const { successResponse, errorResponse} = require ('../utils/response');
const HelperFunction = require ('../utils/helper-functions');
const Token = require ('../utils/token')
/**
 * @description - This is a class that contains methods for user authentication and authorization.
 */

 class UserService {
    /**
     * @description - This method is used to signup a user
     * @param {object} userData - The user data
     * @returns {object} - Returns an object
     * @memberof UserService
     */

    static async signup (data) {
        const { email, username, password} = data;
        const user = await UserSchema.findOne({ email:email }) 
        if(user)
        return {
            statusCode: 409,
            message: 'User already exist'
        }

        const hashedPassword = HelperFunction.hashPassword(password)
        const newUser = await UserSchema.create({
            username,
            email,
            password:hashedPassword
        })
        logger.info(`User created with email: ${email}`);
        // remove password from the response
        newUser.password = undefined;
        return {
          statusCode: 201,
          message: 'User created successfully',
          data: newUser,
        };
      }


  /**
   * @description - This method is used to login a user
   * @param {object} userData - The user data
   * @returns {object} - Returns an object
   * @memberof UserService
   
   */
   static async login(data) {
    const { email, password } = data;
    const user = await UserSchema.findOne({ email });

    if (!user)
      return {
        statusCode: 404,
        message: 'User does not exist',
      };

    const isPasswordValid = HelperFunction.comparePassword(
      password,
      user.password
    );

    if (!isPasswordValid)
      return {
        statusCode: 401,
        message: 'Invalid password',
      };

    const accessToken = Token.generateToken(user);
    logger.info(`User logged in with email: ${email}`);
    user.password = undefined;
    return {
      statusCode: 200,
      message: 'User logged in successfully',
      data: {
        user,
        accessToken,
      },
    };
  
  }

}

 module.exports = UserService