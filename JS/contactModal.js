/* Load Modals for contact form */

var modal = document.getElementById('simpleModal');

var modButton = document.getElementById('contact');

var closeButton = document.getElementsByClassName('close')[0];

// waiting for clicks

modButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);


//function

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}






//log contact form data

var formData = document.getElementById('data');

formData.addEventListener('submit', logIt);

function logIt(){
    console.log('data');
}


