AOS.init();

$(document).ready(() => {
  const closePlayer = () => {
    $("#music-player").fadeOut();
    setTimeout(() => {
      $("#show-music-player").fadeIn();
    }, 500);
  };

  const showPlayer = () => {
    $("#show-music-player").fadeOut();
    setTimeout(() => {
      $("#music-player").fadeIn();
    }, 500);
  };

  $("#close-button").click(() => closePlayer());
  $("#show-player").click(() => showPlayer());

  //Stop vertical scrolling
});
var $body = $(document);
$body.bind("scroll", () => {
  if ($body.scrollLeft() !== 0) {
    $body.scrollLeft(0);
  }
});
