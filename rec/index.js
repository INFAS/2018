$(function(){
	$('.team').on('click', function(){
		swal({
			html: $(this).find('.des').html(),
			width: '70%',
			padding: '50'
		})
	});
})
