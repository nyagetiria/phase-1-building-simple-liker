// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', addLikeListeners);
function hideError() {
  const errorModal = document.getElementById('modal');
  errorModal.classList.add('hidden');
}
function addLikeListeners() {
  const hearts = document.querySelectorAll('.like-glyph');
  hearts.forEach(heart => heart.addEventListener('click', likeHeart));
}
function likeHeart(e) { 
  mimicServerCall()
  .then(() => {
    if (e.target.innerText === EMPTY_HEART) {
      e.target.innerText = FULL_HEART;
      e.target.classList.add('activated-heart');
    } else {
      e.target.innerText = EMPTY_HEART;
      e.target.classList.remove('activated-heart');
    }
  })
  .catch((error) => {
    const errorModal = document.getElementById('modal');
    const errorMessage = document.getElementById('modal-message');
    errorModal.classList.remove('hidden');
    errorMessage.innerText = error;
    setTimeout(hideError, 5000);
  });
}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 3000);
  });
}