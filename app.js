let circle = document.getElementById('circle');
let btnenter = document.getElementById('btnenter');
let container = document.getElementById('container');
let background = document.getElementById('background');
let background1 = document.getElementById('background1');

btnenter.addEventListener('click', () => {
setTimeout(() => {
	localStorage.getItem('coin') > 0 ? chislo=localStorage.getItem('coin') : chislo = 0;
	document.getElementById("balance").innerHTML = chislo;
	btnenter.style.display = 'none';
	circle.style.display = 'block';
}, 500);
setTimeout(() => {
    circle.style.display = 'none';
	background.style.display = 'none';
	container.style.display = 'block';
	background1.style.display = 'block';
}, 3500);
});

let openModalEat = document.getElementById('openModalEat');
let openModalShop = document.getElementById('openModalShop');
let closeModal = document.getElementById('closeModal');
let closeModalTask = document.getElementById('closeModalTask');
let closeModalShop = document.getElementById('closeModalShop');
let modal_eat = document.getElementById('modal_eat');
let modal_task = document.getElementById('modal_task');
let modal_shop = document.getElementById('modal_shop');
openModalEat.addEventListener('click', () => {
setTimeout(() => {
	modal_eat.style.display = 'block';
}, 500);
});
openModalTask.addEventListener('click', () => {
setTimeout(() => {
	modal_task.style.display = 'block';
}, 500);
});
openModalShop.addEventListener('click', () => {
setTimeout(() => {
	modal_shop.style.display = 'block';
}, 500);
});

closeModal.addEventListener('click', () => {
	modal_eat.style.display = 'none';
});
closeModalTask.addEventListener('click', () => {
	modal_task.style.display = 'none';
});
closeModalShop.addEventListener('click', () => {
	modal_shop.style.display = 'none';
});

let buychiken1 = document.getElementById('buychiken1');
let objectchiken = document.getElementById('objectchiken');
buychiken1.addEventListener('click', () => {
	modal_shop.style.display = 'none';
	if (chislo < 5) {
		    nomoney.style.display = 'block';
		setTimeout(() => {
			nomoney.style.display = 'none';
		}, 1000);
	  } else {
		cost1 = 1;
		buychik = chislo - cost1;
		document.getElementById("balance").innerHTML = buychik;
		localStorage.setItem('coin',buychik);
		objectchiken.style.display = 'block';
	}
});

let objectbtn = document.getElementById('objectbtn');
var timerId = setTimeout(function tick() {
	objectbtn.style.display = 'block';
	timerId = setTimeout(tick, 5000);
}, 5000);


function minBtOnclick(){
    chislo++;
    document.getElementById("balance").innerHTML = chislo;
	localStorage.setItem('coin',chislo);
}

let chislo;

let collectobject = document.getElementById('collectobject');
objectbtn.addEventListener('click', () => {
	objectbtn.style.display = 'none';
	collectobject.style.display = 'block';
  setTimeout(() => {
	minBtOnclick();
    collectobject.style.display = 'none';
  }, 3000);
});
