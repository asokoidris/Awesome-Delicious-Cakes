require ('dotenv').config();

module.exports = {
EXP_SEC:process.env.EXP_SEC,
Port: process.env.PORT,
DATA_DB: process.env.DATABASE_URI,
JWT_SEC: process.env.JWT_SEC
}