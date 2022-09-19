const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const morgan = require ('morgan');
const cors = require ('cors')
const helmet = require ('helmet');
// const logger = require ('../config/logger')





app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cors())
// app.use(morgan("combined", { stream: logger.stream }));
app.use(helmet())





module.exports = app;