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
      html += '<div class="item-title">Bahía Inglesa</div>';
      html += '<p></p>';
      html += '<div class="item-price">$199</div>';
      html += '<button>Add to cart</button>';
      html += '<div><a href="#" class="info-link">More info</a></div>';
      html += '<div class="more-info"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempore explicabo ab! Ipsum unde modi quod ipsam ducimus, repudiandae inventore. Accusamus, odio eveniet obcaecati placeat natus explicabo sapiente temporibus repudiandae.</p></div>';
      html += '</div>'

      $('body').append(html);
    })
  })
})