// Function-1

function kilometerToMeter(distance){
    var meter = distance * 1000;
    return  meter;

}

var rastaMeter = kilometerToMeter(2);
console.log(rastaMeter)


// Function-2

function budgetCalculator( watch, mobile, laptop){
 var total = watch * 50 + mobile * 100 + laptop * 500;
 return total; 
   
}
var sum  = budgetCalculator(2, 2, 2);
console.log(sum);



// Function-3

function hotelCost(day){
    var rent = 0;
    if(day <=10){
        rent = day * 100;
    } else if (day <=20){
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        rent = firstPart + secondPart;

    } else { 
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var thirdPart = remaining * 50;
        rent = firstPart + secondPart + thirdPart;

    }
    return rent;
}

var count = hotelCost(7);
console.log(count);


// Function-4

function megaFriend(friendsName){
    var longestElement = 0;
    var bigName;
      for (var i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > longestElement) {
           longestElement = friendsName[i].length;
          bigName = friendsName[i];
        }
      }
    return bigName;
  }
  var result = megaFriend(["mou", "Poroma", "Roma","Tulima", "Modhurima"]);
  console.log(result);



