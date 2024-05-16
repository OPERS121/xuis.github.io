let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

const DemoAppViewport = {
	init() {
		DemoApp.init();
		Telegram.WebApp.onEvent('viewportChanged', DemoAppViewport.setData);
		DemoAppViewport.setData();
	},
	setData() {
		document.querySelector('.viewport-border').setAttribute('text', window.innerWidth + ' x ' + round(Telegram.WebApp.viewportHeight, 2))
		document.querySelector('.viewport-stable_border').setAttribute('text', window.innerWidth + ' x ' + round(Telegram.WebApp.viewportStableHeight, 2) +
			' | is_expanded: ' + (Telegram.WebApp.isExpanded ? 'true' : 'false'));
	}
};

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

let collectobject = document.getElementById('collectobject');
objectbtn.addEventListener('click', () => {
	collectobject.style.display = 'block';
  setTimeout(() => {
    collectobject.style.display = 'none';
	objectbtn.style.display = 'none';
  }, 3000);
});