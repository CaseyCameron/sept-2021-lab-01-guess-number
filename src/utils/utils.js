export function getRandomNumber() {
  return Math.round(Math.random() * 20);
}

export function checkGuess(userGuess, actualNumber) {
  console.log('utils', userGuess, actualNumber);
  let result = '';
  switch (userGuess) {
    case (userGuess > actualNumber):
      result = 'Your guess is too high';
      break;
    case (userGuess < actualNumber):
      result = 'Your guess is too low';
      break;
    default:
      result = 'You win';
      break;
  }
  return result;
}