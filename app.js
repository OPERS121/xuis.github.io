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


//button.onclick = function () {
//    this.btnClick = (this.btnClick || 0) + 1;
//    if (this.btnClick == 3) {
//        this.disabled = true;
//    }
//};

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

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')
const image = new Image()

image.onload = function(){
	let x = 0, 
    y = 0,
    dx = 1,
	dy = 1 
function render() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	x = x + dx;
	y = x + dx;
    ctx.drawImage(image, x, y)
	window.requestAnimationFrame(render)
}
window.requestAnimationFrame(render)
}
image.src = './img/gus.gif'


const number = 3500;
console.log(new Intl.NumberFormat().format(number));