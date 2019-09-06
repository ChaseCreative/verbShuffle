
//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var answerOne = get("answerOne");
    var answerTwo = get("answerTwo");
    var answeThree = get("answerThree");
    var answerFour = get("answerFour");
    var responseButton = get("responseButton");
    var responseNext = get("responseNext");

  //CHANGE THE NAMES OF THE GAMES HERE
    var game1Title = get("answerOne").innerHTML = "I am Presently Tense!";
    var game2Title = get("answerTwo").innerHTML = "I used to be Imperfectly Tense!";
    var game3Title = get("answerThree").innerHTML = "Yesterday I had some Perfectly Tense Moments!";
    var game4Title = get("answerFour").innerHTML = "I'm all Mixed Up!";


//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "VerbShuffle";}

function gameTitle() {get("startButton").innerHTML = "How Tense are you!";}

function gameOneTitle() {return game1Title;}

function gameTwoTitle() {return game2Title;}

function gameThreeTitle(){return game3Title;}

function gameFourTitle(){return game4Title;}

//This loads the names of the games

    appName();
    gameTitle();
    gameOneTitle();
    gameTwoTitle();
    gameThreeTitle();
    gameFourTitle();




var verbsFirst = [["Am", "loving"], ["labor", "working"], ["habit", "living"], ["cogit", "thinking"], ["cant", "singing"], ["d", "giving"],["laud", "praising"],["serv", "saving"],["voc", "calling"],["err", "wandering"], ["conserv", "preserving"]];

var verbsFirstPer = [["Amav", "loved"], ["laborav", "worked"], ["habitav", "lived"], ["cogitav", "thought"], ["cantav", "sang"], ["ded", "gave"],["laudav", "praised"],["servav", "saved"],["vocav", "called"],["errav", "wandered"],["conservav", "preserved"]];


var perEndingsFirst = [["ō", "I am "], ["ās", "You are "], ["at", "She/he/it is "], ["āmus", "We are "], ["ātis", "Ya'll are "], ["ant", "They are "]];

var perEndingsFirstImp = [["ābam", "I was "], ["ābas", "You were "], ["ābat", "She/he/it was "], ["ābamus", "We were "], ["ābatis", "Ya'll were "], ["ābant", "They were "]];

var perEndingsFirstPerfect = [["ī", "I "], ["isti", "You "], ["it", "She/he/it "], ["imus", "We "], ["istis", "Ya'll "], ["ērunt", "They "]];

var answers = ["answerOne", "answerTwo", "answerThree", "answerFour"];





//Random index for Shuffle
	 var randomIndex = 0;



function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



//Score Variables

	var correctAnswer = "";

    var points = 0;

    var pointsPerCorrectAnswer = 10;

    //var gameOneChosen = false;


    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }

//Counter variable for number of questions

var num_questions = 5;
var count = 11;

function decrementCount(){
	count--;
}


//Timer variables
var timeleft = 15;
var countdown = setInterval(x,1000);


function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			resetAnswerColors();
    			answerOne.innerHTML = "";
				answerTwo.innerHTML = "";
				answerThree.innerHTML = "";
				answerFour.innerHTML = "";

  }

}





function stopTimer() {


	clearInterval(countdown);


}



//This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}



function answerSetup(){
		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";
		responseButton.innerHTML = "";
		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};
}



 function selectGame1(){

 	startButton.disabled = false;
 	startButton.onclick = function(){presentTenseVerbShuffle()};
	startButton.innerHTML = "Click to Start " + game1Title;
    answerSetup();
    gameOverAudio();
 	return true;


}


function selectGame2(){

	startButton.disabled = false;
 	startButton.onclick = function(){imperfectTenseVerbShuffle()};
 	startButton.innerHTML = "Click to Start " + game2Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame3(){

	startButton.disabled = false;
 	startButton.onclick = function(){perfectTenseVerbShuffle()};
 	startButton.innerHTML = "Click to Start " + game3Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame4(){

	startButton.disabled = false;
 	startButton.onclick = function(){threeVerbTenseShuffle()};
 	startButton.innerHTML = "Click to Start " + game4Title;
    answerSetup();
    gameOverAudio();
 }









function presentTenseVerbShuffle(){

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(verbsFirst);
shuffle(verbsFirstPer);

shuffle(perEndingsFirst);

shuffle(perEndingsFirstImp);
shuffle(perEndingsFirstPerfect);



shuffle(answers);





function shuffleFirstConPresTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsFirst[0][0]  + perEndingsFirst[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirst[0][1] + verbsFirst[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirst[1][1] + verbsFirst[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirst[2][1] + verbsFirst[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirst[3][1] + verbsFirst[0][1]  ;
}


 shuffleFirstConPresTenseVerbs();




	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){

		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;

		 //resetQuestions();


    	//startButton.innerHTML = "Start a New Game!";
    	//startButton.disabled = false;

		//answerOne.innerHTML = "";
		//answerTwo.innerHTML = "";
		//answerThree.innerHTML = "";
		//answerFour.innerHTML = "";

		//document.getElementById("boxThree").innerHTML = "Score";
		//responseButton.innerHTML = "Try to beat your score of " + points + " points!";
		//points = 0;

		//stopTimer();
		//document.getElementById("boxOne").innerHTML = "Timer";


		//answerOne.onclick = function(){clickedAnswerOne()};
		//answerTwo.onclick = function(){clickedAnswerTwo()};
		//answerThree.onclick = function(){clickedAnswerThree()};
		//answerFour.onclick = function(){clickedAnswerFour()};

		//resetGame();
		//resetSuffleQuestions();
		//count = 11;
    }



}


function imperfectTenseVerbShuffle(){

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(verbsFirst);
shuffle(verbsFirstPer);

shuffle(perEndingsFirst);

shuffle(perEndingsFirstImp);
shuffle(perEndingsFirstPerfect);



shuffle(answers);






function shuffleFirstConImpTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsFirst[0][0]  + perEndingsFirstImp[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirstImp[0][1] + verbsFirst[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirstImp[1][1] + verbsFirst[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirstImp[2][1] + verbsFirst[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirstImp[3][1] + verbsFirst[0][1]  ;
}

shuffleFirstConImpTenseVerbs();





	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;




 	decrementCount();






	if (count == 0){


		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;
    }



}


function perfectTenseVerbShuffle(){

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(verbsFirst);
shuffle(verbsFirstPer);

shuffle(perEndingsFirst);

shuffle(perEndingsFirstImp);
shuffle(perEndingsFirstPerfect);



shuffle(answers);



function shuffleFirstConPerfectTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsFirstPer[0][0]  + perEndingsFirstPerfect[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirstPerfect[0][1] + verbsFirstPer[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirstPerfect[1][1] + verbsFirstPer[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirstPerfect[2][1] + verbsFirstPer[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirstPerfect[3][1] + verbsFirstPer[0][1]  ;
}



shuffleFirstConPerfectTenseVerbs();



	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){


		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;
    }



}





function threeVerbTenseShuffle(){

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(verbsFirst);
shuffle(verbsFirstPer);

shuffle(perEndingsFirst);

shuffle(perEndingsFirstImp);
shuffle(perEndingsFirstPerfect);


shuffle(answers);



function shuffleFirstConPresTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsFirst[0][0]  + perEndingsFirst[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirst[0][1] + verbsFirst[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirst[1][1] + verbsFirst[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirst[2][1] + verbsFirst[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirst[3][1] + verbsFirst[0][1]  ;
}





function shuffleFirstConImpTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsFirst[0][0]  + perEndingsFirstImp[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirstImp[0][1] + verbsFirst[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirstImp[1][1] + verbsFirst[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirstImp[2][1] + verbsFirst[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirstImp[3][1] + verbsFirst[0][1]  ;
}





function shuffleFirstConPerfectTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsFirstPer[0][0]  + perEndingsFirstPerfect[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirstPerfect[0][1] + verbsFirstPer[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirstPerfect[1][1] + verbsFirstPer[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirstPerfect[2][1] + verbsFirstPer[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirstPerfect[3][1] + verbsFirstPer[0][1]  ;
}





var randomNounIndex = Math.floor(Math.random() * 3);
var mixUp = [shuffleFirstConPerfectTenseVerbs, shuffleFirstConImpTenseVerbs, shuffleFirstConPresTenseVerbs];

mixUp[randomNounIndex]();





	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){


		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;
    }



}











   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}




function enableButtons(){

	answerOne.disabled = false;
	answerTwo.disabled = false;
	answerThree.disabled = false;
	answerFour.disabled = false;

}

function disableButtons(){
		answerOne.disabled = true;
		answerTwo.disabled = true;
		answerThree.disabled = true;
		answerFour.disabled = true;
}







function clickedAnswerOne(){




	if (document.getElementById("answerOne").innerHTML == perEndingsFirst[0][1] + verbsFirst[0][1] ||
		document.getElementById("answerOne").innerHTML ==perEndingsFirstImp[0][1] + verbsFirst[0][1] ||
		document.getElementById("answerOne").innerHTML ==perEndingsFirstPerfect[0][1] + verbsFirstPer[0][1]){

		correctAnswerAudio();
		//clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerOne.style.backgroundColor = "yellow";
		answerOne.style.border = "yellow";
		document.getElementById("A1").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerOneAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerOne.style.color = "red";
		answerOne.style.backgroundColor = "black";
		answerOne.style.border = "black";
		answerOne.disabled = true;
		document.getElementById("A1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}


function clickedAnswerTwo(){



	if (document.getElementById("answerTwo").innerHTML == perEndingsFirst[0][1] + verbsFirst[0][1]||
		document.getElementById("answerTwo").innerHTML == perEndingsFirstImp[0][1] + verbsFirst[0][1] ||
		document.getElementById("answerTwo").innerHTML == perEndingsFirstPerfect[0][1] + verbsFirstPer[0][1]){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerTwo.style.backgroundColor = "yellow";
		answerTwo.style.border = "yellow";
		document.getElementById("A2").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerTwoAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
		answerTwo.disabled = true;
		document.getElementById("A2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}
}

function clickedAnswerThree(){



	if (document.getElementById("answerThree").innerHTML == perEndingsFirst[0][1] + verbsFirst[0][1]||
		document.getElementById("answerThree").innerHTML == perEndingsFirstImp[0][1] + verbsFirst[0][1] ||
		document.getElementById("answerThree").innerHTML == perEndingsFirstPerfect[0][1] + verbsFirstPer[0][1]){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerThree.style.backgroundColor = "yellow";
		answerThree.style.border = "yellow";
		document.getElementById("A3").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerThreeAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerThree.style.color = "red";
		answerThree.style.backgroundColor = "black";
		answerThree.style.border = "black";
		answerThree.disabled = true;
		document.getElementById("A3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}

function clickedAnswerFour(){



	if (document.getElementById("answerFour").innerHTML == perEndingsFirst[0][1] + verbsFirst[0][1]||
		document.getElementById("answerFour").innerHTML == perEndingsFirstImp[0][1] + verbsFirst[0][1] ||
		document.getElementById("answerFour").innerHTML == perEndingsFirstPerfect[0][1] + verbsFirstPer[0][1]){

		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio;
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerFour.style.backgroundColor = "yellow";
		answerFour.style.border = "yellow";
		document.getElementById("A4").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerFourAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}
