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
}, 3000);
});

let openModalEat = document.getElementById('openModalEat');
let closeModal = document.getElementById('closeModal');
let closeModalTask = document.getElementById('closeModalTask');
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
	modal_task.style.display = 'none';
});
closeModalTask.addEventListener('click', () => {
	modal_task.style.display = 'none';
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
	collectobject.style.display = 'block';
  setTimeout(() => {
	minBtOnclick();
    collectobject.style.display = 'none';
	objectbtn.style.display = 'none';
  }, 3000);
});
