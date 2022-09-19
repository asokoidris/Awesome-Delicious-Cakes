require ('dotenv').config();

module.exports = {
Port: process.env.PORT,
DATA_DB: process.env.DATABASE_URI,
JWTSECRET: process.env.JWTSECRET,
}