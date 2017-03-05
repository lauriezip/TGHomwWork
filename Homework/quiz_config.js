
var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();



questions[0] = "1) NES Was Released In What Year?";
choices[0] = new Array();
choices[0][0] = "1999";
choices[0][1] = "1982";
choices[0][2] = "1985";
choices[0][3] = "1984";
answers[0] = choices[0][2];

questions[1] = "2) What Is The Number One Nintendo Game Released?";
choices[1] = new Array();
choices[1][0] = "Super Mario Bros";
choices[1][1] = "Zelda";
choices[1][2] = "Tetris";
choices[1][3] = "Mega Man";
answers[1] = choices[1][0];

questions[2] = "3) What mystical object is Link searching for in The Legend of Zelda?";
choices[2] = new Array();
choices[2][0] = "Trefoil";
choices[2][1] = "Shield";
choices[2][2] = "Triforce";
choices[2][3] = "Truffle";
answers[2] = choices[2][2];

questions[3] = "4) 007 373 5963 Is The Cheat Code To Beat Mike Tyson";
choices[3] = new Array();
choices[3][0] = "True";
choices[3][1] = "False";
answers[3] = choices[3][0];

questions[4] = "5) NES Was Initally Released In Japan As The Family Computer";
choices[4] = new Array();
choices[4][0] = "True";
choices[4][1] = "False";
answers[4] = choices[4][0];

questions[5] = "6) What Is The Name Of The Laboratory In Mega Man?";
choices[5] = new Array();
choices[5][0] = "Dr. Evil's Laboratory";
choices[5][1] = "Dexters Laboratory";
choices[5][2] = "Dr. Light's Laboratory";
choices[5][3] = "Doc Brown";
answers[5] = choices[5][2];

// response for getting 100%
response[0] = "Excellent, You Got Them All Correct!";
// response for getting 90% or more
response[1] = "Almost, try again to get 100%!"
// response for getting 70% or more
response[2] = "Well done, that is a good score, can you do better?";
// response for getting over 50%
response[3] = "Nice one, you got more than half of the questions right, can you do better?";
// response for getting 40% or more
response[4] = "You got some questions right, you can do better!";
// response for getting 20% or more
response[5] = "You didn't do too well, why not try again!?";
// response for getting 10% or more
response[6] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[7] = "Oh dear, I think you need to go back to school (or try again)!";

 