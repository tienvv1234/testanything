const express = require('express')
// const cookieParser = require('cookie-parser')
// const cookieValidator = require('./cookieValidator')

const app = express()

// async function validateCookies (req, res, next) {
//   await cookieValidator(req.cookies)
//   next()
// }

// app.use(cookieParser())

// app.use(validateCookies)

app.get('/api/login', (req, res, next) => {
    // Your login logic here
    console.log(200);
    res.status(200).json('token');
})

// error handler
app.use((err, req, res, next) => {
  res.status(400).send(err.message)
})

app.all('*', (req, res) => {
    res.status(404).send('Not found')
})

app.listen(3001)