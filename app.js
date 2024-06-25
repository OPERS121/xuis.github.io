//localStorage.clear()
let counter = (localStorage.getItem('counter')) ? parseInt(localStorage.getItem('counter')) : 0;
let counters = (localStorage.getItem('counters')) ? parseInt(localStorage.getItem('counters')) : 0;
let counterspin = (localStorage.getItem('counterspin')) ? parseInt(localStorage.getItem('counterspin')) : 0;
let egg2 = (localStorage.getItem('egg2')) ? parseInt(localStorage.getItem('egg2')) : 0;
let egg3 = (localStorage.getItem('egg3')) ? parseInt(localStorage.getItem('egg3')) : 0;
let egg4 = (localStorage.getItem('egg4')) ? parseInt(localStorage.getItem('egg4')) : 0;
let egg5 = (localStorage.getItem('egg5')) ? parseInt(localStorage.getItem('egg5')) : 0;
let egg6 = (localStorage.getItem('egg6')) ? parseInt(localStorage.getItem('egg6')) : 0;
let egg7 = (localStorage.getItem('egg7')) ? parseInt(localStorage.getItem('egg7')) : 0;
let chiken = (localStorage.getItem('chiken')) ? parseInt(localStorage.getItem('chiken')) : 0;
let quest1 = (localStorage.getItem('quest1')) ? parseInt(localStorage.getItem('quest1')) : 0;
let quest2 = (localStorage.getItem('quest2')) ? parseInt(localStorage.getItem('quest2')) : 0;
let quest3 = (localStorage.getItem('quest3')) ? parseInt(localStorage.getItem('quest3')) : 0;
let factor = 1;
let factor2 = 2;
let factor3 = 3;
let factor4 = 4;
let factor5 = 5;
let factor6 = 8;
let factor7 = 10;
let factoregg2 = 1;
let factoregg3 = 1;
let factoregg4 = 1;
let factoregg5 = 1;
let factoregg6 = 1;
let factoregg7 = 1;

let circle = document.getElementById('circle');
let btnenter = document.getElementById('btnenter');
let container = document.getElementById('container');
let backgroundenter = document.getElementById('background');
let background1 = document.getElementById('background1');
let soundoff = document.getElementById('soundoff');
let soundon = document.getElementById('soundon');


function formatter(counter) {
	if (counter > 1000000000) {
	  return (counter / 1000000000).toFixed(2) + 'MM'
	} else if (counter > 1000000) {
	  return (counter / 1000000).toFixed(2) + 'M'
	} else if (counter > 1000) {
	  return (counter / 1000).toFixed(2) + 'K'
	}
	return counter.toString();
}

const audio = document.getElementById('audio');
soundoff.addEventListener('click', () => {
	setTimeout(() => {
		soundoff.style.display = 'none';
		soundon.style.display = 'block';
	}, 150);
	audio.pause();
});
soundon.addEventListener('click', () => {
	setTimeout(() => {
		soundoff.style.display = 'block';
		soundon.style.display = 'none';
	}, 150);
	audio.play();
	audio.loop = true;
});
btnenter.addEventListener('click', () => {
setTimeout(() => {
	btnenter.style.display = 'none';
	circle.style.display = 'block';
	avoidablevoid();
}, 150);
setTimeout(() => {
    audio.play();
	audio.loop = true;
	document.querySelector("#counter").textContent = formatter(counter);
	document.querySelector("#counters").textContent = ("КЛИКОВ ПО КУРИЦЕ: " + formatter(counters));
	document.querySelector("#counterspin").textContent = ("ПРОКРУТОВ РУЛЕТКИ: " + formatter(counterspin));
	document.querySelector("#egg2").textContent = parseInt(egg2);
	document.querySelector("#egg3").textContent = parseInt(egg3);
	document.querySelector("#egg4").textContent = parseInt(egg4);
	document.querySelector("#egg5").textContent = parseInt(egg5);
	document.querySelector("#egg6").textContent = parseInt(egg6);
	document.querySelector("#egg7").textContent = parseInt(egg7);
	if (localStorage.getItem('quest1') >= 0) {
		enterchanel.style.display = 'block';
		enterchanelyes.style.display = 'none';
	}
	if (localStorage.getItem('quest1') >= 1) {
		enterchanel.style.display = 'none';
		enterchanelyes.style.display = 'block';
	}
	if (localStorage.getItem('quest2') >= 0) {
		enterchanel2.style.display = 'block';
		enterchanel2yes.style.display = 'none';
	}
	if (localStorage.getItem('quest2') >= 1) {
		enterchanel2.style.display = 'none';
		enterchanel2yes.style.display = 'block';
	}
	if (localStorage.getItem('quest3') >= 0) {
		enterchanel3.style.display = 'block';
		enterchanel3yes.style.display = 'none';
	}
	if (localStorage.getItem('quest3') >= 1) {
		enterchanel3.style.display = 'none';
		enterchanel3yes.style.display = 'block';
	}
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
	if (localStorage.getItem('chiken') >= 7) {
		rabbit.style.display = 'block';
		duck.style.display = 'none';
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
}, 1000);
});

let openModalProfil = document.getElementById('openModalProfil');
let openModalWheel = document.getElementById('openModalWheel');
let openModalShop = document.getElementById('openModalShop');
let closeModalWheel = document.getElementById('closeModalWheel');
let closeModalTask = document.getElementById('closeModalTask');
let closeModalShop = document.getElementById('closeModalShop');
let closeModalProfil = document.getElementById('closeModalProfil');
let modal_profil = document.getElementById('modal_profil');
let modal_wheel = document.getElementById('modal_wheel');
let modal_task = document.getElementById('modal_task');
let modal_shop = document.getElementById('modal_shop');
let wheelspin = document.getElementById('wheelspin');
let startfarming = document.getElementById('startfarming');
let farming = document.getElementById('farming');

startfarming.addEventListener('click', () => {
	startfarming.style.display = 'none';
	farming.style.display = 'block';
	startf()
});


// на сколько минут ставим таймер
var count = 480;
// запущен таймер или нет
started = false;
stop_time = new Date();
start_time = new Date();


function avoidablevoid() {
	if (localStorage.getItem('stoptime') != null){
	if (localStorage.getItem('stoptime') != "NaN" && localStorage.getItem('starttime') != "NaN"){
	//даные с печени
	stop_time = new Date(localStorage.getItem('stoptime'));
	start_time = new Date(localStorage.getItem('starttime'));
	
	//дебаг
	console.log("cracker: "+stop_time);
	console.log("chips: "+start_time);
	intialise();
	started = true;
	farming.style.display = 'block';
	startfarming.style.display = 'none';
}
}
}



// запуск таймера по кнопке
function startf() {
  // если таймер уже запущен — выходим из функции
  if (started) {return};
  // запоминаем время нажатия
  start_time = new Date(); 
  localStorage.setItem('starttime',start_time.toString())
  // получаем время окончания таймера
  stop_time = start_time; 
  stop_time.setMinutes(stop_time.getMinutes() + count); 

	localStorage.setItem('stoptime',stop_time.toString())
	
	
	intialise()
    // помечаем, что таймер уже запущен
    started = true;
	
	
	//чтобы небыло багов с текстом
	{
		
	var now = new Date().getTime();
    // сколько времени осталось до конца таймера
    var remain = stop_time - now; 
	
    // переводим миллисекунды в минуты и секунды
	var hour = Math.floor( (remain % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60) );
    var min = Math.floor( (remain % (1000 * 60 * 60)) / (1000 * 60) );
    var sec = Math.floor( (remain % (1000 * 60)) / 1000 );
    // если значение текущей секунды меньше 10, добавляем вначале ведущий ноль
    sec = sec < 10 ? "0" + sec : sec;
    // отправляем значение таймера на страницу в нужный раздел
    document.getElementById("farming").innerHTML = hour + " hour " + min + " min " + sec + " sec ";
		
	}
	
}

function intialise()
{
  // запускаем ежесекундный отсчёт
  var countdown = setInterval(function() {
    // текущее время
    var now = new Date().getTime();
    // сколько времени осталось до конца таймера
    var remain = stop_time - now; 
	
    // переводим миллисекунды в минуты и секунды
	var hour = Math.floor( (remain % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60) );
    var min = Math.floor( (remain % (1000 * 60 * 60)) / (1000 * 60) );
    var sec = Math.floor( (remain % (1000 * 60)) / 1000 );
    // если значение текущей секунды меньше 10, добавляем вначале ведущий ноль
    sec = sec < 10 ? "0" + sec : sec;
    // отправляем значение таймера на страницу в нужный раздел
    document.getElementById("farming").innerHTML = hour + " hour " + min + " min " + sec + " sec ";
    // если время вышло
    if (remain < 0) {
		
      // останавливаем отсчёт
      clearInterval(countdown);
      // пишем текст вместо цифр
      document.getElementById("farming").innerHTML = "+1000 $COIN";
	  
     }
  }, 1000);
}

document.getElementById("farming").addEventListener('click', () => {
setTimeout(() => {
	var now = new Date().getTime();
    // сколько времени осталось до конца таймера
    var remain = stop_time - now; 
	
	if (remain < 0 && started == true) {
	  //тут сбор денек с фарминга
	  counter = counter + 1000;
	  document.querySelector("#counter").textContent = formatter(counter);
	  started=false;
	  
      farming.style.display = 'none';
	  startfarming.style.display = 'block';
	  
	  // куки под 0
	localStorage.setItem('starttime',"NaN")

	localStorage.setItem('stoptime',"NaN")
	}
}, 150);
});

openModalProfil.addEventListener('click', () => {
setTimeout(() => {
	chikenss.style.display = 'none';
	modal_profil.style.display = 'block';
	document.querySelector("#balance").textContent = (formatter(counter) + " $COIN");
}, 150);
});
openModalWheel.addEventListener('click', () => {
setTimeout(() => {
	modal_wheel.style.display = 'block';
	chikenss.style.display = 'none';
	wheelspin.style.display = 'block';
}, 150);
});
openModalTask.addEventListener('click', () => {
setTimeout(() => {
	modal_task.style.display = 'block';
	chikenss.style.display = 'none';
}, 150);
});
enterchanel.addEventListener('click', () => {
	document.location.href = 'https://t.me/birdtonchanel';
	setTimeout(() => {
		enterchanel.style.display = 'none';
		enterchanelyes.style.display = 'block';
	}, 150);
	localStorage.setItem('quest1',1);
	costquest1 = 150;
	counter = counter + costquest1;
	document.querySelector("#counter").textContent = formatter(counter);
	localStorage.setItem('counter',counter);
});
enterchanel2.addEventListener('click', () => {
	document.location.href = 'https://t.me/+RxmZpn7-f71lZmYy';
	setTimeout(() => {
		enterchanel2.style.display = 'none';
		enterchanel2yes.style.display = 'block';
	}, 150);
	localStorage.setItem('quest2',1);
	costquest2 = 300;
	counter = counter + costquest2;
	document.querySelector("#counter").textContent = formatter(counter);
	localStorage.setItem('counter',counter);
});
openModalShop.addEventListener('click', () => {
setTimeout(() => {
	chikenss.style.display = 'none';
	modal_shop.style.display = 'block';
	if (localStorage.getItem('chiken') <= 0) {
		buychiken1.style.display = 'block';
		buychiken1yes.style.display = 'none';
		buychiken2yes.style.display = 'none';
		buychiken3yes.style.display = 'none';
		buychiken4yes.style.display = 'none';
		buychiken5yes.style.display = 'none';
		buychiken6yes.style.display = 'none';
		buychiken7yes.style.display = 'none';
	}
	if (localStorage.getItem('chiken') == 1) {
		buychiken1.style.display = 'none';
		buychiken1yes.style.display = 'block';
		buychiken2yes.style.display = 'none';
		buychiken3yes.style.display = 'none';
		buychiken4yes.style.display = 'none';
		buychiken5yes.style.display = 'none';
		buychiken6yes.style.display = 'none';
		buychiken7yes.style.display = 'none';
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
		buychiken7yes.style.display = 'none';
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
		buychiken7yes.style.display = 'none';
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
		buychiken7yes.style.display = 'none';
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
		buychiken7yes.style.display = 'none';
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
		buychiken7yes.style.display = 'none';
	}
	if (localStorage.getItem('chiken') == 7) {
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
		buychiken7.style.display = 'none';
		buychiken7yes.style.display = 'block';
	}
}, 150);
});

closeModalWheel.addEventListener('click', () => {
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
	chikenss.style.display = 'block';
});

let buychiken1 = document.getElementById('buychiken1');
buychiken1.addEventListener('click', () => {
	modal_shop.style.display = 'none';
	if (counter < 1000) {
		nomoney.style.display = 'block';
		chikenss.style.display = 'block';
	setTimeout(() => {
		nomoney.style.display = 'none';
	}, 1000);
    } else {
		cost1 = 1000;
		counter = counter - cost1;
		document.querySelector("#counter").textContent = formatter(counter);
		localStorage.setItem('counter',counter);
		onechiken.style.display = 'block';
		localStorage.setItem('chiken',1);
		chikenss.style.display = 'block';
		localStorage.setItem('quest3',1);
		costquest3 = 500;
		counter = counter + costquest3;
	}
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
		document.querySelector("#counter").textContent = formatter(counter);
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
		document.querySelector("#counter").textContent = formatter(counter);
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
		document.querySelector("#counter").textContent = formatter(counter);
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
		document.querySelector("#counter").textContent = formatter(counter);
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
    } else if (egg6 < 1) {
		noegg.style.display = 'block';
		chikenss.style.display = 'block';
	setTimeout(() => {
		noegg.style.display = 'none';
	}, 1000);
    } else {
		cost1 = 500000;
		counter = counter - cost1;
		document.querySelector("#counter").textContent = formatter(counter);
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
let buychiken7 = document.getElementById('buychiken7');
buychiken7.addEventListener('click', () => {
	modal_shop.style.display = 'none';
	if (counter < 650000) {
		    nomoney.style.display = 'block';
			chikenss.style.display = 'block';
		setTimeout(() => {
			nomoney.style.display = 'none';
		}, 1000);
    } else if (egg7 < 1) {
		noegg.style.display = 'block';
		chikenss.style.display = 'block';
	setTimeout(() => {
		noegg.style.display = 'none';
	}, 1000);
    } else {
		cost1 = 650000;
		counter = counter - cost1;
		document.querySelector("#counter").textContent = formatter(counter);
		localStorage.setItem('counter',counter);
		costegg7 = 1;
		egg7 = egg7 - costegg7;
		document.querySelector("#egg7").textContent = parseInt(egg7);
		localStorage.setItem('egg7',egg7);
		onechiken.style.display = 'none';
		twochiken.style.display = 'none';
		freechiken.style.display = 'none';
		fourchiken.style.display = 'none';
		fivechiken.style.display = 'none';
		duck.style.display = 'none';
		rabbit.style.display = 'block';
		localStorage.setItem('chiken',7);
		chikenss.style.display = 'block';
	}
});


function minBtOnclick(){
    counter += factor;
	counters ++;
    document.querySelector("#counter").textContent = formatter(counter);
	document.querySelector("#counters").textContent = ("КЛИКОВ ПО КУРИЦЕ: " + formatter(counters));
	saveMain();
}
function minBtOnclick2(){
    counter += factor2;
	counters ++;
    document.querySelector("#counter").textContent = formatter(counter);
	document.querySelector("#counters").textContent = ("КЛИКОВ ПО КУРИЦЕ: " + formatter(counters));
	saveMain();
}
function minBtOnclick3(){
    counter += factor3;
	counters ++;
    document.querySelector("#counter").textContent = formatter(counter);
	document.querySelector("#counters").textContent = ("КЛИКОВ ПО КУРИЦЕ: " + formatter(counters));
	saveMain();
}
function minBtOnclick4(){
    counter += factor4;
	counters ++;
    document.querySelector("#counter").textContent = formatter(counter);
	document.querySelector("#counters").textContent = ("КЛИКОВ ПО КУРИЦЕ: " + formatter(counters));
	saveMain();
}
function minBtOnclick5(){
    counter += factor5;
	counters ++;
    document.querySelector("#counter").textContent = formatter(counter);
	document.querySelector("#counters").textContent = ("КЛИКОВ ПО КУРИЦЕ: " + formatter(counters));
	saveMain();
}
function minBtOnclick6(){
    counter += factor6;
	counters ++;
    document.querySelector("#counter").textContent = formatter(counter);
	document.querySelector("#counters").textContent = ("КЛИКОВ ПО КУРИЦЕ: " + formatter(counters));
	saveMain();
}
function minBtOnclick7(){
    counter += factor7;
	counters ++;
    document.querySelector("#counter").textContent = formatter(counter);
	document.querySelector("#counters").textContent = ("КЛИКОВ ПО КУРИЦЕ: " + formatter(counters));
	saveMain();
}
function spinwheel(){
	counterspin ++;
	document.querySelector("#counterspin").textContent = ("ПРОКРУТОВ РУЛЕТКИ: " + formatter(counterspin));
	saveMain();
}


function saveMain() {
    localStorage.setItem('counter', parseInt(counter));
	localStorage.setItem('counters', parseInt(counters));
	localStorage.setItem('counterspin', parseInt(counterspin));
	localStorage.setItem('egg2', parseInt(egg2));
	localStorage.setItem('egg3', parseInt(egg3));
	localStorage.setItem('egg4', parseInt(egg4));
	localStorage.setItem('egg5', parseInt(egg5));
	localStorage.setItem('egg6', parseInt(egg6));
	localStorage.setItem('egg7', parseInt(egg7));
}
setInterval(saveMain, 1000);

let onechiken = document.getElementById('onechiken');
let onechikendown = document.getElementById('onechikendown');
onechiken.addEventListener('click', () => {
	onechiken.style.display = 'none';
	onechikendown.style.display = 'block';
	setTimeout(() => {
		onechiken.style.display = 'block';
		onechikendown.style.display = 'none';
		minBtOnclick()
	}, 600);
	setTimeout(() => {
		clickchikentext1.style.display = 'block';
	}, 600);
	clickchikentext1.style.display = 'none';
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
	}, 600);
	setTimeout(() => {
		clickchikentext2.style.display = 'block';
	}, 600);
	clickchikentext2.style.display = 'none';
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
	}, 600);
	setTimeout(() => {
		clickchikentext3.style.display = 'block';
	}, 600);
	clickchikentext3.style.display = 'none';
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
	}, 600);
	setTimeout(() => {
		clickchikentext4.style.display = 'block';
	}, 600);
	clickchikentext4.style.display = 'none';
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
	}, 600);
	setTimeout(() => {
		clickchikentext5.style.display = 'block';
	}, 600);
	clickchikentext5.style.display = 'none';
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
	}, 600);
	setTimeout(() => {
		clickchikentext6.style.display = 'block';
	}, 600);
	clickchikentext6.style.display = 'none';
});

let rabbit = document.getElementById('rabbit');
let rabbitdown = document.getElementById('rabbitdown');
rabbit.addEventListener('click', () => {
	rabbit.style.display = 'none';
	rabbitdown.style.display = 'block';
	setTimeout(() => {
		rabbit.style.display = 'block';
		rabbitdown.style.display = 'none';
		minBtOnclick7()
	}, 600);
	setTimeout(() => {
		clickchikentext7.style.display = 'block';
	}, 600);
	clickchikentext7.style.display = 'none';
});

let nopobeda = document.getElementById('nopobeda');
const cells = 31

// From 0.001 to 100
const items = [
  {name: 'rabbit', img: 'img/egg7.png', chance: 1},
  {name: 'duck', img: 'img/egg6.png', chance: 2},
  {name: 'chiken5', img: 'img/egg5.png', chance: 3},
  {name: 'chiken4', img: 'img/egg4.png', chance: 5},
  {name: 'chiken3', img: 'img/egg3.png', chance: 7.5},
  {name: 'chiken2', img: 'img/egg2.png', chance: 12.5},
  {name: 'chiken1', img: 'img/egg1.png', chance: 70},
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
	if (counter < 1000) {
		nomoney.style.display = 'block';
	setTimeout(() => {
		nomoney.style.display = 'none';
	}, 1000);
} else {
	document.getElementById('closeModalWheel').style.display = 'none';
	document.getElementById('startwheel').style.display = 'none';
	setTimeout(function(){
		document.getElementById('startwheel').style.display = 'block';
		document.getElementById('closeModalWheel').style.display = 'block';
	}, 6500);
	cost1 = 1000;
	counter = counter - cost1;
	document.querySelector("#counter").textContent = formatter(counter);
	localStorage.setItem('counter',counter);
	spinwheel()

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
		nopobeda.style.display = 'block';
	    setTimeout(() => {
			nopobeda.style.display = 'none';
	    }, 1500);
	  } else if (data["name"] == "chiken2") {
		  egg2 += factoregg2;
		  document.querySelector("#egg2").textContent = parseInt(egg2);
	  } else if (data["name"] == "chiken3") {
		  egg3 += factoregg3;
		  document.querySelector("#egg3").textContent = parseInt(egg3);
	  } else if (data["name"] == "chiken4") {
		  egg4 += factoregg4;
		  document.querySelector("#egg4").textContent = parseInt(egg4);
	  } else if (data["name"] == "chiken5") {
		  egg5 += factoregg5;
		  document.querySelector("#egg5").textContent = parseInt(egg5);
	  } else if (data["name"] == "duck") {
		  egg6 += factoregg6;
		  document.querySelector("#egg6").textContent = parseInt(egg6);
	  } else if (data["name"] == "rabbit") {
		  egg7 += factoregg7;
		  document.querySelector("#egg7").textContent = parseInt(egg7);
	    }
	}, {once: true})
}
}