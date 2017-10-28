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
$('.page-button')[0].style.borderRadius = '25%'
$('.page-button').forEach((e,i,a)=>{
	clicked(e,()=>{
		$('.page-button').forEach((e,i,a)=>{e.style.borderRadius = '50%'})
		e.style.borderRadius = '25%'
	})
})
 
curpage = -1
$('#teams>.team').forEach((e,i,a)=>{
	clicked(e,()=>{
		if(curpage >= 0)
			$('#teams .des')[curpage].style.display = 'none'
		if(i != curpage){
			$('#teams .des')[i].style.display = 'block'
			curpage = i
		}
		else
			curpage = -1
	})
})
