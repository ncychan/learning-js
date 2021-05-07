const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1

let products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99' ];
                

for (let i = 0; i < products.length; i++) { // number 2
  // number 3
  let parts = products[i].split(':');
  let price = Number(parts[1]);  
  // number 4 
  total = price + total
  // number 5
  let itemText = `${parts[0]} - ${parts[1]}`;
  

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
