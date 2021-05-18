// ATTEMPT 1
// const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// const admitted = document.querySelector('.admitted');
// const refused = document.querySelector('.refused');
// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: '

// //let i = 0;

// for (let i = 0; i < people.length; i++)
//     if ( i === 'Phil' || 'Lola') {
//     refused.textContent += people[i] + ', ';
//     } else {
//         admitted.textContent += people[i] + ', ';
//     }


//ATTEMPT 2
// const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// const admitted = document.querySelector('.admitted');
// const refused = document.querySelector('.refused');
// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: '

// //let i = 0;

// for (let i = 0; i < people.length; i++)
//     if ( people[i] === 'Phil') {
//     refused.textContent += people[i] + ', ';
//     }
//     else if (people[i] === 'Lola') { 
//     refused.textContent += people[i] + ', ';
//     } else {
//         admitted.textContent += people[i] + ', ';
//     }

// ATTEMPT 3 + CLEANUP COMMAS

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

for (let i = 0; i < people.length; i++) {
    if ( people[i] === 'Phil') {
    refused.textContent += people[i] + ', ';
    }
    else if (people[i] === 'Lola') { 
    refused.textContent += people[i] + ', ';
    } else {
        admitted.textContent += people[i] + ', ';
    }

}    

let refusedGuests = refused.textContent
refused.textContent = refusedGuests.slice(0,refusedGuests.length-2) + '.';

admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';