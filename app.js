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

var timerId = setTimeout(function tick() {
	objectbtn.style.display = 'block';
	timerId = setTimeout(tick, 2000);
}, 2000);

let objectbtn = document.getElementById('objectbtn');
let collectobject = document.getElementById('collectobject');

objectbtn.addEventListener('click', () => {
	collectobject.style.display = 'block';
  setTimeout(() => {
    collectobject.style.display = 'none';
	objectbtn.style.display = 'none';
  }, 3000);
});

const imageList = [
	'img/background.png',
	'img/background1.png',
  ]
  const img = document.querySelector('.img')
  const next = document.getElementById('filtertrigger')
  var numImage = 0
  img.src = imageList[numImage]
  
  next.addEventListener('click', () => {
	numImage++
	if (numImage >= imageList.length) {
	  numImage = 0
	}
	console.log(numImage >= imageList.length)
	console.log(numImage)
	img.src = imageList[numImage]
})

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
