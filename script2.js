// This code changes the background color of the page
// to a random color every time the page is refreshed

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function getRandomColor() {
  var index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function changeBackgroundColor() {
  var color = getRandomColor();
  document.body.style.background = color;
}

// Call the changeBackgroundColor function when the page loads
window.onload = changeBackgroundColor;
