$(document).ready(function() { 
  // $('.item-box').on('click', 'a.info-link', function(event) {
  //   event.preventDefault()

  //   //Show() and hide() are replaced by toggle()
  //   $(this).closest('.item-box').find('.more-info').slideToggle('fast') 
  // })

  $.ajax('data.json', {
    dataType: 'json',
    contentType: 'application/json',
    cache: false
  })
  .done(function(response) {
    let html;

    $.each(response, function(index, element) {
      html = '<div class="item-box" data-id="'+element.id+'">';
      html += '<img src="images/'+element.image+'" />';
      html += '<div class="item-title">'+element.name+'</div>';
      html += '<p>'+element.description+'</p>';
      html += '<div class="item-price">'+element.price+'</div>';
      html += '<button>Add to cart</button>';
      html += '<div><a href="#" class="info-link">More info</a></div>';
      html += '<div class="more-info"><p>'+element.moreInfo+'</p></div>';
      html += '</div>'

      $('body').append(html);
    });
  });

  $('body').on('click', '.info-link', function(event) {
    event.preventDefault()
    $(this).closest('.item-box').find('.more-info').slideToggle('fast') 
  })

  let cart = 0;

  $('body').on('click', '.item-box button', function(event) {
    event.preventDefault();
    let id = +$(this).closest('.item-box').data('id');

    $.ajax('addItem.json', {
      data: {id: id},
      type: 'post',
      dataType: 'json',
      contentType: 'application/json'
    })
    .done(function(response) {
      cart += response.price;
      $('#total-cost').text('Total $'+cart);
    })
  })

})