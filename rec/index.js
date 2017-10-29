/*General Function Declaration*/
/*
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


$('.page-button')[0].style.borderRadius = '25%'
$('.page-button').forEach((e,i,a)=>{
	clicked(e,()=>{
		$('.page-button').forEach((e,i,a)=>{e.style.borderRadius = '50%'})
		e.style.borderRadius = '25%'
	})
})
*/

$(function(){
	$('.team').on('click', function(){
		swal({
		  	html: $(this).find('.des').html(),
		  	width: '70%',
		  	padding: '50'
		})
	});
	$(window).on('scroll', function() {
	   	if($(window).scrollTop() + $(window).height() == $(document).height()) {
	    	$('#iframe-curtain').hide();
	   	}else{
	   		$('#iframe-curtain').show();
	   	}
	});
})
