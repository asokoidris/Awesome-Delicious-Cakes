const db = require ('./app/config/db')
const keys = require ('./app/config/key')
const server = require ('./app/routes/index')


const Port = process.env.PORT || 2022;



db()
    .then(() => {
        console.log('mongo_db database is  connected');
    }).catch(error => {
        console.log(error)
    });


server.listen(Port, () =>{
    console.log(`sever running on ${Port}`)
})