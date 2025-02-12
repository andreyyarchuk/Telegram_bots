// Основной файл HTTP-сервера

require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
	res.send('HTTP сервер работает! Добро пожаловать.')
})

app.listen(PORT, () => {
	console.log(`HTTP сервер запущен на порту ${PORT}`)
})
