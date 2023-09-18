const joke = document.getElementById('jokes');
const btn = document.getElementById('btn');

function fetchChuckJokes() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => getJokes(data))
}

function getJokes(text) {
    joke.textContent = text.value;
}


btn.addEventListener('click', fetchChuckJokes);
document.addEventListener('DOMContentLoaded', fetchChuckJokes)