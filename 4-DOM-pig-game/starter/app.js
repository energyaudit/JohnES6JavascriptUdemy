/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
////////////////////////////////////////version1, define variables and use activePlayer to dynamic access web element
////var score1=0;//step1:this is not clean by 2 variables
////var score2=0;//change to array so have one variable name
////var scores=[0,0];
////var roundScore=0;//step2: best practice is declare all variables at top
////var score1=0;//step1:this is not clean by 2 variables
////var score2=0;//change to array so have one variable name
////var scores=[0,0];
////var roundScore=0;//step2: best practice is declare all variables at top
//var scores, roundScore, activePlayer, dice;
//scores = [0, 0];
//roundScore = 0;
//activePlayer = 0; //because use to ready score array, and it is zero index based so player one is zero
//
//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);
////document.querySelector('#current-0').textContent = dice; //find first player dice socre by id '#current-0',because player0,and 1 this id changed, so we can compose name-0,1 current-0,1 to use activePlayer to choose id be dynamic.
//document.querySelector('#current-' + activePlayer).textContent = dice; //this only put plain text,if need html then use innerhtml
////document.querySelector('#current-' + activePlayer).innerHTML= '<em>'+dice+'</em>';//if use innerhtml then the rigtht side value must be string,so '' is must .
////so use selector to read value into code
//var x = document.querySelector('#score-0').textContent;
//console.log(x);
////use queryselector change css
//document.querySelector('.dice').style.display = 'none'; //querySelector('.dice') find by class

////////////////////////////////////////version2, event handling,event roll trigger new dice displayed
//
//var scores, roundScore, activePlayer;
//scores = [0, 0];
//roundScore = 0;
//activePlayer = 0; //because use to ready score array, and it is zero index based so player one is zero
//document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//document.getElementById('score-1').textContent = '0';
//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';
////use queryselector change css
//document.querySelector('.dice').style.display = 'none'; //ready for rool dice
////function btn(){//step1: EventListener call back function define outside
////    //do sth
////}
////document.querySelector('.btn-roll').addEventListener('click',btn)//if btn function not want to be used by others then define btn functin in the eventlistener directly as anonymous function
//
////document.querySelector('.btn-roll').addEventListener('click', function () {}); //step2,changed into anonymous function,plan more actions added into anonymous
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //1.Random number
//    var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//    //2.Display the rolled dice result
//    document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//    var diceDOM = document.querySelector('.dice');
//    diceDOM.style.display = 'block';
//    diceDOM.src = 'dice-' + dice + '.png';
//
//    //3.Update the the round score IF the rolled number wast NOT a 1

//}); //
//
////document.querySelector('#current-' + activePlayer).textContent = dice;//dice is not defined any more so comment out and move to end for later use 
////var x = document.querySelector('#score-0').textContent;

////////////////////////////////////////version3, Updating Scores and Changing the Active Player
//
//var scores, roundScore, activePlayer;
//scores = [0, 0];
//roundScore = 0;
//activePlayer = 0; //because use to ready score array, and it is zero index based so player one is zero
//document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//document.getElementById('score-1').textContent = '0';
//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';
////use queryselector change css
//document.querySelector('.dice').style.display = 'none'; //ready for rool dice
////function btn(){//step1: EventListener call back function define outside
////    //do sth
////}
////document.querySelector('.btn-roll').addEventListener('click',btn)//if btn function not want to be used by others then define btn functin in the eventlistener directly as anonymous function
//
////document.querySelector('.btn-roll').addEventListener('click', function () {}); //step2,changed into anonymous function,plan more actions added into anonymous
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //1.Random number
//    var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//    //2.Display the rolled dice result
//    document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//    var diceDOM = document.querySelector('.dice');
//    diceDOM.style.display = 'block';
//    diceDOM.src = 'dice-' + dice + '.png';
//
//    //3.Update the the round score IF the rolled number wast NOT a 1
//    if (dice !== 1) {
//        roundScore += dice; //add score to roundscore
//        document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//    } else {
//        //next player
//        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//        //if change player,need reset each current score to zero
//        document.getElementById('current-0').textContent = '0';
//        document.getElementById('current-1').textContent = '0';
//        //        document.querySelector('.player-0-panel').classList.remove('active');
//        //        document.querySelector('.player-1-panel').classList.add('active');//but player1 will de-active again if player 0 roll 1 next time,so best is toggle
//        document.querySelector('.player-0-panel').classList.toggle('active');
//        document.querySelector('.player-1-panel').classList.toggle('active');
//        //when switch to second player ,the dice should be disappear to ready for next run,copy the line from above
//        document.querySelector('.dice').style.display = 'none';
//    }
//
//});
//
//// comment out and move to end for later use 
////var x = document.querySelector('#score-0').textContent;
////////////////////////////////////////version5,  Implementing Our 'Hold' Function and the DRY Principle,ready for dry nextPlayer
//
//var scores, roundScore, activePlayer;
//scores = [0, 0];
//roundScore = 0;
//activePlayer = 0; //because use to ready score array, and it is zero index based so player one is zero
//document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//document.getElementById('score-1').textContent = '0';
//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';
////use queryselector change css
//document.querySelector('.dice').style.display = 'none'; //ready for rool dice
////function btn(){//step1: EventListener call back function define outside
////    //do sth
////}
////document.querySelector('.btn-roll').addEventListener('click',btn)//if btn function not want to be used by others then define btn functin in the eventlistener directly as anonymous function
//
////document.querySelector('.btn-roll').addEventListener('click', function () {}); //step2,changed into anonymous function,plan more actions added into anonymous
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //1.Random number
//    var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//    //2.Display the rolled dice result
//    document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//    var diceDOM = document.querySelector('.dice');
//    diceDOM.style.display = 'block';
//    diceDOM.src = 'dice-' + dice + '.png';
//
//    //3.Update the the round score IF the rolled number wast NOT a 1
//    if (dice !== 1) {
//        roundScore += dice; //add score to roundscore
//        document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//    } else {
//        //next player
//        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//        //if change player,need reset each current score to zero
//        document.getElementById('current-0').textContent = '0';
//        document.getElementById('current-1').textContent = '0';
//        //        document.querySelector('.player-0-panel').classList.remove('active');
//        //        document.querySelector('.player-1-panel').classList.add('active');//but player1 will de-active again if player 0 roll 1 next time,so best is toggle
//        document.querySelector('.player-0-panel').classList.toggle('active');
//        document.querySelector('.player-1-panel').classList.toggle('active');
//        //when switch to second player ,the dice should be disappear to ready for next run,copy the line from above
//        document.querySelector('.dice').style.display = 'none';
//    }
//
//});
////document.querySelector('.btn-hold').addEventListener('click', function () {});
//document.querySelector('.btn-hold').addEventListener('click', function () {
//    //add current score to global score
//    scores[activePlayer] += roundScore;
//    //UPDATE  the UI
//    document.querySelector('#score' + activePlayer).textContent = scores[activePlayer];

//    //Check if player won the game
//    //next player turn,this is was done before above if player roll 1,so take out these code as function to dry 
//});
//
//function nextPlayer() {
//   
//}
//// comment out and move to end for later use 
////var x = document.querySelector('#score-0').textContent;

////////////////////////////////////////version6,  Implementing Our 'Hold' Function and the DRY Principle, dry nextPlayer into function,if palyer win ?
//
//var scores, roundScore, activePlayer;
//scores = [0, 0];
//roundScore = 0;
//activePlayer = 0; //because use to ready score array, and it is zero index based so player one is zero
//document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//document.getElementById('score-1').textContent = '0';
//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';
////use queryselector change css
//document.querySelector('.dice').style.display = 'none'; //ready for rool dice
////function btn(){//step1: EventListener call back function define outside
////    //do sth
////}
////document.querySelector('.btn-roll').addEventListener('click',btn)//if btn function not want to be used by others then define btn functin in the eventlistener directly as anonymous function
//
////document.querySelector('.btn-roll').addEventListener('click', function () {}); //step2,changed into anonymous function,plan more actions added into anonymous
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //1.Random number
//    var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//    //2.Display the rolled dice result
//    document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//    var diceDOM = document.querySelector('.dice');
//    diceDOM.style.display = 'block';
//    diceDOM.src = 'dice-' + dice + '.png';
//
//    //3.Update the the round score IF the rolled number wast NOT a 1
//    if (dice !== 1) {
//        roundScore += dice; //add score to roundscore
//        document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//    } else {
//        //        //next player
//        //        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//        //        //if change player,need reset each current score to zero
//        //        document.getElementById('current-0').textContent = '0';
//        //        document.getElementById('current-1').textContent = '0';
//        //        //        document.querySelector('.player-0-panel').classList.remove('active');
//        //        //        document.querySelector('.player-1-panel').classList.add('active');//but player1 will de-active again if player 0 roll 1 next time,so best is toggle
//        //        document.querySelector('.player-0-panel').classList.toggle('active');
//        //        document.querySelector('.player-1-panel').classList.toggle('active');
//        //        //when switch to second player ,the dice should be disappear to ready for next run,copy the line from above
//        //        document.querySelector('.dice').style.display = 'none';
//        nextPlayer();
//    }
//
//});
////document.querySelector('.btn-hold').addEventListener('click', function () {});
//document.querySelector('.btn-hold').addEventListener('click', function () {
//    //add current score to global score
//    scores[activePlayer] += roundScore;
//    //UPDATE  the UI
//    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//
//    //Check if player won the game
//    //  if(scores[activePlayer]>=100){
//    if (scores[activePlayer] >= 20) { //low down to 20 to test it works
//        document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
//    }
//    //next player turn,this is was done before above if player roll 1,so take out these code as function to dry 
//    nextPlayer();//if activeplayer hold but no win,goto next player,so should add else and move this step into
//});
//
//function nextPlayer() {
//    //next player
//    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');
//    document.querySelector('.dice').style.display = 'none';
//
//}
//// comment out and move to end for later use 
////var x = document.querySelector('#score-0').textContent;

////////////////////////////////////////version7,  Implementing Our 'Hold' Function and the DRY Principle, dry nextPlayer into function,if palyer win ?if not add else and move nextplay()into
//
//var scores, roundScore, activePlayer;
//scores = [0, 0];
//roundScore = 0;
//activePlayer = 0; //because use to ready score array, and it is zero index based so player one is zero
//document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//document.getElementById('score-1').textContent = '0';
//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';
////use queryselector change css
//document.querySelector('.dice').style.display = 'none'; //ready for rool dice
////function btn(){//step1: EventListener call back function define outside
////    //do sth
////}
////document.querySelector('.btn-roll').addEventListener('click',btn)//if btn function not want to be used by others then define btn functin in the eventlistener directly as anonymous function
//
////document.querySelector('.btn-roll').addEventListener('click', function () {}); //step2,changed into anonymous function,plan more actions added into anonymous
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //1.Random number
//    var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//    //2.Display the rolled dice result
//    document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//    var diceDOM = document.querySelector('.dice');
//    diceDOM.style.display = 'block';
//    diceDOM.src = 'dice-' + dice + '.png';
//
//    //3.Update the the round score IF the rolled number wast NOT a 1
//    if (dice !== 1) {
//        roundScore += dice; //add score to roundscore
//        document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//    } else {
//        //        //next player
//        //        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//        //        //if change player,need reset each current score to zero
//        //        document.getElementById('current-0').textContent = '0';
//        //        document.getElementById('current-1').textContent = '0';
//        //        //        document.querySelector('.player-0-panel').classList.remove('active');
//        //        //        document.querySelector('.player-1-panel').classList.add('active');//but player1 will de-active again if player 0 roll 1 next time,so best is toggle
//        //        document.querySelector('.player-0-panel').classList.toggle('active');
//        //        document.querySelector('.player-1-panel').classList.toggle('active');
//        //        //when switch to second player ,the dice should be disappear to ready for next run,copy the line from above
//        //        document.querySelector('.dice').style.display = 'none';
//        nextPlayer();
//    }
//
//});
////document.querySelector('.btn-hold').addEventListener('click', function () {});
//document.querySelector('.btn-hold').addEventListener('click', function () {
//    //add current score to global score
//    scores[activePlayer] += roundScore;
//    //UPDATE  the UI
//    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//
//    //Check if player won the game
//    //  if(scores[activePlayer]>=100){
//    if (scores[activePlayer] >= 20) { //low down to 20 to test it works
//        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//        document.querySelector('.dice').style.display = 'none'; //hide the dice again if game over,so this line repeat many times
//        document.querySelector('.player-' + activePlayer + "-panel").classList.add('winner'); //a player may repeat wins as game repeat,so we need this way to change css to show it is winner
//        document.querySelector('.player-' + activePlayer + "-panel").classList.remove('active'); ////a player may repeat wins as game repeat,so we need this way to change css to show not active after won
//
//
//    } else {
//        //next player turn,this is was done before above if player roll 1,so take out these code as function to dry 
//        nextPlayer(); //if activeplayer hold but no win,goto next player,so should add else and move this step into 
//    }
//
//});
//
//function nextPlayer() {
//    //next player
//    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');
//    document.querySelector('.dice').style.display = 'none';
//
//}
//// comment out and move to end for later use 
////var x = document.querySelector('#score-0').textContent;

////////////////////////////////////////version8,  Creating a Game Initialization Function
//
//var scores, roundScore, activePlayer;
////scores = [0, 0];
////roundScore = 0;
////activePlayer = 0; //because use to ready score array, and it is zero index based so player one is zero
//init();//then found following 5 lines repeat too on load or begin new game so dry it
//document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//document.getElementById('score-1').textContent = '0';
//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';
////use queryselector change css,hide dice 
//document.querySelector('.dice').style.display = 'none'; //ready for roll dice
////function btn(){//step1: EventListener call back function define outside
////    //do sth
////}
////document.querySelector('.btn-roll').addEventListener('click',btn)//if btn function not want to be used by others then define btn functin in the eventlistener directly as anonymous function
//
////document.querySelector('.btn-roll').addEventListener('click', function () {}); //step2,changed into anonymous function,plan more actions added into anonymous
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //1.Random number
//    var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//    //2.Display the rolled dice result
//    document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//    var diceDOM = document.querySelector('.dice');
//    diceDOM.style.display = 'block';
//    diceDOM.src = 'dice-' + dice + '.png';
//
//    //3.Update the the round score IF the rolled number wast NOT a 1
//    if (dice !== 1) {
//        roundScore += dice; //add score to roundscore
//        document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//    } else {
//        //        //next player
//        //        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//        //        //if change player,need reset each current score to zero
//        //        document.getElementById('current-0').textContent = '0';
//        //        document.getElementById('current-1').textContent = '0';
//        //        //        document.querySelector('.player-0-panel').classList.remove('active');
//        //        //        document.querySelector('.player-1-panel').classList.add('active');//but player1 will de-active again if player 0 roll 1 next time,so best is toggle
//        //        document.querySelector('.player-0-panel').classList.toggle('active');
//        //        document.querySelector('.player-1-panel').classList.toggle('active');
//        //        //when switch to second player ,the dice should be disappear to ready for next run,copy the line from above
//        //        document.querySelector('.dice').style.display = 'none';
//        nextPlayer();
//    }
//
//});
////document.querySelector('.btn-hold').addEventListener('click', function () {});
//document.querySelector('.btn-hold').addEventListener('click', function () {
//    //add current score to global score
//    scores[activePlayer] += roundScore;
//    //UPDATE  the UI
//    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//
//    //Check if player won the game
//    //  if(scores[activePlayer]>=100){
//    if (scores[activePlayer] >= 20) { //low down to 20 to test it works
//        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//        document.querySelector('.dice').style.display = 'none'; //hide the dice again if game over,so this line repeat many times
//        document.querySelector('.player-' + activePlayer + "-panel").classList.add('winner'); //a player may repeat wins as game repeat,so we need this way to change css to show it is winner
//        document.querySelector('.player-' + activePlayer + "-panel").classList.remove('active'); ////a player may repeat wins as game repeat,so we need this way to change css to show not active after won
//
//
//    } else {
//        //next player turn,this is was done before above if player roll 1,so take out these code as function to dry 
//        nextPlayer(); //if activeplayer hold but no win,goto next player,so should add else and move this step into 
//    }
//
//});
//
//function nextPlayer() {
//    //next player
//    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');
//    document.querySelector('.dice').style.display = 'none';
//
//}
////document.querySelector('.btn-new').addEventListener('click',function(){});//step1:add {}); first into code to prevent missed later too much lines.
//document.querySelector('.btn-new').addEventListener('click', function () {
//    scores = [0, 0]; //all these 3 line codes founded repeat at very beginning,so we must dry it
//    roundScore = 0;
//    activePlayer = 0;
//});
//
//function init() { //no para need, we just want to do some operations,no need last step input at all
//    scores = [0, 0];
//    roundScore = 0;
//    activePlayer = 0;
//}
//// comment out and move to end for later use 
////var x = document.querySelector('#score-0').textContent;

////////////////////////////////////////version9,  Creating a Game Initialization Function,dry the hide dice and set 0 into init()
//
//var scores, roundScore, activePlayer;
////scores = [0, 0];
////roundScore = 0;
////activePlayer = 0; //because use to ready score array, and it is zero index based so player one is zero
//init(); //then found following 5 lines repeat too on load or begin new game so dry it
////document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
////document.getElementById('score-1').textContent = '0';
////document.getElementById('current-0').textContent = '0';
////document.getElementById('current-1').textContent = '0';
//////use queryselector change css,hide dice 
////document.querySelector('.dice').style.display = 'none'; //ready for roll dice
////function btn(){//step1: EventListener call back function define outside
////    //do sth
////}
////document.querySelector('.btn-roll').addEventListener('click',btn)//if btn function not want to be used by others then define btn functin in the eventlistener directly as anonymous function
//
////document.querySelector('.btn-roll').addEventListener('click', function () {}); //step2,changed into anonymous function,plan more actions added into anonymous
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //1.Random number
//    var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//    //2.Display the rolled dice result
//    document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//    var diceDOM = document.querySelector('.dice');
//    diceDOM.style.display = 'block';
//    diceDOM.src = 'dice-' + dice + '.png';
//
//    //3.Update the the round score IF the rolled number wast NOT a 1
//    if (dice !== 1) {
//        roundScore += dice; //add score to roundscore
//        document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//    } else {
//
//        nextPlayer();
//    }
//
//});
////document.querySelector('.btn-hold').addEventListener('click', function () {});
//document.querySelector('.btn-hold').addEventListener('click', function () {
//    //add current score to global score
//    scores[activePlayer] += roundScore;
//    //UPDATE  the UI
//    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//
//    //Check if player won the game
//    //  if(scores[activePlayer]>=100){
//    if (scores[activePlayer] >= 20) { //low down to 20 to test it works
//        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//        document.querySelector('.dice').style.display = 'none'; //hide the dice again if game over,so this line repeat many times
//        document.querySelector('.player-' + activePlayer + "-panel").classList.add('winner'); //a player may repeat wins as game repeat,so we need this way to change css to show it is winner
//        document.querySelector('.player-' + activePlayer + "-panel").classList.remove('active'); ////a player may repeat wins as game repeat,so we need this way to change css to show not active after won
//
//
//    } else {
//
//        nextPlayer();
//    }
//
//});
//
//function nextPlayer() {
//    //next player
//    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');
//    document.querySelector('.dice').style.display = 'none';
//
//}
////document.querySelector('.btn-new').addEventListener('click',function(){});//step1:add {}); first into code to prevent missed later too much lines.
//document.querySelector('.btn-new').addEventListener('click', function () {
//    //    scores = [0, 0]; //all these 3 line codes founded repeat at very beginning,so we must dry it
//    //    roundScore = 0;
//    //    activePlayer = 0;
//    init();//then found this evenlistener function just call init() function than do nothing,so we can shor the code by pass init as para
//});
//
//function init() { //no para need, we just want to do some operations,no need last step input at all
//    scores = [0, 0];
//    roundScore = 0;
//    activePlayer = 0;
//    document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//    document.getElementById('score-1').textContent = '0';
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    //use queryselector change css,hide dice 
//    document.querySelector('.dice').style.display = 'none';
//}
// comment out and move to end for later use 
//var x = document.querySelector('#score-0').textContent;
////////////////////////////////////////version10,  Creating a Game Initialization Function,dry the hide dice and set 0 into init(),dry init as para for click new game eventlistener
//
//var scores, roundScore, activePlayer;
//
//init();
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //1.Random number
//    var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//    //2.Display the rolled dice result
//    document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//    var diceDOM = document.querySelector('.dice');
//    diceDOM.style.display = 'block';
//    diceDOM.src = 'dice-' + dice + '.png';
//
//    //3.Update the the round score IF the rolled number wast NOT a 1
//    if (dice !== 1) {
//        roundScore += dice; //add score to roundscore
//        document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//    } else {
//
//        nextPlayer();
//    }
//
//});
////document.querySelector('.btn-hold').addEventListener('click', function () {});
//document.querySelector('.btn-hold').addEventListener('click', function () {
//    //add current score to global score
//    scores[activePlayer] += roundScore;
//    //UPDATE  the UI
//    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//
//    //Check if player won the game
//    //  if(scores[activePlayer]>=100){
//    if (scores[activePlayer] >= 20) { //low down to 20 to test it works
//        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//        document.querySelector('.dice').style.display = 'none'; //hide the dice again if game over,so this line repeat many times
//        document.querySelector('.player-' + activePlayer + "-panel").classList.add('winner'); //a player may repeat wins as game repeat,so we need this way to change css to show it is winner
//        document.querySelector('.player-' + activePlayer + "-panel").classList.remove('active'); ////a player may repeat wins as game repeat,so we need this way to change css to show not active after won
//
//
//
//    } else {
//
//        nextPlayer();
//    }
//
//});
//
//function nextPlayer() {
//    //next player
//    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');
//    document.querySelector('.dice').style.display = 'none';
//
//}
////document.querySelector('.btn-new').addEventListener('click',function(){});//step1:add {}); first into code to prevent missed later too much lines.
////document.querySelector('.btn-new').addEventListener('click', function () {
////    //    scores = [0, 0]; //all these 3 line codes founded repeat at very beginning,so we must dry it
////    //    roundScore = 0;
////    //    activePlayer = 0;
////    init();//then found this evenlistener function just call init() function than do nothing,so we can shor the code by pass init as para
////});
//document.querySelector('.btn-new').addEventListener('click', init); //make sure no ()after init, ()means call immideatly no () means it is call back
////document.querySelector('.btn-new').addEventListener('click', init());// this init() is wrong
//
//
//
//function init() { //no para need, we just want to do some operations,no need last step input at all
//    scores = [0, 0];
//    roundScore = 0;
//    activePlayer = 0;
//    document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//    document.getElementById('score-1').textContent = '0';
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    //use queryselector change css,hide dice 
//    document.querySelector('.dice').style.display = 'none';
//    //    document.querySelector('#name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2
//    //    document.querySelector('#name-1').textContent = 'Player 2'; //it is randomly player1,2 is winner so just reset both name to player,id is faster,so can change to getElementById 
//    document.getElementById('name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2,important must delete #,# is queryselector only, ornot it will error
//    document.getElementById('name-1').textContent = 'Player 2';
//    //if to begin new game,also need to remove winner css and active,
//    document.querySelector('.player-0-panel').classList.remove('winner'); //not know which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('winner');
//    document.querySelector('.player-0-panel').classList.remove('active'); //not know  which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('active');
//    document.querySelector('.player-0-panel').classList.add('active'); //make play1 active
//    //final touching, after winner found,the dice can still be roll to play game,fix introduce state variables
//}
//// comment out and move to end for later use 
////var x = document.querySelector('#score-0').textContent;

////////////////////////////////////////version11,   Finishing Touches: State Variables
//
////var scores, roundScore, activePlayer;
//var scores, roundScore, activePlayer, gamePlaying;
//
//init();
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //so we roll the dice only if state is playing after we add state gamePlaying,add a if line then move whole block roll dice into it
//    if (gamePlaying) {}
//    //1.Random number
//    var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//    //2.Display the rolled dice result
//    document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//    var diceDOM = document.querySelector('.dice');
//    diceDOM.style.display = 'block';
//    diceDOM.src = 'dice-' + dice + '.png';
//
//    //3.Update the the round score IF the rolled number wast NOT a 1
//    if (dice !== 1) {
//        roundScore += dice; //add score to roundscore
//        document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//    } else {
//
//        nextPlayer();
//    }
//
//});
////document.querySelector('.btn-hold').addEventListener('click', function () {});
//document.querySelector('.btn-hold').addEventListener('click', function () {
//    //add current score to global score
//    scores[activePlayer] += roundScore;
//    //UPDATE  the UI
//    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//
//    //Check if player won the game
//    //  if(scores[activePlayer]>=100){
//    if (scores[activePlayer] >= 20) { //low down to 20 to test it works
//        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//        document.querySelector('.dice').style.display = 'none'; //hide the dice again if game over,so this line repeat many times
//        document.querySelector('.player-' + activePlayer + "-panel").classList.add('winner'); //a player may repeat wins as game repeat,so we need this way to change css to show it is winner
//        document.querySelector('.player-' + activePlayer + "-panel").classList.remove('active'); ////a player may repeat wins as game repeat,so we need this way to change css to show not active after won
//
//
//
//    } else {
//
//        nextPlayer();
//    }
//
//});
//
//function nextPlayer() {
//    //next player
//    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');
//    document.querySelector('.dice').style.display = 'none';
//
//}
////document.querySelector('.btn-new').addEventListener('click',function(){});//step1:add {}); first into code to prevent missed later too much lines.
////document.querySelector('.btn-new').addEventListener('click', function () {
////    //    scores = [0, 0]; //all these 3 line codes founded repeat at very beginning,so we must dry it
////    //    roundScore = 0;
////    //    activePlayer = 0;
////    init();//then found this evenlistener function just call init() function than do nothing,so we can shor the code by pass init as para
////});
//document.querySelector('.btn-new').addEventListener('click', init); //make sure no ()after init, ()means call immideatly no () means it is call back
////document.querySelector('.btn-new').addEventListener('click', init());// this init() is wrong
//
//
//
//function init() { //no para need, we just want to do some operations,no need last step input at all
//    scores = [0, 0];
//    roundScore = 0;
//    activePlayer = 0;
//    //    var gamePlaying=true;//a variable remember state of if game playing, but if declare here other function not accessible the state,so must delete var and declare globally at code top 
//    gamePlaying = true;
//    document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//    document.getElementById('score-1').textContent = '0';
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    //use queryselector change css,hide dice 
//    document.querySelector('.dice').style.display = 'none';
//    //    document.querySelector('#name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2
//    //    document.querySelector('#name-1').textContent = 'Player 2'; //it is randomly player1,2 is winner so just reset both name to player,id is faster,so can change to getElementById 
//    document.getElementById('name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2,important must delete #,# is queryselector only, ornot it will error
//    document.getElementById('name-1').textContent = 'Player 2';
//    //if to begin new game,also need to remove winner css and active,
//    document.querySelector('.player-0-panel').classList.remove('winner'); //not know which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('winner');
//    document.querySelector('.player-0-panel').classList.remove('active'); //not know  which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('active');
//    document.querySelector('.player-0-panel').classList.add('active'); //make play1 active
//    //final touching, after winner found,the dice can still be roll to play game,fix introduce state variables
//}
//// comment out and move to end for later use 
////var x = document.querySelector('#score-0').textContent;

////////////////////////////////////////version12,   Finishing Touches: State Variables,move all roll dice block into  if(gamePlaying){}
//
////var scores, roundScore, activePlayer;
//var scores, roundScore, activePlayer, gamePlaying;
//
//init();
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //so we roll the dice only if state is playing after we add state gamePlaying,add a if line then move whole block roll dice into it,another place need set false is hold listener
//    if (gamePlaying) {
//        //1.Random number
//        var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//        //2.Display the rolled dice result
//        document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//        var diceDOM = document.querySelector('.dice');
//        diceDOM.style.display = 'block';
//        diceDOM.src = 'dice-' + dice + '.png';
//
//        //3.Update the the round score IF the rolled number wast NOT a 1
//        if (dice !== 1) {
//            roundScore += dice; //add score to roundscore
//            document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//        } else {
//
//            nextPlayer();
//        }
//
//    }
//
//});
////document.querySelector('.btn-hold').addEventListener('click', function () {});
//document.querySelector('.btn-hold').addEventListener('click', function () {
//    console.log("before roll dice gamePlaying:   ", gamePlaying);
//    if (gamePlaying) {}
//    //add current score to global score
//    scores[activePlayer] += roundScore;
//    //UPDATE  the UI
//    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//
//    //Check if player won the game
//    //  if(scores[activePlayer]>=100){
//    if (scores[activePlayer] >= 20) { //low down to 20 to test it works
//        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//        document.querySelector('.dice').style.display = 'none'; //hide the dice again if game over,so this line repeat many times
//        document.querySelector('.player-' + activePlayer + "-panel").classList.add('winner'); //a player may repeat wins as game repeat,so we need this way to change css to show it is winner
//        document.querySelector('.player-' + activePlayer + "-panel").classList.remove('active'); ////a player may repeat wins as game repeat,so we need this way to change css to show not active after won
//        //so where is place to change state playing to false?best place is block check if player won
//        gamePlaying = false;
//    } else {
//        nextPlayer();
//    }
//
//});
//
//function nextPlayer() {
//    //next player
//    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');
//    document.querySelector('.dice').style.display = 'none';
//
//}
////document.querySelector('.btn-new').addEventListener('click',function(){});//step1:add {}); first into code to prevent missed later too much lines.
////document.querySelector('.btn-new').addEventListener('click', function () {
////    //    scores = [0, 0]; //all these 3 line codes founded repeat at very beginning,so we must dry it
////    //    roundScore = 0;
////    //    activePlayer = 0;
////    init();//then found this evenlistener function just call init() function than do nothing,so we can shor the code by pass init as para
////});
//document.querySelector('.btn-new').addEventListener('click', init); //make sure no ()after init, ()means call immideatly no () means it is call back
////document.querySelector('.btn-new').addEventListener('click', init());// this init() is wrong
//
//
//
//function init() { //no para need, we just want to do some operations,no need last step input at all
//    scores = [0, 0];
//    roundScore = 0;
//    activePlayer = 0;
//    //    var gamePlaying=true;//a variable remember state of if game playing, but if declare here other function not accessible the state,so must delete var and declare globally at code top 
//    gamePlaying = true;
//    document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//    document.getElementById('score-1').textContent = '0';
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    //use queryselector change css,hide dice 
//    document.querySelector('.dice').style.display = 'none';
//    //    document.querySelector('#name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2
//    //    document.querySelector('#name-1').textContent = 'Player 2'; //it is randomly player1,2 is winner so just reset both name to player,id is faster,so can change to getElementById 
//    document.getElementById('name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2,important must delete #,# is queryselector only, ornot it will error
//    document.getElementById('name-1').textContent = 'Player 2';
//    //if to begin new game,also need to remove winner css and active,
//    document.querySelector('.player-0-panel').classList.remove('winner'); //not know which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('winner');
//    document.querySelector('.player-0-panel').classList.remove('active'); //not know  which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('active');
//    document.querySelector('.player-0-panel').classList.add('active'); //make play1 active
//    //final touching, after winner found,the dice can still be roll to play game,fix introduce state variables
//}
// comment out and move to end for later use 
//var x = document.querySelector('#score-0').textContent;
////////////////////////////////////////version11,   Finishing Touches: State Variables
//
////var scores, roundScore, activePlayer;
//var scores, roundScore, activePlayer, gamePlaying;
//
//init();
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //so we roll the dice only if state is playing after we add state gamePlaying,add a if line then move whole block roll dice into it
//    if (gamePlaying) {}
//    //1.Random number
//    var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//    //2.Display the rolled dice result
//    document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//    var diceDOM = document.querySelector('.dice');
//    diceDOM.style.display = 'block';
//    diceDOM.src = 'dice-' + dice + '.png';
//
//    //3.Update the the round score IF the rolled number wast NOT a 1
//    if (dice !== 1) {
//        roundScore += dice; //add score to roundscore
//        document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//    } else {
//
//        nextPlayer();
//    }
//
//});
////document.querySelector('.btn-hold').addEventListener('click', function () {});
//document.querySelector('.btn-hold').addEventListener('click', function () {
//    //add current score to global score
//    scores[activePlayer] += roundScore;
//    //UPDATE  the UI
//    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//
//    //Check if player won the game
//    //  if(scores[activePlayer]>=100){
//    if (scores[activePlayer] >= 20) { //low down to 20 to test it works
//        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//        document.querySelector('.dice').style.display = 'none'; //hide the dice again if game over,so this line repeat many times
//        document.querySelector('.player-' + activePlayer + "-panel").classList.add('winner'); //a player may repeat wins as game repeat,so we need this way to change css to show it is winner
//        document.querySelector('.player-' + activePlayer + "-panel").classList.remove('active'); ////a player may repeat wins as game repeat,so we need this way to change css to show not active after won
//
//
//
//    } else {
//
//        nextPlayer();
//    }
//
//});
//
//function nextPlayer() {
//    //next player
//    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');
//    document.querySelector('.dice').style.display = 'none';
//
//}
////document.querySelector('.btn-new').addEventListener('click',function(){});//step1:add {}); first into code to prevent missed later too much lines.
////document.querySelector('.btn-new').addEventListener('click', function () {
////    //    scores = [0, 0]; //all these 3 line codes founded repeat at very beginning,so we must dry it
////    //    roundScore = 0;
////    //    activePlayer = 0;
////    init();//then found this evenlistener function just call init() function than do nothing,so we can shor the code by pass init as para
////});
//document.querySelector('.btn-new').addEventListener('click', init); //make sure no ()after init, ()means call immideatly no () means it is call back
////document.querySelector('.btn-new').addEventListener('click', init());// this init() is wrong
//
//
//
//function init() { //no para need, we just want to do some operations,no need last step input at all
//    scores = [0, 0];
//    roundScore = 0;
//    activePlayer = 0;
//    //    var gamePlaying=true;//a variable remember state of if game playing, but if declare here other function not accessible the state,so must delete var and declare globally at code top 
//    gamePlaying = true;
//    document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//    document.getElementById('score-1').textContent = '0';
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    //use queryselector change css,hide dice 
//    document.querySelector('.dice').style.display = 'none';
//    //    document.querySelector('#name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2
//    //    document.querySelector('#name-1').textContent = 'Player 2'; //it is randomly player1,2 is winner so just reset both name to player,id is faster,so can change to getElementById 
//    document.getElementById('name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2,important must delete #,# is queryselector only, ornot it will error
//    document.getElementById('name-1').textContent = 'Player 2';
//    //if to begin new game,also need to remove winner css and active,
//    document.querySelector('.player-0-panel').classList.remove('winner'); //not know which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('winner');
//    document.querySelector('.player-0-panel').classList.remove('active'); //not know  which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('active');
//    document.querySelector('.player-0-panel').classList.add('active'); //make play1 active
//    //final touching, after winner found,the dice can still be roll to play game,fix introduce state variables
//}
//// comment out and move to end for later use 
////var x = document.querySelector('#score-0').textContent;







//////////////////////////////////////version13,   Finishing Touches: State Variables,move all button hold block into  if(gamePlaying){}

//var scores, roundScore, activePlayer;
var scores, roundScore, activePlayer, gamePlaying;

init();
document.querySelector('.btn-roll').addEventListener('click', function () {
    //so we roll the dice only if state is playing after we add state gamePlaying,add a if line then move whole block roll dice into it,another place need set false is hold listener
    console.log("before roll dice gamePlaying:   ", gamePlaying);
    if (gamePlaying) {
        //1.Random number
        var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
        //2.Display the rolled dice result
        //        document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3.Update the the round score IF the rolled number wast NOT a 1
        if (dice !== 1) {
            roundScore += dice; //add score to roundscore
            document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
        } else {

            nextPlayer();
        }

    }

});
//document.querySelector('.btn-hold').addEventListener('click', function () {});
document.querySelector('.btn-hold').addEventListener('click', function () {

    // if (gamePlaying) {}
    if (gamePlaying) {
        //add current score to global score
        scores[activePlayer] += roundScore;
        //UPDATE  the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check if player won the game
        //  if(scores[activePlayer]>=100){
        if (scores[activePlayer] >= 20) { //low down to 20 to test it works
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none'; //hide the dice again if game over,so this line repeat many times
            document.querySelector('.player-' + activePlayer + "-panel").classList.add('winner'); //a player may repeat wins as game repeat,so we need this way to change css to show it is winner
            document.querySelector('.player-' + activePlayer + "-panel").classList.remove('active'); ////a player may repeat wins as game repeat,so we need this way to change css to show not active after won
            //so where is place to change state playing to false?best place is block check if player won
            gamePlaying = false;
            console.log("aftercheck if activeplayer win:   ", gamePlaying);
        } else {
            nextPlayer();
        }

    }

});

function nextPlayer() {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init); //make sure no ()after init, ()means call immideatly no () means it is call back
//document.querySelector('.btn-new').addEventListener('click', init());// this init() is wrong



function init() { //no para need, we just want to do some operations,no need last step input at all
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    //    var gamePlaying=true;//a variable remember state of if game playing, but if declare here other function not accessible the state,so must delete var and declare globally at code top 
    gamePlaying = true;
    document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //use queryselector change css,hide dice 
    document.querySelector('.dice').style.display = 'none';
    //    document.querySelector('#name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2
    //    document.querySelector('#name-1').textContent = 'Player 2'; //it is randomly player1,2 is winner so just reset both name to player,id is faster,so can change to getElementById 
    document.getElementById('name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2,important must delete #,# is queryselector only, ornot it will error
    document.getElementById('name-1').textContent = 'Player 2';
    //if to begin new game,also need to remove winner css and active,
    document.querySelector('.player-0-panel').classList.remove('winner'); //not know which one is winner randomly,just remove both,even not active,there won't be error
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active'); //not know  which one is winner randomly,just remove both,even not active,there won't be error
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active'); //make play1 active
    //final touching, after winner found,the dice can still be roll to play game,fix introduce state variables
}


////////////////////////////////////////Coding Challenge Chanllenge1,   1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
//
////var scores, roundScore, activePlayer;
//var scores, roundScore, activePlayer, gamePlaying;
//var lastDice;
//init();
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //so we roll the dice only if state is playing after we add state gamePlaying,add a if line then move whole block roll dice into it,another place need set false is hold listener
//    console.log("before roll dice gamePlaying:   ", gamePlaying);
//    if (gamePlaying) {
//        //1.Random number
//        var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//        //2.Display the rolled dice result
//        //        document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//        var diceDOM = document.querySelector('.dice');
//        diceDOM.style.display = 'block';
//        diceDOM.src = 'dice-' + dice + '.png';
//
//        //3.Update the the round score IF the rolled number wast NOT a 1
//        if (dice === 6 && lastDice === 6) {
//            //player loose score,playerscore store in scores array scores[]
//            scores[activePlayer] = 0; //then need update the UI
//            //  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];//we know its value is 0,so just change right side to 0 make it short
//            document.querySelector('#score-' + activePlayer).textContent = 0; //then next player turn
//            nextPlayer();
//
//        }
//        // if (dice !== 1) {//change if to else if 
//        else if (dice !== 1) {
//            roundScore += dice; //add score to roundscore
//            document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//        } else {
//
//            nextPlayer();
//        }
//        //  var lastDice=dice;//declare var here is wrong that lastDice value will be lost after this function of btn-roll EventListener
//        lastDice = dice;
//    }
//
//});
////document.querySelector('.btn-hold').addEventListener('click', function () {});
//document.querySelector('.btn-hold').addEventListener('click', function () {
//
//    // if (gamePlaying) {}
//    if (gamePlaying) {
//        //add current score to global score
//        scores[activePlayer] += roundScore;
//        //UPDATE  the UI
//        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//
//        //Check if player won the game
//        //  if(scores[activePlayer]>=100){
//        if (scores[activePlayer] >= 20) { //low down to 20 to test it works
//            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//            document.querySelector('.dice').style.display = 'none'; //hide the dice again if game over,so this line repeat many times
//            document.querySelector('.player-' + activePlayer + "-panel").classList.add('winner'); //a player may repeat wins as game repeat,so we need this way to change css to show it is winner
//            document.querySelector('.player-' + activePlayer + "-panel").classList.remove('active'); ////a player may repeat wins as game repeat,so we need this way to change css to show not active after won
//            //so where is place to change state playing to false?best place is block check if player won
//            gamePlaying = false;
//            console.log("aftercheck if activeplayer win:   ", gamePlaying);
//        } else {
//            nextPlayer();
//        }
//
//    }
//
//});
//
//function nextPlayer() {
//    //next player
//    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');
//    document.querySelector('.dice').style.display = 'none';
//
//}
//
//document.querySelector('.btn-new').addEventListener('click', init); //make sure no ()after init, ()means call immideatly no () means it is call back
////document.querySelector('.btn-new').addEventListener('click', init());// this init() is wrong
//
//
//
//function init() { //no para need, we just want to do some operations,no need last step input at all
//    scores = [0, 0];
//    roundScore = 0;
//    activePlayer = 0;
//    //    var gamePlaying=true;//a variable remember state of if game playing, but if declare here other function not accessible the state,so must delete var and declare globally at code top 
//    gamePlaying = true;
//    document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//    document.getElementById('score-1').textContent = '0';
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    //use queryselector change css,hide dice 
//    document.querySelector('.dice').style.display = 'none';
//    //    document.querySelector('#name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2
//    //    document.querySelector('#name-1').textContent = 'Player 2'; //it is randomly player1,2 is winner so just reset both name to player,id is faster,so can change to getElementById 
//    document.getElementById('name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2,important must delete #,# is queryselector only, ornot it will error
//    document.getElementById('name-1').textContent = 'Player 2';
//    //if to begin new game,also need to remove winner css and active,
//    document.querySelector('.player-0-panel').classList.remove('winner'); //not know which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('winner');
//    document.querySelector('.player-0-panel').classList.remove('active'); //not know  which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('active');
//    document.querySelector('.player-0-panel').classList.add('active'); //make play1 active
//    //final touching, after winner found,the dice can still be roll to play game,fix introduce state variables
//}

////////////////////////////////////////Chanllenge2,   Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript
//
////var scores, roundScore, activePlayer;
//var scores, roundScore, activePlayer, gamePlaying;
//var lastDice;
//init();
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //so we roll the dice only if state is playing after we add state gamePlaying,add a if line then move whole block roll dice into it,another place need set false is hold listener
//    console.log("before roll dice gamePlaying:   ", gamePlaying);
//    if (gamePlaying) {
//        //1.Random number
//        var dice = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//        //2.Display the rolled dice result
//        //        document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//        var diceDOM = document.querySelector('.dice');
//        diceDOM.style.display = 'block';
//        diceDOM.src = 'dice-' + dice + '.png';
//
//        //3.Update the the round score IF the rolled number wast NOT a 1
//        if (dice === 6 && lastDice === 6) {
//            //player loose score,playerscore store in scores array scores[]
//            scores[activePlayer] = 0; //then need update the UI
//            //  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];//we know its value is 0,so just change right side to 0 make it short
//            document.querySelector('#score-' + activePlayer).textContent = 0; //then next player turn
//            nextPlayer();
//
//        }
//        // if (dice !== 1) {//change if to else if 
//        else if (dice !== 1) {
//            roundScore += dice; //add score to roundscore
//            document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//        } else {
//
//            nextPlayer();
//        }
//        //  var lastDice=dice;//declare var here is wrong that lastDice value will be lost after this function of btn-roll EventListener
//        lastDice = dice;
//    }
//
//});
////document.querySelector('.btn-hold').addEventListener('click', function () {});
//document.querySelector('.btn-hold').addEventListener('click', function () {
//
//    // if (gamePlaying) {}
//    if (gamePlaying) {
//        //add current score to global score
//        scores[activePlayer] += roundScore;
//        //UPDATE  the UI
//        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//        var input = document.querySelector('.final-score').value;
//        //undefined,0,null "" are cocerced to false,in case user input nothing ,we need make code still able running 
//        if (input) {
//            var winningScore = input;
//        } else {
//            winningScore = 20;
//        }
//        //Check if player won the game
//        //  if(scores[activePlayer]>=100){
//        if (scores[activePlayer] >= 20) { //low down to 20 to test it works
//            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//            document.querySelector('.dice').style.display = 'none'; //hide the dice again if game over,so this line repeat many times
//            document.querySelector('.player-' + activePlayer + "-panel").classList.add('winner'); //a player may repeat wins as game repeat,so we need this way to change css to show it is winner
//            document.querySelector('.player-' + activePlayer + "-panel").classList.remove('active'); ////a player may repeat wins as game repeat,so we need this way to change css to show not active after won
//            //so where is place to change state playing to false?best place is block check if player won
//            gamePlaying = false;
//            console.log("aftercheck if activeplayer win:   ", gamePlaying);
//        } else {
//            nextPlayer();
//        }
//
//    }
//
//});
//
//function nextPlayer() {
//    //next player
//    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');
//    document.querySelector('.dice').style.display = 'none';
//
//}
//
//document.querySelector('.btn-new').addEventListener('click', init); //make sure no ()after init, ()means call immideatly no () means it is call back
////document.querySelector('.btn-new').addEventListener('click', init());// this init() is wrong
//
//
//
//function init() { //no para need, we just want to do some operations,no need last step input at all
//    scores = [0, 0];
//    roundScore = 0;
//    activePlayer = 0;
//    //    var gamePlaying=true;//a variable remember state of if game playing, but if declare here other function not accessible the state,so must delete var and declare globally at code top 
//    gamePlaying = true;
//    document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//    document.getElementById('score-1').textContent = '0';
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    //use queryselector change css,hide dice 
//    document.querySelector('.dice').style.display = 'none';
//    //    document.querySelector('#name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2
//    //    document.querySelector('#name-1').textContent = 'Player 2'; //it is randomly player1,2 is winner so just reset both name to player,id is faster,so can change to getElementById 
//    document.getElementById('name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2,important must delete #,# is queryselector only, ornot it will error
//    document.getElementById('name-1').textContent = 'Player 2';
//    //if to begin new game,also need to remove winner css and active,
//    document.querySelector('.player-0-panel').classList.remove('winner'); //not know which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('winner');
//    document.querySelector('.player-0-panel').classList.remove('active'); //not know  which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('active');
//    document.querySelector('.player-0-panel').classList.add('active'); //make play1 active
//    //final touching, after winner found,the dice can still be roll to play game,fix introduce state variables
//}
////////////////////////////////////////Chanllenge3,  Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice
//
////var scores, roundScore, activePlayer;
//var scores, roundScore, activePlayer, gamePlaying;
//var lastDice;
//init();
//document.querySelector('.btn-roll').addEventListener('click', function () {
//    //so we roll the dice only if state is playing after we add state gamePlaying,add a if line then move whole block roll dice into it,another place need set false is hold listener
//    console.log("before roll dice gamePlaying:   ", gamePlaying);
//    if (gamePlaying) {
//        //1.Random number
//        var dice1 = Math.floor(Math.random() * 6) + 1;
//        var dice2 = Math.floor(Math.random() * 6) + 1; //moved random function here to get random number,and because dice variable is access inside this anonymous so remove dice from top too:var scores, roundScore, activePlayer,dice-very important;
//        //2.Display the rolled dice result
//        //        document.querySelector('.dice').style.display = 'block'; //dice dom use more than once in fucntion so store it in a varaible for dry 
//        //var diceDOM = document.querySelector('.dice');
//        //        diceDOM.style.display = 'block';
//        //        diceDOM.src = 'dice-' + dice + '.png';
//        document.getElementById('dice-1').style.display = 'block';
//        document.getElementById('dice-2').style.display = 'block';
//        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
//        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
//
//        //3.Update the the round score IF the rolled number wast NOT a 1
//        /*  if (dice === 6 && lastDice === 6) {
//              //player loose score,playerscore store in scores array scores[]
//              scores[activePlayer] = 0; //then need update the UI
//              //  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];//we know its value is 0,so just change right side to 0 make it short
//              document.querySelector('#score-' + activePlayer).textContent = 0; //then next player turn
//              nextPlayer();
//
//          }
//          // if (dice !== 1) {//change if to else if 
//          else if (dice !== 1) {
//              roundScore += dice; //add score to roundscore
//              document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//          } else {
//
//              nextPlayer();
//          }
//          //  var lastDice=dice;//declare var here is wrong that lastDice value will be lost after this function of btn-roll EventListener
//          lastDice = dice;
//          */
//        if (dice1 !== 1 && dice2 !== 1) {
//            roundScore += dice1 + dice2; //add score to roundscore
//            document.querySelector('#current-' + activePlayer).textContent = roundScore; //moved the dispay dice line back to here
//        } else {
//
//            nextPlayer();
//        }
//    }
//
//});
////document.querySelector('.btn-hold').addEventListener('click', function () {});
//document.querySelector('.btn-hold').addEventListener('click', function () {
//
//    // if (gamePlaying) {}
//    if (gamePlaying) {
//        //add current score to global score
//        scores[activePlayer] += roundScore;
//        //UPDATE  the UI
//        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//        var input = document.querySelector('.final-score').value;
//        //undefined,0,null "" are cocerced to false,in case user input nothing ,we need make code still able running 
//        if (input) {
//            var winningScore = input;
//        } else {
//            winningScore = 20;
//        }
//        //Check if player won the game
//        //  if(scores[activePlayer]>=100){
//        if (scores[activePlayer] >= 20) { //low down to 20 to test it works
//            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//            // document.querySelector('.dice').style.display = 'none'; //hide the dice again if game over,so this line repeat many times
//            document.getElementById('dice-1').style.display = 'none';
//            document.getElementById('dice-2').style.display = 'none';
//            document.querySelector('.player-' + activePlayer + "-panel").classList.add('winner'); //a player may repeat wins as game repeat,so we need this way to change css to show it is winner
//            document.querySelector('.player-' + activePlayer + "-panel").classList.remove('active'); ////a player may repeat wins as game repeat,so we need this way to change css to show not active after won
//            //so where is place to change state playing to false?best place is block check if player won
//            gamePlaying = false;
//            console.log("aftercheck if activeplayer win:   ", gamePlaying);
//        } else {
//            nextPlayer();
//        }
//
//    }
//
//});
//
//function nextPlayer() {
//    //next player
//    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');
//    // document.querySelector('.dice').style.display = 'none';
//    document.getElementById('dice-1').style.display = 'none';
//    document.getElementById('dice-2').style.display = 'none';
//
//}
//
//document.querySelector('.btn-new').addEventListener('click', init); //make sure no ()after init, ()means call immideatly no () means it is call back
////document.querySelector('.btn-new').addEventListener('click', init());// this init() is wrong
//
//
//
//function init() { //no para need, we just want to do some operations,no need last step input at all
//    scores = [0, 0];
//    roundScore = 0;
//    activePlayer = 0;
//    //    var gamePlaying=true;//a variable remember state of if game playing, but if declare here other function not accessible the state,so must delete var and declare globally at code top 
//    gamePlaying = true;
//    document.getElementById('score-0').textContent = '0'; //getElementById faster than querySelector
//    document.getElementById('score-1').textContent = '0';
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
//    //use queryselector change css,hide dice 
//    //    document.querySelector('.dice').style.display = 'none';
//    document.getElementById('dice-1').style.display = 'none'; //should do hide dice function to dry these 2 line
//    document.getElementById('dice-2').style.display = 'none';
//    //    document.querySelector('#name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2
//    //    document.querySelector('#name-1').textContent = 'Player 2'; //it is randomly player1,2 is winner so just reset both name to player,id is faster,so can change to getElementById 
//    document.getElementById('name-0').textContent = 'Player 1'; //if replay game need change winner back to player1 or 2,important must delete #,# is queryselector only, ornot it will error
//    document.getElementById('name-1').textContent = 'Player 2';
//    //if to begin new game,also need to remove winner css and active,
//    document.querySelector('.player-0-panel').classList.remove('winner'); //not know which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('winner');
//    document.querySelector('.player-0-panel').classList.remove('active'); //not know  which one is winner randomly,just remove both,even not active,there won't be error
//    document.querySelector('.player-1-panel').classList.remove('active');
//    document.querySelector('.player-0-panel').classList.add('active'); //make play1 active
//    //final touching, after winner found,the dice can still be roll to play game,fix introduce state variables
//}
