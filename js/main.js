$(function(){

  $("#cart-items").slideUp();
  $(".cart").on("click", function () {
  $("#cart-items").slideToggle();
  });

  $("#items-basket").text("(" + ($("#list-item").children().length) + ")");

  $('body').on('click', '.info-link', function(event) {
    event.preventDefault()
    $(this).closest('.item').find('.more-info').slideToggle('fast', function() {
      if ($(this).is(':visible')) {
        $(this).prev('div').html('<a href="#" class="info-link"><i class="fas fa-times-circle"></i></a>');
      } else {
        $(this).prev('div').html('<a href="#" class="info-link"><i class="fas fa-info-circle"></a>');          
      }        
  });       
  })


  $(".item").on("click", '.item-detail button', function () {
    $("#cart-items").slideDown();
   setTimeout(function(){
      $("#cart-items").slideUp();
   }, 2000)
    //add items to basket
    $(this).each(function () {
      var name = $(this).closest(".item-detail").children("h4").text();
      var remove = "<button class='remove'><i class='fas fa-times'></i></button>";
      var cena = "<span class='eachPrice'>" + (parseFloat($(this).closest(".item-detail").children('.prices').children('.priceContainer').children(".price").text())) + "</span>";
      $("#list-item").append("<li>" + name + "&#09; - &#09;" + cena + "$" + remove + "</li>");

      //number of items in basket
      $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
      $("#items-basket").text();
      
        //calculate total price
        var totalPrice = 0;
          $(".eachPrice").each(function (){ 
            var cenaEach = parseFloat($(this).text());
            totalPrice+=cenaEach;
          });
          $("#total-price").text(totalPrice + "$");
    });

    //remove items from basket
    $(".remove").on("click", function () {
      $(this).parent().remove();

          var totalPrice = 0;
          $(".eachPrice").each(function (){ 
            var cenaEach = parseFloat($(this).text());
            totalPrice+=cenaEach;
          });
          $("#total-price").text(totalPrice + "$");
      $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
    });
  });
})