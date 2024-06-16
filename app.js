let counter = (localStorage.getItem('counter')) ? parseInt(localStorage.getItem('counter')) : 0;
let factor = 1;
let factor2 = 2;
let factor3 = 3;
let factor4 = 4;
let factor5 = 5;
let factor6 = 8;

let circle = document.getElementById('circle');
let btnenter = document.getElementById('btnenter');
let container = document.getElementById('container');
let backgroundenter = document.getElementById('background');
let background1 = document.getElementById('background1');


btnenter.addEventListener('click', () => {
setTimeout(() => {
	btnenter.style.display = 'none';
	circle.style.display = 'block';
}, 500);
setTimeout(() => {
	document.querySelector("#counter").textContent = parseInt(counter);
	if (localStorage.getItem('chiken') >= 1) {
		onechiken.style.display = 'block';
	}
	if (localStorage.getItem('chiken') >= 2) {
		twochiken.style.display = 'block';
		onechiken.style.display = 'none';
	}
	if (localStorage.getItem('chiken') >= 3) {
		freechiken.style.display = 'block';
		twochiken.style.display = 'none';
		onechiken.style.display = 'none';
	}
	if (localStorage.getItem('chiken') >= 4) {
		fourchiken.style.display = 'block';
		freechiken.style.display = 'none';
		twochiken.style.display = 'none';
		onechiken.style.display = 'none';
	}
	if (localStorage.getItem('chiken') >= 5) {
		fivechiken.style.display = 'block';
		fourchiken.style.display = 'none';
		freechiken.style.display = 'none';
		twochiken.style.display = 'none';
		onechiken.style.display = 'none';
	}
	if (localStorage.getItem('chiken') >= 6) {
		duck.style.display = 'block';
		fivechiken.style.display = 'none';
		fourchiken.style.display = 'none';
		freechiken.style.display = 'none';
		twochiken.style.display = 'none';
		onechiken.style.display = 'none';
	}
    circle.style.display = 'none';
	backgroundenter.style.display = 'none';
	container.style.display = 'block';
	background1.style.display = 'block';
}, 3500);
});

let openModalProfil = document.getElementById('openModalProfil');
let openModalWheel = document.getElementById('openModalWheel');
let openModalShop = document.getElementById('openModalShop');
let closeModal = document.getElementById('closeModal');
let closeModalTask = document.getElementById('closeModalTask');
let closeModalShop = document.getElementById('closeModalShop');
let closeModalProfil = document.getElementById('closeModalProfil');
let modal_profil = document.getElementById('modal_profil');
let modal_wheel = document.getElementById('modal_wheel');
let modal_task = document.getElementById('modal_task');
let modal_shop = document.getElementById('modal_shop');
let wheelspin = document.getElementById('wheelspin');
openModalProfil.addEventListener('click', () => {
setTimeout(() => {
	modal_profil.style.display = 'block';
}, 500);
});
openModalWheel.addEventListener('click', () => {
setTimeout(() => {
	modal_wheel.style.display = 'block';
	chikenss.style.display = 'none';
	wheelspin.style.display = 'block';
}, 500);
});
openModalTask.addEventListener('click', () => {
setTimeout(() => {
	modal_task.style.display = 'block';
	chikenss.style.display = 'none';
}, 500);
});
openModalShop.addEventListener('click', () => {
setTimeout(() => {
	chikenss.style.display = 'none';
	modal_shop.style.display = 'block';
	if (localStorage.getItem('chiken') == 0) {
		buychiken1.style.display = 'block';
		buychiken1yes.style.display = 'none';
		buychiken2yes.style.display = 'none';
		buychiken3yes.style.display = 'none';
		buychiken4yes.style.display = 'none';
		buychiken5yes.style.display = 'none';
	}
	if (localStorage.getItem('chiken') == 1) {
		buychiken1.style.display = 'none';
		buychiken1yes.style.display = 'block';
		buychiken2yes.style.display = 'none';
		buychiken3yes.style.display = 'none';
		buychiken4yes.style.display = 'none';
		buychiken5yes.style.display = 'none';
	}
	if (localStorage.getItem('chiken') == 2) {
		buychiken2.style.display = 'none';
		buychiken2yes.style.display = 'block';
		buychiken1.style.display = 'none';
		buychiken3yes.style.display = 'none';
		buychiken4yes.style.display = 'none';
		buychiken5yes.style.display = 'none';
	}
	if (localStorage.getItem('chiken') == 3) {
		buychiken3.style.display = 'none';
		buychiken3yes.style.display = 'block';
		buychiken1.style.display = 'none';
		buychiken2.style.display = 'none';
		buychiken4yes.style.display = 'none';
		buychiken5yes.style.display = 'none';
	}
	if (localStorage.getItem('chiken') == 4) {
		buychiken4.style.display = 'none';
		buychiken4yes.style.display = 'block';
		buychiken3.style.display = 'none';
		buychiken3yes.style.display = 'block';
		buychiken1.style.display = 'none';
		buychiken2.style.display = 'none';
		buychiken5yes.style.display = 'none';
	}
	if (localStorage.getItem('chiken') == 5) {
		buychiken5.style.display = 'none';
		buychiken5yes.style.display = 'block';
		buychiken4.style.display = 'none';
		buychiken4yes.style.display = 'block';
		buychiken3.style.display = 'none';
		buychiken3yes.style.display = 'block';
		buychiken1.style.display = 'none';
		buychiken2.style.display = 'none';
	}
}, 500);
});

closeModal.addEventListener('click', () => {
	modal_wheel.style.display = 'none';
	chikenss.style.display = 'block';
	wheelspin.style.display = 'none';
});
closeModalTask.addEventListener('click', () => {
	modal_task.style.display = 'none';
	chikenss.style.display = 'block';
});
closeModalShop.addEventListener('click', () => {
	modal_shop.style.display = 'none';
	chikenss.style.display = 'block';
});
closeModalProfil.addEventListener('click', () => {
	modal_profil.style.display = 'none';
});

let buychiken1 = document.getElementById('buychiken1');
buychiken1.addEventListener('click', () => {
	modal_shop.style.display = 'none';
	onechiken.style.display = 'block';
	localStorage.setItem('chiken',1);
	chikenss.style.display = 'block';
});

let buychiken2 = document.getElementById('buychiken2');
buychiken2.addEventListener('click', () => {
	modal_shop.style.display = 'none';
	if (counter < 100) {
		    nomoney.style.display = 'block';
			chikenss.style.display = 'block';
		setTimeout(() => {
			nomoney.style.display = 'none';
		}, 1000);
	  } else {
		cost1 = 100;
		counter = counter - cost1;
		document.querySelector("#counter").textContent = parseInt(counter);
		localStorage.setItem('counter',counter);
		onechiken.style.display = 'none';
		twochiken.style.display = 'block';
		localStorage.setItem('chiken',2);
		chikenss.style.display = 'block';
	}
});
let buychiken3 = document.getElementById('buychiken3');
buychiken3.addEventListener('click', () => {
	modal_shop.style.display = 'none';
	if (counter < 350) {
		    nomoney.style.display = 'block';
			chikenss.style.display = 'block';
		setTimeout(() => {
			nomoney.style.display = 'none';
		}, 1000);
	  } else {
		cost1 = 350;
		counter = counter - cost1;
		document.querySelector("#counter").textContent = parseInt(counter);
		localStorage.setItem('counter',counter);
		onechiken.style.display = 'none';
		twochiken.style.display = 'none';
		freechiken.style.display = 'block';
		localStorage.setItem('chiken',3);
		chikenss.style.display = 'block';
	}
});
let buychiken4 = document.getElementById('buychiken4');
buychiken4.addEventListener('click', () => {
	modal_shop.style.display = 'none';
	if (counter < 500) {
		    nomoney.style.display = 'block';
			chikenss.style.display = 'block';
		setTimeout(() => {
			nomoney.style.display = 'none';
		}, 1000);
	  } else {
		cost1 = 500;
		counter = counter - cost1;
		document.querySelector("#counter").textContent = parseInt(counter);
		localStorage.setItem('counter',counter);
		onechiken.style.display = 'none';
		twochiken.style.display = 'none';
		freechiken.style.display = 'none';
		fourchiken.style.display = 'block';
		localStorage.setItem('chiken',4);
		chikenss.style.display = 'block';
	}
});
let buychiken5 = document.getElementById('buychiken5');
buychiken5.addEventListener('click', () => {
	modal_shop.style.display = 'none';
	if (counter < 999) {
		    nomoney.style.display = 'block';
			chikenss.style.display = 'block';
		setTimeout(() => {
			nomoney.style.display = 'none';
		}, 1000);
	  } else {
		cost1 = 999;
		counter = counter - cost1;
		document.querySelector("#counter").textContent = parseInt(counter);
		localStorage.setItem('counter',counter);
		onechiken.style.display = 'none';
		twochiken.style.display = 'none';
		freechiken.style.display = 'none';
		fourchiken.style.display = 'none';
		fivechiken.style.display = 'block';
		localStorage.setItem('chiken',5);
		chikenss.style.display = 'block';
	}
});


function minBtOnclick(){
    counter += factor;
    document.querySelector("#counter").textContent = parseInt(counter);
	saveMain();
}
function minBtOnclick2(){
    counter += factor2;
    document.querySelector("#counter").textContent = parseInt(counter);
	saveMain();
}
function minBtOnclick3(){
    counter += factor3;
    document.querySelector("#counter").textContent = parseInt(counter);
	saveMain();
}
function minBtOnclick4(){
    counter += factor4;
    document.querySelector("#counter").textContent = parseInt(counter);
	saveMain();
}
function minBtOnclick5(){
    counter += factor5;
    document.querySelector("#counter").textContent = parseInt(counter);
	saveMain();
}
function minBtOnclick6(){
    counter += factor6;
    document.querySelector("#counter").textContent = parseInt(counter);
	saveMain();
}


function saveMain() {
    localStorage.setItem('counter', parseInt(counter));
}
setInterval(saveMain, 1000);

function rand() {


    total = Math.round(Math.random() * 10);

    switch (total) {
        case 1:
			setTimeout(() => {
				imagegif.style.display = 'block';
			}, 300);
			imagegif.style.display = 'none';
			console.log(1)
            break
        case 2:
			console.log(2)
            break
        case 3:
			console.log(3)
            break
        case 4:
			console.log(4)
            break
        case 5:
			console.log(5)
            break
		case 6:
			console.log(6)
			break
		case 7:
			console.log(7)
			break
		case 8:
			console.log(8)
			break
		case 9:
			console.log(9)
			break
		case 10:
			console.log(10)
			break
    };
};

let onechiken = document.getElementById('onechiken');
let onechikendown = document.getElementById('onechikendown');
onechiken.addEventListener('click', () => {
	onechiken.style.display = 'none';
	onechikendown.style.display = 'block';
	setTimeout(() => {
		onechiken.style.display = 'block';
		onechikendown.style.display = 'none';
		minBtOnclick()
	}, 300);
	rand()
});

let twochiken = document.getElementById('twochiken');
let twochikendown = document.getElementById('twochikendown');
twochiken.addEventListener('click', () => {
	twochiken.style.display = 'none';
	twochikendown.style.display = 'block';
	setTimeout(() => {
		twochiken.style.display = 'block';
		twochikendown.style.display = 'none';
		minBtOnclick2()
	}, 300);
	rand()
});

let freechiken = document.getElementById('freechiken');
let freechikendown = document.getElementById('freechikendown');
freechiken.addEventListener('click', () => {
	freechiken.style.display = 'none';
	freechikendown.style.display = 'block';
	setTimeout(() => {
		freechiken.style.display = 'block';
		freechikendown.style.display = 'none';
		minBtOnclick3()
	}, 300);
	rand()
});

let fourchiken = document.getElementById('fourchiken');
let fourchikendown = document.getElementById('fourchikendown');
fourchiken.addEventListener('click', () => {
	fourchiken.style.display = 'none';
	fourchikendown.style.display = 'block';
	setTimeout(() => {
		fourchiken.style.display = 'block';
		fourchikendown.style.display = 'none';
		minBtOnclick4()
	}, 300);
	rand()
});

let fivechiken = document.getElementById('fivechiken');
let fivechikendown = document.getElementById('fivechikendown');
fivechiken.addEventListener('click', () => {
	fivechiken.style.display = 'none';
	fivechikendown.style.display = 'block';
	setTimeout(() => {
		fivechiken.style.display = 'block';
		fivechikendown.style.display = 'none';
		minBtOnclick5()
	}, 300);
	rand()
});

let duck = document.getElementById('duck');
let duckdown = document.getElementById('duckdown');
duck.addEventListener('click', () => {
	duck.style.display = 'none';
	duckdown.style.display = 'block';
	setTimeout(() => {
		duck.style.display = 'block';
		duckdown.style.display = 'none';
		minBtOnclick6()
	}, 300);
	rand()
});


const cells = 31

// From 0.001 to 100
const items = [
  {name: 'iPhone', img: 'img/egg.png', chance: 10},
  {name: 'Keyboard', img: 'img/object.png', chance: 25},
  {name: 'Lolpas', img: 'img/object.png', chance: 50},
]

function getItem() {
  let item;

  while (!item) {
    const chance = Math.floor(Math.random() * 100)
    
    items.forEach(elm => {
      if (chance < elm.chance && !item) item = elm
    })
  }


  return item
}

function generateItems() {
  document.querySelector('.list').remove()
  document.querySelector('.scope').innerHTML = `
    <ul class="list"></ul>
  `
  
  const list = document.querySelector('.list')

  for (let i = 0; i < cells; i++) {
    const item = getItem()
    
    const li = document.createElement('li')
    li.setAttribute('data-item', JSON.stringify(item))
    li.classList.add('list__item')
    li.innerHTML = `
      <img src="${item.img}" alt="" />
    `

    list.append(li)
  }
}

generateItems()

let isStarted = false
let isFirstStart = true

function start() {
  if (isStarted) return
  else isStarted = true

  if (!isFirstStart) generateItems()
  else isFirstStart = false
  const list = document.querySelector('.list')

  setTimeout(() => {
    list.style.left = '50%'
    list.style.transform = 'translate3d(-50%, 0, 0)'
  }, 0)

  
  const item = list.querySelectorAll('li')[15]

  list.addEventListener('transitionend', () => {
    isStarted = false
    item.classList.add('active')
    const data = JSON.parse(item.getAttribute('data-item'))
    
    console.log(data);
	if (data == 1) {
		localStorage.setItem('chiken',5);
		console.log('хуй');
  } else {
	localStorage.setItem('chiken',5);
	console.log('хуй1');
	}
  }, {once: true})
}