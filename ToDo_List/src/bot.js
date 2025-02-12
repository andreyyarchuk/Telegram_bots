// Основной файл для работы бота Telegram

require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')

const token = process.env.TELEGRAM_TOKEN
if (!token) {
	console.error(
		'Токен Telegram не найден. Убедитесь, что он указан в файле .env'
	)
	process.exit(1)
}

const bot = new TelegramBot(token, { polling: true })

bot.on('message', msg => {
	bot.sendMessage(
		msg.chat.id,
		'Привет! Я ToDo-бот! Напиши /add Задача, чтобы добавить задачу.'
	)
})

console.log('Telegram бот запущен!')
