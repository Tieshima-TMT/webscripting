// JavaScript Document

var h = document.getElementById("hobb_head");
var p = document.getElementById("hobbies");
var imList = document.getElementById("tada");
var enable = true;
window.onload = function() {

	h.onmouseover = scrollOn;
	h.onmouseout = scrollOff;
}

//nested function
const rinlen = {total:0, zmodel:90, titles:"Blanks", color:"Yellow"};
rinlen.total = function() {
	var r_songs = 766;
	var l_songs = 638;
	
	function add() {
		var results1 = r_songs + l_songs;
		return results1;
	}
	return add();
};

document.getElementById("demo").innerHTML = rinlen.total();

//Space is made under heading for reveal
function scrollOn() {
	p.innerHTML = "Reading, listening to music, and coding.";
}

function scrollOff() {
	p.innerHTML = " ";
}

//Toggle a list on and off by clicking on pic
function showList() {

	if(enable == false) {
		imList.innerHTML = "";
		enable = true;
	} else {
		imList.innerHTML = "<p>This is the list:</p><ul style=\"list-style-type:none;\"><li> A String</li> <li>" + rinlen.titles + "</li> <li>" + rinlen.color + "</li></ul>";
		enable = false;
	}
	return enable;
}

//Header with space underneath it for reveal
function showPara() {
var element = document.getElementById("para");
	if(element.style.visibility == "hidden"){
		element.style.visibility = "visible";
	} else {
		element.style.visibility = "hidden";
	}
}

//Get date for footer
var today = new Date(); //Get the full date
var yyyy = today.getFullYear(); //Narrow it down to year

today = '&copy H Silvia ' + yyyy; //combine copyright and year
document.getElementById("footer_info").innerHTML = today; //add today to footer where foot_info is located

//Assignment names and descriptions
//This allows me to reuse titles and descriptions across multiple pages.
var m01 = "M01: Web Environment";
var m01_descr = "For this project I made this site to keep track of my progress in the class. It feaures a Home page, About page, and Assignment page.";
//var m01_pub = "03/27/2022";

var m02 = "M02: Loops";
var m02_descr = "This assignment is an example of how to use conditional statements and loops to display informaion.";

var m05 = "M05: Array Mad Lib";
var m05_descr = "This assignment prompts the user for inputs, and uses an array to fill in the mad lib.";

document.getElementById("m01_title").innerHTML = m01;
document.getElementById("m01_desc").innerHTML = m01_descr;
//document.getElementById("m01_pub").innerHTML = m01_pub;

document.getElementById("m02_title").innerHTML = m02;
document.getElementById("m02_desc").innerHTML = m02_descr;

document.getElementById("m05_title").innerHTML = m05;
document.getElementById("m05_desc").innerHTML = m05_descr;
