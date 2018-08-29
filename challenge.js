// As a user, i should see the timer increment every second once the page has loaded

// As a user, i can manually increment and decrement the counter as i like

// As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number

// As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'

// As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"

let likes = 0;
let counter = document.getElementById('counter');
//let changer = parseInt(counter.innerText);

let currentValue = function(counter) {
  return parseInt(counter.innerText);
};

let playing = true,
  timer = function() {
    return setInterval(function() {
      //changer = parseInt(counter.innerText) + 1;
      //counter.innerText = changer;
      counter.innerText = currentValue(counter) + 1;
    }, 1e3);
  };

let interval = timer();

minus = document.getElementById('-');
plus = document.getElementById('+');
heart = document.getElementById('<3');
pause = document.getElementById('pause');
commentForm = document.getElementsByTagName('form')[0];

minus.addEventListener('click', () => decrement(playing));
plus.addEventListener('click', increment);
heart.addEventListener('click', like);
pause.addEventListener('click', pauseToggle);
commentForm.addEventListener('submit', comment);

function decrement(playing) {
  if (playing) {
    counter.innerText = currentValue(counter) - 1;
  }
}

function increment() {
  counter.innerText = currentValue(counter) + 1;
}

function like() {
  likes++;
  alert(`${currentValue(counter)} has been liked ${likes} time(s).`);
}

function pauseToggle() {
  if (playing == true) {
    playing = false;
    clearInterval(interval);
    pause.innerText = 'resume';
    plus.disabled = true;
    heart.disabled = true;
    document.getElementById('submit').disabled = true;
  } else {
    playing = true;
    interval = timer();
    pause.innerText = 'pause';
    plus.disabled = false;
    heart.disabled = false;
    document.getElementById('submit').disabled = false;
  }
}

function comment(counter) {
  counter.preventDefault();
  let comments_section = document.querySelector('.comments');
  let comment = document.createElement('p');

  let comment_form = document.querySelector('#comment-form');
  comment.innerText = comment_element().value;

  comments_section.appendChild(comment);
  comment_element().value = '';
}

function comment_element() {
  return document.querySelector('input[name="comment"]');
}
