require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./Db/conn')
const registrationRouter = require('./routes/registration.routes')
const port = process.env.PORT || 4444

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', registrationRouter)

app.listen(port, () => {
    console.log(`Port is running at ${port}`)
})