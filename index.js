const TelegramBot = require('node-telegram-bot-api');

const token = '6493078996:AAECm7PoRykwOrfsCgNKFfDtNjQ3DzIJ1m8';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
	const chatId = msg.chat.id;
	const resp = match[1];
  
	bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
	const chatId = msg.chat.id;
  
	bot.sendMessage(chatId, 'Приветствую, ' + msg.from.first_name);
});

