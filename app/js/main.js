$(function(){

  $('.shop__filter-btn').on('click', function () {
    $('.shop__filter').slideToggle();
  })

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.slide-product__thumb').slick({
    asNavFor: '.slide-product__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.slide-product__big').slick({
    asNavFor: '.slide-product__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 651,
        settings: {
          draggable: true
        }
      }
    ]
  });

  $('.product-one__num').styler({});

  $('.filter-products__star').rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "5px",
    readOnly: true
  });

  $('.shop-content__item-star, .product-one__star').rateYo({
    starWidth: "16px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "12px",
    readOnly: true
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  var mixer = mixitup('.product__items');

  var mixer = mixitup('.design__items');
});