$(function(){
    agendalist = {}
    $.getJSON( "speaker.json", function( data ) {
      agendalist = data[0]
    })
    $('.nav').on('click', function(e){
        e.preventDefault()
        var target = $(this.getAttribute('href'))
        if( target.length ) {
            e.preventDefault()
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 500)
        }
    })
    $('[data-agenda-id]').on('click', function(e){
        e.preventDefault()
        let agendaid = $(this).attr('data-agenda-id')
        $('#agenda-title').text(agendalist[agendaid].title)
        $('#agenda-description>p').html(agendalist[agendaid].intro)
        $('#agenda-time').text(agendalist[agendaid].time)
        $('#agenda-name').text(agendalist[agendaid].speaker)
        $('#agenda-headpic-img').attr('src', 'speaker-avatar/' + agendaid + '.jpg')
        $('#agenda-headpic-img').attr('alt', agendalist[agendaid].speaker)
        $('#agenda-speakerinfo>p').html(agendalist[agendaid].speakerintro)
        $(document.body).css('overflow-y', 'hidden')
        $('#agenda-content').css("display", "flex").hide().fadeIn('100', function(){

        })
    })
    $('#agenda-exit').on('click', function(e){
        e.preventDefault()
        $(document.body).css('overflow-y', 'auto')
        $('#agenda-content').fadeOut('100', function(){
            $('#agenda-headpic-img').attr('src', '')
        })
    })
})
