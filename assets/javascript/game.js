// Create variables randomnumber, wins, losses, total score, score counter, crystalclick, 
var wins= 0;
var losses = 0;
var totalscore = "";
//var scorecounter = pinkg + diamondg + greeng + yellowg;
var randomnumber = [];
var pinkg = DispNum();
var diamondg =DispNumD();
var greeng = DispNumG();
var yellowg =DispNumY(); 
var randNum = DisplayNumber();

// Create random number to be matched
function DisplayNumber() {
        return Math.floor(Math.random() * (120 - 19) + 19);
    }
$(".random").click(function(){
    if (randNum > 0 ){
    $(".random").text(randNum);
    }
})

// en las gemas, hacer el math.random *11 y sumarle 1

function DispNum() {
    return Math.floor(Math.random() * (12 - 1) + 1);
}
$("#pink").click(function(){
    if (pinkg > 0){
    $("#pink").text(pinkg);
    }
})

function DispNumD() {
    return Math.floor(Math.random() * (12 - 1) + 1);
}
$("#diamond").click(function(){
    if (diamondg > 0){
    $("#diamond").text(diamondg);
    }
})

function DispNumG() {
    return Math.floor(Math.random() * (12 - 1) + 1);
}
$("#green").click(function(){
    if (greeng > 0){
    $("#green").text(greeng);
    }
})

function DispNumY() {
    return Math.floor(Math.random() * (12 - 1) + 1);
}
$("#yellow").click(function(){
    if (yellowg > 0){
    $("#yellow").text(yellowg);
    }
})

var scorecounter = pinkg + diamondg + greeng + yellowg;

$(".counter").click(function(){
    if(pinkg>0 && diamondg>0 && greeng>0 && yellowg>0){
        } $(".counter").text(scorecounter);
})

$(".score").click(function (){
    if (scorecounter == randNum) {
        wins = 1;
        $(".W").text(wins);
    } else {
        losses = 1;
        $(".L").text(losses);
    }
});



// hacer funciones para start, asignando valor random
// utilizar el ejercicio de los botones para asignar los valores de las gemas
// Create crystal buttons with values, add the values in score counter
// When number of times of clickingvalues equal 8, then add a lost in losses 
// When values from player match random number in 7 or less times, indicate win and add it in wins
