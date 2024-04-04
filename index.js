const names = [`scooby`, `daphne`, `shaggy`, `scrappy`, `teddy`];
function writeCards(names, event) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }

  function countDown(num) {
    let countDown = 10;
  while (countDown > -1) {
    console.log(countDown--);
  }
}