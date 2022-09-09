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
  result.insertAdjacentHTML = currencyFormat(newPrice)
}

function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

// Preloader
$(document).ready(function () {
  var preLoderLi = $(".preload li"),
    pageDiv = $(".page-transition .div"),
    slideDown = new TimelineMax({ paused: true }),
    loading = new TimelineMax({ paused: true, repeat: 2 }),
    slideUp = new TimelineMax({ paused: true }),
    loadAnimation = new TimelineMax({ repeat: -1 });

  slideDown.staggerTo(
    pageDiv,
    0.5,
    {
      bottom: "0%",
      ease: Power2.easeIn
    },
    0.2
  );

  loading
    .staggerFrom(
      preLoderLi,
      0.5,
      {
        y: -15,
        autoAlpha: 0,
        ease: Power1.easeIn
      },
      0.2
    )
    .staggerTo(
      preLoderLi,
      0.5,
      {
        y: 35,
        autoAlpha: 0,
        ease: Power1.easeIn
      },
      0.1
    );

  slideUp.staggerTo(
    pageDiv,
    0.5,
    {
      bottom: "100%",
      ease: Power2.easeOut
    },
    0.2
  );

  loadAnimation
    .add(slideDown.play(), 0.5)
    .add(loading.play())
    .add(slideUp.play());
});


