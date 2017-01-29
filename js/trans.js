//erworden elementen geselcteerd doormiddel van document.queryselector
//het eerste section element wordt geselecteerd met de class draailike
// button in de section wordt geselecteerd

var section = document.querySelector('.draailike');
var button = document.querySelector('section > button');

var dance = function () {
//toggelen tussen elementen
    section.classList.toggle('dancing')
}

button.addEventListener('click', dance);


