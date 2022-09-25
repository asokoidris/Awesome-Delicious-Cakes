const HelperFunctions =require ('../utils/helperFunction')
const {successResponse,errorResponse} = require ('../utils/response')
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
    const {email, phoneNumber} = data;
    const checkAdminAuthExist = await AdminSchema.findOne({
        email, phoneNumber
    })
  
  if (checkAdminAuthExist !== 'undefined' && checkAdminAuthExist !== null) {
       return {
      statusCode: 409,
      message: 'Admin Already Exist',
    };
  }
  const hashedPassword = await HelperFunctions.hashPassword(password);
  const createAdmin = await AdminSchema.create({
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    phoneNumber: data.phoneNumber,
    password: hashedPassword
  })

  logger.info(`Admin Created Succesfully ${JSON.stringify(createAdmin)}`);
  const admin = new Admin(createAdmin);
  return { data: admin, statusCode: 200 };

}}

module.exports = AdminAuthService