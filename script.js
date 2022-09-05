function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

// window.alert("Project price check.")
// var currentPrice = window.prompt("Current price", "Please use only numbers");
// var newPrice = window.prompt("New Price");
// var marketCap = window.prompt("Market cap");

// x = newPrice / currentPrice
// y = x * marketCap

// final = currencyFormat(y)

// window.alert(final + " That will be the required market cap for " + newPrice +"$");

//    sayHi = function () {
//     var info1 = parseInt(document.getElementById("info1").value);
//     var info2 = parseInt(document.getElementById("info2").value);
//     var info3 = parseInt(document.getElementById("info3").value);
    
   
//     var Answer = document.getElementById("Answer");
//     Answer.value = Math.round((info2 / info1) * info3);
//    } // end sayHi

   
// alert(currencyFormat(Answer.value))



function marketCalc() {
    var currentPrice;
    var newPrice;
    var marketCap;
    var finalMarket;
    var result = document.getElementById('finalMarket')
    currentPrice = document.getElementById("currentPrice").value;
    newPrice = document.getElementById("newPrice").value;
    marketCap = document.getElementById("marketCap").value;
    finalMarket = Math.round((newPrice / currentPrice) * marketCap);
    console.log(finalMarket);
    result.innerHTML = currencyFormat(finalMarket)
}

currencyFormat(finalMarket)