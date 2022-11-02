const express = require ('express')
const bodyParser = require ('body-parser');
const morgan = require ('morgan');
const cors = require ('cors')
const helmet = require ('helmet');
const Logger = require('../config/logger');

const app = express();


const userRoutes = require ('../routes/user-routes');






global.logger = Logger.createLogger({ label: 'Awesome Delicious Cake' });

app.use(helmet());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined', { stream: logger.stream }));



app.use('/user', userRoutes)



app.get("/", (req, res) => {
    const welcomeText =
      "<div style='text-align: center;'><h1>Welcome to Awesome-delicious-cake Shopping Ecommerce .</h1><p>Server is up and running, visit <a href='https://github.com/asokoidris/AWESOME-DELICIOUS-CAKE'>link</a> for more info.</p></div>";
    res.status(200).send(welcomeText);
  });


module.exports = app;