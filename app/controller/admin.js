const AdminAuthService = require ('../service/adminAuth');
const {successResponse,errorResponse} = require ('../utils/response') 



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
        logger.info(`Admin Succesfully SignUp ${JSON.stringify(result)}`);
        if (result.statusCode === 201) {
          return successResponse(
            res,
            result.statusCode,
            "Admin successfully SignUp",
            result.data
          );
        } else {
          return errorResponse(res, result.statusCode, result.message);
        }
      } catch (error) {
        logger.error;
        `Admin registration error ${JSON.stringify(err.message)}`;
        return errorResponse(res, 500, "Ooops, something went wrong.");
      }
    }
  }


  module.exports = adminController