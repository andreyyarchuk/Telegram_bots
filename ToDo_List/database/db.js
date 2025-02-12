// Настройки подключения к SQLite

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./tasks.db')

db.run(
	`
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task TEXT NOT NULL
    )
`,
	err => {
		if (err) {
			console.error('Ошибка при создании таблицы:', err.message)
		} else {
			console.log('Таблица tasks успешно создана (если её не было)')
		}
	}
)

module.exports = db
