// function currencyFormat(num) {
//   return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
// }
const currencyFormat = (num) => {
  return num
    ? "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    : "No value";
};

//new function updated to const from function, need testing and improvement
const marketCalc = () => {
  var currentPrice, newPrice, marketCap, finalMarket;
  var result = document.getElementById("finalMarket");
  currentPrice = document.getElementById("currentPrice").value;
  newPrice = document.getElementById("newPrice").value;
  marketCap = document.getElementById("marketCap").value;
  finalMarket = Math.round((newPrice / currentPrice) * marketCap);
  // console.log(finalMarket);
  result.innerHTML = currencyFormat(finalMarket);
  result.insertAdjacentHTML = currencyFormat(newPrice);
};
