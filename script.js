var no_button = document.getElementById('no-btn');
var yes_button = document.getElementById('yes-btn');
var heart = document.getElementById('heart');
var gif = document.getElementById('gif');
var text = document.getElementById('text');
var yesCurrentFontSize = window.getComputedStyle(text, null).getPropertyValue('font-size');
var windowWidth = window.innerWidth;
var btnContainer = document.querySelector('.btn-container');
var mainContainer = document.querySelector('.main-container');
var rejects = ["No", "Are you sure?", "Really Sure?", "Are you positive?", "Are you absolutely sure?", "Pookie please", "Just think about it", "If you say no, I'll be really sad", "I'll be very very sad", "I'll be very very very sad", "I'll be very very very very sad", "Ok fine, I'll stop asking...", "Just kidding, PLEASE SAY YES", "I'll be very very very very very sad", "You're breaking my heart ;(", "Give me a chance", "I REALLY want you", "Pleaseeee...", "I will cry if you say no TT", "We will have lots of fun", "Pretty please?", "I know you are lying", "I'll be REALLY sad ;(", "Don't be shy", "You're making me sad :('", "Think about it again", "Plsssss", "Think harder..", "Think hardest...", "Pretty pleaseee TT", "Just say you hate me...", "Pretty prettie pwetti pwease...", "LAST chance!!!", "I'll really stop asking..", "Don't test me >:(", "HMPH Fine!!", "JUST KIDDING TT", "I BEG U 🙏", "Just say YES"];
var rejectCounts = 1;

no_button.addEventListener('click', function() {
  // Update text content
  no_button.textContent = rejects[rejectCounts];
  rejectCounts += 1;
  if (rejectCounts >= rejects.length) {
    rejectCounts = 0;
  }

  // Update font size (optional, if you still want this behavior)
  var newFontSize = (parseFloat(yesCurrentFontSize) + 40) + 'px';
  yesCurrentFontSize = newFontSize;
  yes_button.style.fontSize = newFontSize;

  // Get the button's dimensions
  var buttonWidth = no_button.offsetWidth;
  var buttonHeight = no_button.offsetHeight;

  // Get the available window dimensions
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  // Generate random X/Y positions within the window limits, accounting for button size
  var randomX = Math.random() * (windowWidth - buttonWidth); // Random X position within bounds
  var randomY = Math.random() * (windowHeight - buttonHeight); // Random Y position within bounds

  // Apply the new random position
  no_button.style.position = 'absolute';
  no_button.style.left = randomX + 'px';
  no_button.style.top = randomY + 'px';

  // Generate a random angle between 0 and 360 degrees
  var randomAngle = Math.random() * 360; // Random angle

  // Apply the random position and rotation using transform
  no_button.style.position = 'absolute';
  no_button.style.left = randomX + 'px';
  no_button.style.top = randomY + 'px';
  no_button.style.transform = 'rotate(' + randomAngle + 'deg)'; // Rotate by the random angle

  // Update direction if needed
  updateDir();
});

yes_button.addEventListener('click', function() {
  var music = document.getElementById('celebrationMusic');
  music.play(); // Play the audio

  gif.src= 'love-dog.gif'
  text.textContent = 'yippeee yay!!! mwah <3';

  no_button.style.display = 'none';
  yes_button.style.display = 'none';

  heart.style.display = "block";
  startHeartRain();

  // Create the smaller text block (below the existing text)
  var smallText = document.createElement('p');
  smallText.textContent = 'i love you so much - julianne <3';
  
  // Style the smaller text
  smallText.style.fontSize = '20px';
  smallText.style.color = '#ff69b4'; // Pink color
  smallText.style.textAlign = 'center';
  smallText.style.marginTop = '1px'; // Small margin to separate from the main text

  // Insert the smaller text below the existing text element
  text.parentNode.insertBefore(smallText, text.nextSibling);

});

function updateDir() {
  if (btnContainer.offsetWidth > windowWidth) {
    btnContainer.style.flexDirection = "column";
  }
}

function updateWrap() {
  if (mainContainer.offsetWidth > windowWidth) {
    text.innerHTML = 'Will you be my<br>Valentine?';
  }
}
updateWrap();