function currencyFormat(num) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

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
