const HelperFunctions =require ('../utils/helperFunction')
const {
  successResponse,
  loginSuccessResponse,
  errorResponse,
  paginationSuccessResponse,
} = require ('../utils/response')
const AdminSchema = require ('../models/admin');
const Admin = require ('../class/admin')

const Token = require('../utils/token');
/**
 * @description Auth Service class
 */
class AdminAuthService {
  /**
   * @description function search for a client by email and phone
   * @param {Object} data - req body object from the AuthController
   * @return {Object} Returned object
   */

  static async signUpAdminService(data) {
    try{  
    const {email, phoneNumber} = data;
    const checkAdminAuthExist = await AdminSchema.findOne({
        email, phoneNumber
    });
  
    if (checkAdminAuthExist)
    return successResponse(
      res,
      409,
      'admin already exit'
  )
  const hashedPassword = await HelperFunctions.hashPassword(password);
  const createAdmin = await AdminSchema.create({
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    phoneNumber: data.phoneNumber,
    password: hashedPassword
  })

  // logger.info(`Admin Created Succesfully ${JSON.stringify(createAdmin)}`);
  const admin = new Admin(createAdmin);
  return successResponse(
      res,
      201,
      'Admin successfully registered',
      admin
  )
  }catch (error) {
    return errorResponse(res, 500, 'Internal Server Error')
}
}}

module.exports = AdminAuthService