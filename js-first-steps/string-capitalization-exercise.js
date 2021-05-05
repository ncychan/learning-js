// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#fixing_capitalization

const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  // write your code just below here

  let lowerCaseString = input.toLowerCase();
  let firstLetter = lowerCaseString[0]; 
  let capitalFirstLetter = firstLetter.toUpperCase();
  let finalString = lowerCaseString.replace(firstLetter,capitalFirstLetter);


  let result = finalString;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

// radData.toLowerCase();
// browserType.replace('moz','van');