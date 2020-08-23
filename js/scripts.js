console.log("Hi! Welcome to My Portfolio Site");

$('#heading-text').text('How to create a hamburger menu with jQuery');

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
