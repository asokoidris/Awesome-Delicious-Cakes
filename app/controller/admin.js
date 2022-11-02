const AdminAuthService = require ('../service/adminAuth');
const{
  successResponse,
  loginSuccessResponse,
  errorResponse,
  paginationSuccessResponse,
} = require ('../utils/response') 
 


class adminController {
    /**
     *
     * @description return a JSON
     * @param {Object} req - http request
     * @param {Object} res - http response
     * @return {Object} Returned object
     * */
  
    static async signUpAdminController(req, res) {
      try {
        const result = await AdminAuthService.signUpAdminService(req.body);
         
        return successResponse(
          res,
          201,
          'Admin successfully registered',
          result
      )
      }catch (error) {
        return errorResponse(res, 500, 'Internal Server Error')
    }

    }
  }


  module.exports = adminController