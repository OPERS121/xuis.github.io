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
  
	bot.sendMessage(chatId, 'Received your message');
});

let circle = document.getElementById('circle');
let btnenter = document.getElementById('btnenter');
let container = document.getElementById('container');
let background = document.getElementById('background');
let background1 = document.getElementById('background1');
btnenter.addEventListener('click', () => {
	circle.style.display = 'block';
	btnenter.style.display = 'none';
  setTimeout(() => {
    circle.style.display = 'none';
	background.style.display = 'none';
	container.style.display = 'block';
	background1.style.display = 'block';
  }, 3000);
});

let openModalEat = document.getElementById('openModalEat');
let closeModal = document.getElementById('closeModal');
let modal_eat = document.getElementById('modal_eat');
let modal_task = document.getElementById('modal_task');
openModalEat.addEventListener('click', () => {
	modal_eat.style.display = 'block';
});
openModalTask.addEventListener('click', () => {
	modal_task.style.display = 'block';
});

closeModal.addEventListener('click', () => {
	modal_eat.style.display = 'none';
});
closeModalTask.addEventListener('click', () => {
	modal_task.style.display = 'none';
});

let objectbtn = document.getElementById('objectbtn');
var timerId = setTimeout(function tick() {
	objectbtn.style.display = 'block';
	timerId = setTimeout(tick, 5000);
}, 5000);


function minBtOnclick(tasks){
    chislo++;
    document.getElementById("balance").innerHTML = chislo;
}

let chislo = 0;
let collectobject = document.getElementById('collectobject');
objectbtn.addEventListener('click', () => {
	collectobject.style.display = 'block';
  setTimeout(() => {
	minBtOnclick();
    collectobject.style.display = 'none';
	objectbtn.style.display = 'none';
  }, 3000);
});
