$("#sidecall").on('click', () => {
  $('.ui.sidebar')
    .sidebar('toggle');
});

$("#sidecall").on('click', () => {
  setTimeout(() => {
    $(".line1").removeClass('hamburger-line')
    $(".line1").addClass('hamburger-x-1')
    $(".line2").removeClass('hamburger-line')
    $(".line2").addClass('hamburger-x-2')
    $(".line3").removeClass('hamburger-line')

    hamburgerLines();
  }, 100);
})

function hamburgerLines() {
  if ($("#sidebar").hasClass('visible')) {
    setTimeout(() => {
      hamburgerLines();
    }, 300);
  }
  else {
    $(".line1").removeClass('hamburger-x-1')
    $(".line2").removeClass('hamburger-x-2')

    $(".line1, .line2, .line3").addClass('hamburger-line')
  }
}

// any <a> click closes the sidebar
$('.link-light').on('click', () => {
  $('#sidebar').removeClass('uncover visible');
  $('.pusher').removeClass('dimmed');
})