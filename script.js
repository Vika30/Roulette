var bSrart = document.getElementById("startRoulette");
var imgRoulette = document.getElementById("imgRoulette");

var arrImg = [
	"img/2d50a91edc61228fe96aa743b639098a.jpg", 
	"img/supercoolpics_05_14042013113524.jpg", 
	"img/jjok.jpeg", 
	"img/enot-dom-enota-copy.jpg", 
	"img/aaa.jpg"];

var i = 3;
var a = 0;

function rand() {
	return Math.round(Math.random() * (4),1);
}

bSrart.onclick = function () {

	// начать повторы с интервалом 0,2 сек
	var timerId = setInterval(function() {
		a= rand();
		if(a==1 && i!=0) {
			i--;
			a++;
		}
		else if(a==1 && i==0)
		{
			i=3;
		}
		
		imgRoulette.src = arrImg[a];
	}, 200);

	// через 1 сек остановить повторы
	setTimeout(function() {
	  clearInterval(timerId);
	  console.log( 'стоп' );
	}, 1000);
}
