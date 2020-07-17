//Problem 1- convert feet to mile

function feetToMile(feet){
    var mile = feet/5280;
    var mile = mile.toFixed(2);
    var mile = Math.abs(mile);
    return mile;
}

var distence1 = feetToMile(10560);
console.log(distence1);
var distence2 = feetToMile(-50145);
console.log(distence2);

//Problem 2- wood calculator

function woodCalculator(chair, table, bed){
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    var result = woodForChair + woodForTable + woodForBed;
    return result;
}
 var customar1 = woodCalculator(3, 1, 1);
 console.log(customar1);
 var customar2 = woodCalculator(5, 4, 10);
 console.log(customar2);

 //Problem 3- brick calculator

 function brickCalculator(numberOfFloor){
     if(numberOfFloor <= 10){
       var brickFor1Floor = 15 * 1000;
       var result = numberOfFloor * brickFor1Floor;
      }
      else if(numberOfFloor > 10 && numberOfFloor <= 20){
          var brickFor1st10thFloor_using15feet = 15 * 1000 * 10;
          var brickFor_UpTo20Floor = 12 * 1000 * numberOfFloor;
          var brickFor1st10thFloor_using12feet = 12 * 1000 * 10;
          var brickFor10to20Floor = brickFor_UpTo20Floor - brickFor1st10thFloor_using12feet;
          var result = brickFor1st10thFloor_using15feet + brickFor10to20Floor;
      }
      else{
          var brickFor1st10th = 15 * 1000 * 10;
          var brickFor10to20 = 12 * 1000 * 10;
          var brickFor1toUpFloor = 10 * 1000 * numberOfFloor;
          var brick1to20Floor = 10 * 1000 * 20;
          var brickFor21toUp  = brickFor1toUpFloor - brick1to20Floor;
          var result = brickFor1st10th + brickFor10to20 + brickFor21toUp;
      }
     return result;
 }
 var customar4 = brickCalculator(21);
 console.log(customar4);


 //Problem 4- tinyFriend

 function tinyFriend(name) {
    var tiny = name[0];
    for (var i = 1; i < name.length; i++) {
        if (name[i].length < tiny.length && name[i] != " ") {
            tiny = name[i];
        }
    }
    return tiny;
}

var name = ["Tushar", "Mohshin", " ", "Sajjad", " ", "Saiful", "Arif", "Robel", "Hasan",];
console.log(tinyFriend(name));