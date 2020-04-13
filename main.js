AOS.init();

$(document).ready(() => {
  const closePlayer = () => {
    $("#music-player").fadeOut();
    $("#show-music-player").fadeIn();
  };

  const showPlayer = () => {
    $("#show-music-player").fadeOut();
    $("#music-player").fadeIn();
  };

  $("#close-button").click(() => closePlayer());
  $("#show-player").click(() => showPlayer());
});
