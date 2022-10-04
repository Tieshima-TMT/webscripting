// JavaScript Document
var libs = ["adjective","person", "place", "verb (-ing form)", "animal", "body part"];
var user_input = [];

for(var i=0; i<libs.length; i++) 
	{
		user_input[i] = prompt("Enter a " + libs[i] + ":");
	}

//document.write("A " + user_input[0] + " young kid had been left behind by the " + user_input[1] + " on the thatched roof of a " + user_input[2] + " to keep him out of harm\'s way. The kid was " + user_input[3] + " near the edge of the roof when he spied a " + user_input[4] + " and began to jeer at him, making faces and abusing him to his " + user_input[5] + "\'s content. \"I hear you,\" the " + user_input[4] + " said, \"and I haven\'t the least grudge against you for what you say or do. When you are up there it is the " + user_input[2] +  " that\'s talking, not you.\"");


document.getElementById("story").innerHTML = "A " + user_input[0] + " young kid had been left behind by the " + user_input[1] + " on the thatched roof of a " + user_input[2] + " to keep him out of harm\'s way. The kid was " + user_input[3] + " near the edge of the roof when he spied a " + user_input[4] + " and began to jeer at him, making faces and abusing him to his " + user_input[5] + "\'s content. \"I hear you,\" the " + user_input[4] + " said, \"and I haven\'t the least grudge against you for what you say or do. When you are up there it is the " + user_input[2] +  " that\'s talking, not you.\"";