function handleClick(evt) {
	evt.preventDefault();
	
	alert("Blue")
}


let button = document.querySelector('button#color');

button.addEventListener('click', handleClick);


#color {
    color: yellow;


}