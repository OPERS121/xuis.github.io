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
btnenter.addEventListener('click', () => {
	circle.style.display = 'block';
	btnenter.style.display = 'none';
  setTimeout(() => {
    circle.style.display = 'none';
  }, 3000);
});
