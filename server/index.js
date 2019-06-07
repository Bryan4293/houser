require('dotenv').config()
const express = require('express')
const massive = require('massive')
const house_controller = require('./controllers/house_controller')
const app = express()
const {SERVER_PORT, CONNECTION_STRING}= process.env
const {add, getAll, update, del}= house_controller

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected (^o^)')
}).catch(error => console.log(`${error} monkaS`))

app.use(express.json())

app.get('/api/houses', getAll)
app.post('/api/house', add)
app.put('/api/house/:id', update)
app.delete('/api/house/:id', del)

app.listen(SERVER_PORT, () => console.log(`Listening to port ${SERVER_PORT}`))