const express = require('express')
const app = express()

// ROUTES

app.get('/', (req, res) => {
    res.send('hello node api')
})


app.listen(3000, () => {
    console.log('NODE API app is running on port 3000')
})