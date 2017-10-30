/*General Function Declaration*/
function $(a){
	var e = document.querySelectorAll(a)
	if (e.length == 1) return e[0]
	else return e
}
function loaded(e,f){
	e.addEventListener('load',f)
}
function clicked(e,f){
	e.addEventListener('click',f)
}

if(!String.prototype.includes)
	String.prototype.includes = function() {
		'use strict';
		return String.prototype.indexOf.apply(this, arguments) !== -1;
	};
function agentHas(a){return navigator.userAgent.includes(a)}
var isIE = !(agentHas('Chrome')||agentHas('Opera')||agentHas('Safari')||
	agentHas('Edge')||agentHas('Firefox')||agentHas('AppleWebKit'));

function showpage(){
//	$('#loadpage').style.position = 'absolute'
	$('#loadpage>span').style.opacity = 0;
	$('#loadpage>.left').style.left = 0
	$('#loadpage>.right').style.right = 0
	$('#loadpage>.left').style.top = 0
	$('#loadpage>.right').style.bottom = 0
	$('body').style.overflowY = 'auto'
	setTimeout(()=>{
		$('html').scrollTop = 0
		$('#loadpage').style.opacity = 0
		setTimeout(()=>{
			$('#loadpage').style.display = 'none'
		},300)
	},800)
}

if(isIE){
	$('#loadpage>span').innerHTML = 'Recommeded with Chrome. <br>Click to view anyway.';
	clicked($('#loadpage'),()=>{
		$('#loadpage>span').innerHTML = 'L O A D I N G . . .'
		loaded(window,showpage)
	})
}
else 
	loaded(window,showpage)

loaded(window,()=>{
	$('.team').forEach((e,i,a)=>{clicked(e,()=>{
		swal({
			title: $('.team>.title')[i].innerHTML, 
			html: $('.team>.des')[i].innerHTML,
			width: '70%',
			padding: '50'
		})
		$('.swal2-modal').scrollTop = 0
	})})
})

$('#loadpage>span').style.opacity = 1;