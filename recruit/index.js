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

/*Page Flipping*/
var curpage = 0;
$('.page-button')[0].style.borderRadius = '25%'
function flip(i){
	$('#scroll-wrapper').style.left = i * -100 + '%'
}
$('.page-button').forEach((e,i,a)=>{
	clicked(e,()=>{
		flip(i)
		$('.page-button').forEach((e,i,a)=>{e.style.borderRadius = '50%'})
		e.style.borderRadius = '25%'
	})
})

/*Team Description Onclick*/
function showteamdes(i){
	var e = $('#teams .des')[i]
	var f = $('#teams .team>.wrapper')[i]
	var g = $('#teams .team')[i]
	var h = $('#teams>.wrapper')
	e.style.zIndex = 10
	e.style.opacity = 1
	f.style.backgroundColor = 'rgba(255,255,192,1)'
	g.style.padding = '5px'
	h.style.filter = 'blur(20px)'
}
function hideteamdes(i){
	var e = $('#teams .des')[i]
	var f = $('#teams .team>.wrapper')[i]
	var g = $('#teams .team')[i]
	var h = $('#teams>.wrapper')
	e.style.opacity = 0
	setTimeout(()=>{e.style.zIndex = -10},300)
	f.style.backgroundColor = ''
	g.style.padding = ''
	h.style.filter = 'blur(0)'
}
$('#teams .team').forEach((e,i,a)=>{
	clicked(e,()=>{showteamdes(i)})
})
$('#teams .des').forEach((e,i,a)=>{
	clicked(e,()=>{hideteamdes(i)})
})