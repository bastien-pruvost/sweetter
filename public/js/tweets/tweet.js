initDeleteButtons();

function initDeleteButtons() {
  const deleteButtons = document.querySelectorAll('.tweet__delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', event => {
      requestTweetDelete(event.target.dataset.tweetid);
    });
  });
}

function requestTweetDelete(tweetId) {
  fetch(`/tweets/${tweetId}`, {
    method: 'DELETE'
  })
    .then(() => location.reload())
    // .then(res => res.text())
    // .then(htmlText => displayTweets(htmlText))
    .catch(err => {
      console.log(err);
    });
}

// function displayTweets(htmlText) {
//   const container = document.querySelector('#tweet-list-container');
//   container.innerHTML = htmlText;
//   initDeleteButtons();
// }
