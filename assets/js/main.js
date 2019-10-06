$(document).ready(function() {
  resizeCardToSquareShape();

  showInstagramFeed();

  $(window).resize(function() {
    resizeCardToSquareShape()
  });
});

function resizeCardToSquareShape() {
  if ($(window).width() < 800) {
    $(".card-image").height($(".card-image").width());
  }
}

function showInstagramFeed() {
  if ( $(".instagram-feed-container").length == false ) {
    return;
  }
  var userFeed = new Instafeed({
    get: 'user',
    userId: '32066934',
    accessToken: '32066934.d7cc237.35dea59d9648435c9ba6dfd063f2d93c',
    resolution: 'standard_resolution',
    template: '<div class="instagram-element"><a href="{{link}}" target="_blank"><img src="{{image}}"/></a></div>',
    limit: '20',
    after: function () {
      $('.instagram-feed').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<div class="arrow-prev ion-ios-arrow-left"></div>',
        nextArrow: '<div class="arrow-next ion-ios-arrow-right"></div>',
      });
    }
  });
  userFeed.run();
}
