const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

let imgList = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg']

for (let i = 0; i < imgList.length; i++) {
    const imgSource= imgList[i]
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgSource);
    thumbBar.appendChild(newImage);

    newImage.onclick = function () {
        displayedImage.setAttribute('src',imgSource)
    }
    
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function () {
    const currentClass = btn.getAttribute('class');
    if ( currentClass === 'dark') {
        btn.setAttribute('class', 'light')
        btn.textContent = 'Lighten'
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    } else {
        btn.setAttribute('class','dark')
        btn.textContent = 'Darken'
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'
    } 

}
