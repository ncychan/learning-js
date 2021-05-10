const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function() {
  const choice = select.value;

  // ADD SWITCH STATEMENT
    switch (choice) {
      case 'black':
          update('black', 'white')
          break;
      case 'purple':
        update('purple', 'white')
          break; 
      case 'yellow':
        update('yellow', 'black')
          break; 
      case 'psychedelic':
        update('orange','blue')
          break;
      default:
        update('white', 'black');
  }

}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}