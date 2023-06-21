const quote = document.getElementById('quote');
const input = document.getElementById('input');
const wpm = document.getElementById('wpm');
const accuracyPercentage = document.getElementById('accuracy-percentage');
const startButton = document.getElementById('start-button');
const wpmButton = document.getElementById('wpm-button');

let startTime, endTime;

function startTimer() {
  startTime = new Date();
}

function endTimer() {
  endTime = new Date();
  const timeDiff = endTime - startTime; // in milliseconds
  const seconds = timeDiff / 1000;
  const minutes = seconds / 60;
  const words = input.value.trim().split(' ').length;
  const speed = Math.round(words / minutes);
  return speed;
}

function calculateAccuracy() {
  const quoteWords = quote.textContent.trim().split(' ');
  const inputWords = input.value.trim().split(' ');

  let correctWords = 0;
  let incorrectWords = 0;

  inputWords.forEach((word, i) => {
    if (word === quoteWords[i]) {
      correctWords++;
    } else {
      incorrectWords++;
    }
  });

  const accuracy = Math.round((correctWords / quoteWords.length) * 100);
  accuracyPercentage.textContent = accuracy;

  return incorrectWords;
}

function generateRandomQuote() {
  const quotes = [
    'The quick brown fox jumps over the lazy dog.',
    'She sells seashells by the seashore.',
    'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
    'Peter Piper picked a peck of pickled peppers.'
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function startPractice() {
  const quoteText = generateRandomQuote();
  quote.textContent = quoteText;
  input.value = '';
  input.disabled = false;
  input.focus();
  startButton.disabled = true;
  startTimer();
}

function resetPractice() {
  input.value = '';
  input.disabled = true;
  startButton.disabled = false;
  wpm.textContent = '0';
  accuracyPercentage.textContent = '0';
}

function displayWPM() {
  const speed = endTimer();
  wpm.textContent = speed;
}

function highlightIncorrectWords() {
  const incorrectWordsCount = calculateAccuracy();
  const inputWords = input.value.trim().split('
