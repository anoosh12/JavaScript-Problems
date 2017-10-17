//write first method
//function sleepIn(weekday,vacation) {
    if(vacation){
        return true;
    }
    if(weekday) {
        return false;
    } else {
        return true;
    }

//write second method
function nextOne(a_smile, b_smile) {
if (a_smile != b_smile){
    return false;
    } else {
    return true;
}


}



function string_times(word, num){
    var quote = "";
    for (var i = 0; i < num; i++){
        quote = quote += word;
    }
    return quote;


}


function front_times(word, n){
    quote = "";
    var front = word.substring(0,3);
    for (var i = 0; i < n; i++){
        quote = quote + front
    }
    return quote;
}

function string_bits(word) {
    var answer = "";
    for (var i = 0; i < word.length; i = i + 2){

        answer = answer + word[i];
}
    return answer;

}

function caughtSpeeding(speed, birthday){
    var noTicket = 0;
    var smallTicket = 1;
    var bigTicket = 2;

    if(birthday == true){
        speed = speed - 5;
    }

    if (speed <= 60){
        return noTicket;
    }
    if (speed > 61 && speed <= 80){
        return smallTicket;
    }

    if (speed >= 81){
        return bigTicket;
    }

}

function fizz_buzz(num){
    var fizz = num % 3 == 0 && num % 5 != 0;
    var buzz = num % 5 == 0 && num % 3 != 0;
    var FizzBuzz = num % 3 == 0 && num % 5 == 0;

    if(fizz){
        return "Fizz";
    }

    if(buzz){
        return "Buzz";
    }

    if(FizzBuzz){
        return "FizzBuzz";
    }

    return num + "!";
}

function teaParty(tea, candy) {

    var bad = 0;
    var good = 1;
    var great = 2;

   if (tea < 5 || candy < 5){
        return bad;
   }


   if (tea >= candy * 2 || candy >= tea * 2){
       return great;
   }

    if (tea >= 5 && candy >= 5){
        return good;
    }
}

function blackjack(num1, num2){

   if (num1 > 21 && num2 > 21){
       return 0;
   }

   if(num1 > 21 && num2 <= 21){
       return num2;
   }

   if(num2 > 21 && num1 <= 21){
       return num1;
   }

    if (num1 > num2){
       return num1;
   }else {
       return num2;
   }

}

function loneSum(a, b, c){

    if (a==b && b==c && a==c){
        a=0;
        b=0;
        c=0;
    }

    if(a==b){
        a=0;
        b=0;
    }

    if (b==c){
        b=0;
        c=0;
    }
    if(a==c){
        a=0;
        c=0;
    }

    return a + b + c;

}


function tester() {

    document.getElementById("output").innerHTML = sleepIn(true, false);
   document.getElementById("output2").innerHTML = nextOne(true, false);
   document.getElementById("output3").innnerHTML = string_times(code, 5);
    document.getElementById("output4").innnerHTML = front_times(go , 7);
    document.getElementById("output5").innnerHTML = string_bits(monkey);
    document.getElementById("output6").innnerHTML = caughtSpeeding(65, false);
    document.getElementById("output7").innnerHTML = fizz_buzz(52);
    document.getElementById("output8").innnerHTML = teaParty(7,13);
    document.getElementById("output9").innnerHTML = blackJack(5, 7);
    document.getElementById("output10").innnerHTML = loneSum(3,7,9);

}

