console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


function hover(evt) {
	evt.preventDefault();
	
	alert("You are awesome!")
}


let img = document.querySelector('img');

img.addEventListener('onmouseover', hover);