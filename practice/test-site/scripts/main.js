//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

//document.querySelector('html').onclick = function(){
//	alert("Ouch! stop poking me!");
//}

let myImg = document.querySelector('img');

myImg.onclick = function(){
	let mySrc = myImg.getAttribute('src');
	if(mySrc === 'images/firefox-icon.jpg'){
		myImg.setAttribute('src', 'images/firefox-icon1.jpg');
	} else {
		myImg.setAttribute('src', 'images/firefox-icon.jpg');
	}    
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Enter your name:-');
	if(!myName){
	setUserName();
	} else {	
	localStorage.setItem('name', myName);
	myHeading.textContent = ' Mozila is cool, '+myName;
	}
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = ' Mozila is cool, '+storedName;
}

myButton.onclick = function() {
	setUserName();
}


