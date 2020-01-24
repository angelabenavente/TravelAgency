$(document).ready(function() { 
  $('.item-box').on('click', 'a.info-link', function(event) {
    event.preventDefault()

    //Show() and hide() are replaced by toggle()
    $(this).closest('.item-box').find('.more-info').toggle(1000, function() {

    })
  })

})