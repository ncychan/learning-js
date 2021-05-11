// let output = document.querySelector('.output');
// output.innerHTML = '';

// let i = 10;
// const para = document.createElement('p');

// while (i <= 10) {
//   if (i === 10) {
//     para.textContent = 'Countdown' + i;

//   } else if (i === 0) {
//     para.textContent = 'Blastoff!';
//     break;

//    } else {
//     para.textContent = i;
//   }
//   i--;
// }

// output.appendChild(para);


// for (let i = 10; i > 10; i--) {
//     if (i === 10) {
//         para.textContent = 'Countdown' + i;
//         output.appendChild(para);
//     }
//     else if (i === 0) {
//         para.textContent = 'Blastoff!';
//         output.appendChild(para);
//     } else {
//         para.textContent = i;
//         output.appendChild(para);
//     }
// }


let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = 'Countdown ' + i;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
   } else {
    para.textContent = i;
  }

output.appendChild(para);

i--;

}

