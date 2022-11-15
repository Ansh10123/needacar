const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const User = require('./models/login_user')

mongoose.connect('mongodb://localhost:27017/needacar', () => console.log('Database Connected'))


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/success', (req, res) => {
    res.sendFile('public/login_success.html', { root: __dirname })
})

app.post('/login', async (req, res) => {
    try {
        const response = new User(req.body)
        const data = await response.save()
        res.redirect('/success')

    } catch (error) {
        res.send(error)
    }
})

app.listen(5000, () => {
    console.log('Server Started at http://localhost:5000')
})