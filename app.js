let counter = (localStorage.getItem('counter')) ? parseInt(localStorage.getItem('counter')) : 0;
let egg2 = (localStorage.getItem('egg2')) ? parseInt(localStorage.getItem('egg2')) : 0;
let egg3 = (localStorage.getItem('egg3')) ? parseInt(localStorage.getItem('egg3')) : 0;
let egg4 = (localStorage.getItem('egg4')) ? parseInt(localStorage.getItem('egg4')) : 0;
let egg5 = (localStorage.getItem('egg5')) ? parseInt(localStorage.getItem('egg5')) : 0;
let egg6 = (localStorage.getItem('egg6')) ? parseInt(localStorage.getItem('egg6')) : 0;
let factor = 1;
let factor2 = 2;
let factor3 = 3;
let factor4 = 4;
let factor5 = 5;
let factor6 = 8;
let factoregg2 = 1;
let factoregg3 = 1;
let factoregg4 = 1;
let factoregg5 = 1;
let factoregg6 = 1;

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
	document.querySelector("#counter").textContent = parseInt(counter/1000).toFixed(0)+'K';
	document.querySelector("#egg2").textContent = parseInt(egg2);
	document.querySelector("#egg3").textContent = parseInt(egg3);
	document.querySelector("#egg4").textContent = parseInt(egg4);
	document.querySelector("#egg5").textContent = parseInt(egg5);
	document.querySelector("#egg6").textContent = parseInt(egg6);
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
		buychiken6yes.style.display = 'none';
	}
	if (localStorage.getItem('chiken') == 1) {
		buychiken1.style.display = 'none';
		buychiken1yes.style.display = 'block';
		buychiken2yes.style.display = 'none';
		buychiken3yes.style.display = 'none';
		buychiken4yes.style.display = 'none';
		buychiken5yes.style.display = 'none';
		buychiken6yes.style.display = 'none';
	}
	if (localStorage.getItem('chiken') == 2) {
		buychiken1.style.display = 'none';
		buychiken1yes.style.display = 'block';
		buychiken2.style.display = 'none';
		buychiken2yes.style.display = 'block';
		buychiken3yes.style.display = 'none';
		buychiken4yes.style.display = 'none';
		buychiken5yes.style.display = 'none';
		buychiken6yes.style.display = 'none';
	}
	if (localStorage.getItem('chiken') == 3) {
		buychiken1.style.display = 'none';
		buychiken1yes.style.display = 'block';
		buychiken2.style.display = 'none';
		buychiken2yes.style.display = 'block';
		buychiken3.style.display = 'none';
		buychiken3yes.style.display = 'block';
		buychiken4yes.style.display = 'none';
		buychiken5yes.style.display = 'none';
		buychiken6yes.style.display = 'none';
	}
	if (localStorage.getItem('chiken') == 4) {
		buychiken1.style.display = 'none';
		buychiken1yes.style.display = 'block';
		buychiken2.style.display = 'none';
		buychiken2yes.style.display = 'block';
		buychiken3.style.display = 'none';
		buychiken3yes.style.display = 'block';
		buychiken4.style.display = 'none';
		buychiken4yes.style.display = 'block';
		buychiken5yes.style.display = 'none';
		buychiken6yes.style.display = 'none';
	}
	if (localStorage.getItem('chiken') == 5) {
		buychiken1.style.display = 'none';
		buychiken1yes.style.display = 'block';
		buychiken2.style.display = 'none';
		buychiken2yes.style.display = 'block';
		buychiken3.style.display = 'none';
		buychiken3yes.style.display = 'block';
		buychiken4.style.display = 'none';
		buychiken4yes.style.display = 'block';
		buychiken5.style.display = 'none';
		buychiken5yes.style.display = 'block';
		buychiken6.style.display = 'block';
		buychiken6yes.style.display = 'none';
	}
	if (localStorage.getItem('chiken') == 6) {
		buychiken1.style.display = 'none';
		buychiken1yes.style.display = 'block';
		buychiken2.style.display = 'none';
		buychiken2yes.style.display = 'block';
		buychiken3.style.display = 'none';
		buychiken3yes.style.display = 'block';
		buychiken4.style.display = 'none';
		buychiken4yes.style.display = 'block';
		buychiken5.style.display = 'none';
		buychiken5yes.style.display = 'block';
		buychiken6.style.display = 'none';
		buychiken6yes.style.display = 'block';
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
	if (counter < 10000) {
		nomoney.style.display = 'block';
		chikenss.style.display = 'block';
	setTimeout(() => {
		nomoney.style.display = 'none';
	}, 1000);
    } else if (egg2 < 1) {
		noegg.style.display = 'block';
		chikenss.style.display = 'block';
	setTimeout(() => {
		noegg.style.display = 'none';
	}, 1000);
    } else {
		cost1 = 10000;
		counter = counter - cost1;
		document.querySelector("#counter").textContent = parseInt(counter/1000).toFixed(0)+'K';
		localStorage.setItem('counter',counter);
		costegg2 = 1;
		egg2 = egg2 - costegg2;
		document.querySelector("#egg2").textContent = parseInt(egg2);
		localStorage.setItem('egg2',egg2);
		onechiken.style.display = 'none';
		twochiken.style.display = 'block';
		localStorage.setItem('chiken',2);
		chikenss.style.display = 'block';
	}
});
let buychiken3 = document.getElementById('buychiken3');
buychiken3.addEventListener('click', () => {
	modal_shop.style.display = 'none';
	if (counter < 50000) {
		    nomoney.style.display = 'block';
			chikenss.style.display = 'block';
		setTimeout(() => {
			nomoney.style.display = 'none';
		}, 1000);
    } else if (egg3 < 1) {
		noegg.style.display = 'block';
		chikenss.style.display = 'block';
	setTimeout(() => {
		noegg.style.display = 'none';
	}, 1000);
    } else {
		cost1 = 50000;
		counter = counter - cost1;
		document.querySelector("#counter").textContent = parseInt(counter/1000).toFixed(0)+'K';
		localStorage.setItem('counter',counter);
		costegg3 = 1;
		egg3 = egg3 - costegg3;
		document.querySelector("#egg3").textContent = parseInt(egg3);
		localStorage.setItem('egg3',egg3);
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
	if (counter < 200000) {
		    nomoney.style.display = 'block';
			chikenss.style.display = 'block';
		setTimeout(() => {
			nomoney.style.display = 'none';
		}, 1000);
    } else if (egg4 < 1) {
		noegg.style.display = 'block';
		chikenss.style.display = 'block';
	setTimeout(() => {
		noegg.style.display = 'none';
	}, 1000);
    } else {
		cost1 = 200000;
		counter = counter - cost1;
		document.querySelector("#counter").textContent = parseInt(counter/1000).toFixed(0)+'K';
		localStorage.setItem('counter',counter);
		costegg4 = 1;
		egg4 = egg4 - costegg4;
		document.querySelector("#egg4").textContent = parseInt(egg4);
		localStorage.setItem('egg4',egg4);
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
	if (counter < 250000) {
		    nomoney.style.display = 'block';
			chikenss.style.display = 'block';
		setTimeout(() => {
			nomoney.style.display = 'none';
		}, 1000);
    } else if (egg5 < 1) {
		noegg.style.display = 'block';
		chikenss.style.display = 'block';
	setTimeout(() => {
		noegg.style.display = 'none';
	}, 1000);
    } else {
		cost1 = 250000;
		counter = counter - cost1;
		document.querySelector("#counter").textContent = parseInt(counter/1000).toFixed(0)+'K';
		localStorage.setItem('counter',counter);
		costegg5 = 1;
		egg5 = egg5 - costegg5;
		document.querySelector("#egg5").textContent = parseInt(egg5);
		localStorage.setItem('egg5',egg5);
		onechiken.style.display = 'none';
		twochiken.style.display = 'none';
		freechiken.style.display = 'none';
		fourchiken.style.display = 'none';
		fivechiken.style.display = 'block';
		localStorage.setItem('chiken',5);
		chikenss.style.display = 'block';
	}
});
let buychiken6 = document.getElementById('buychiken6');
buychiken6.addEventListener('click', () => {
	modal_shop.style.display = 'none';
	if (counter < 500000) {
		    nomoney.style.display = 'block';
			chikenss.style.display = 'block';
		setTimeout(() => {
			nomoney.style.display = 'none';
		}, 1000);
    } else if (egg6 < 500) {
		noegg.style.display = 'block';
		chikenss.style.display = 'block';
	setTimeout(() => {
		noegg.style.display = 'none';
	}, 1000);
    } else {
		cost1 = 500000;
		counter = counter - cost1;
		document.querySelector("#counter").textContent = parseInt(counter/1000).toFixed(0)+'K';
		localStorage.setItem('counter',counter);
		costegg6 = 1;
		egg6 = egg6 - costegg6;
		document.querySelector("#egg6").textContent = parseInt(egg6);
		localStorage.setItem('egg6',egg6);
		onechiken.style.display = 'none';
		twochiken.style.display = 'none';
		freechiken.style.display = 'none';
		fourchiken.style.display = 'none';
		fivechiken.style.display = 'none';
		duck.style.display = 'block';
		localStorage.setItem('chiken',6);
		chikenss.style.display = 'block';
	}
});


function minBtOnclick(){
    counter += factor;
    document.querySelector("#counter").textContent = parseInt(counter/1000).toFixed(0)+'K';
	saveMain();
}
function minBtOnclick2(){
    counter += factor2;
    document.querySelector("#counter").textContent = parseInt(counter/1000).toFixed(0)+'K';
	saveMain();
}
function minBtOnclick3(){
    counter += factor3;
    document.querySelector("#counter").textContent = parseInt(counter/1000).toFixed(0)+'K';
	saveMain();
}
function minBtOnclick4(){
    counter += factor4;
    document.querySelector("#counter").textContent = parseInt(counter/1000).toFixed(0)+'K';
	saveMain();
}
function minBtOnclick5(){
    counter += factor5;
    document.querySelector("#counter").textContent = parseInt(counter/1000).toFixed(0)+'K';
	saveMain();
}
function minBtOnclick6(){
    counter += factor6;
    document.querySelector("#counter").textContent = parseInt(counter/1000).toFixed(0)+'K';
	saveMain();
}


function saveMain() {
    localStorage.setItem('counter', parseInt(counter));
	localStorage.setItem('egg2', parseInt(egg2));
	localStorage.setItem('egg3', parseInt(egg3));
	localStorage.setItem('egg4', parseInt(egg4));
	localStorage.setItem('egg5', parseInt(egg5));
	localStorage.setItem('egg6', parseInt(egg6));
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
            break
        case 2:
			//console.log(2)
            break
        case 3:
			//console.log(3)
            break
        case 4:
			//console.log(4)
            break
        case 5:
			//console.log(5)
            break
		case 6:
			//console.log(6)
			break
		case 7:
			//console.log(7)
			break
		case 8:
			//console.log(8)
			break
		case 9:
			//console.log(9)
			break
		case 10:
			//console.log(10)
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
  {name: 'duck', img: 'img/duck.png', chance: 2},
  {name: 'chiken5', img: 'img/chiken5.png', chance: 3},
  {name: 'chiken4', img: 'img/chiken4.png', chance: 5},
  {name: 'chiken3', img: 'img/chiken3.png', chance: 7.5},
  {name: 'chiken2', img: 'img/chiken2.png', chance: 12.5},
  {name: 'chiken1', img: 'img/chiken1.png', chance: 70},
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
	if (data["name"] == "chiken1") {
		console.log('chiken1');
    } else if (data["name"] == "chiken2") {
		egg2 += factoregg2;
        document.querySelector("#egg2").textContent = parseInt(egg2);
	    console.log('chiken2');
    } else if (data["name"] == "chiken3") {
		egg3 += factoregg3;
        document.querySelector("#egg3").textContent = parseInt(egg3);
	    console.log('chiken3');
	} else if (data["name"] == "chiken4") {
		egg4 += factoregg4;
        document.querySelector("#egg4").textContent = parseInt(egg4);
	    console.log('chiken4');
	} else if (data["name"] == "chiken5") {
		egg5 += factoregg5;
        document.querySelector("#egg5").textContent = parseInt(egg5);
	    console.log('chiken5');
	} else if (data["name"] == "duck") {
		egg6 += factoregg6;
        document.querySelector("#egg6").textContent = parseInt(egg6);
	    console.log('duck');
	}
  }, {once: true})
}