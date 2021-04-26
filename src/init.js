$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      600,
      Math.random() * 1200,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  const randomHeight = () => {
    return (Math.random() * 350) + 268;
  };
  const randomLeft = () => {
    return Math.random() * 1200;
  };

  $('.line-up').on('click', function(event) {
    for (let dancer of window.dancers) {
      if (dancer.$node[0].classList.contains('stewie')) {
        dancer.$node.animate({
          left: 700,
          top: randomHeight()
        });
      } else if (dancer.$node[0].classList.contains('peter')) {
        dancer.$node.animate({
          left: 580,
          top: randomHeight()
        });
      } else {
        dancer.$node.animate({
          left: 700,
          top: randomHeight()
        });
      }
    }
  });

  $('.split').on('click', function(event) {
    window.dancers.sort((a, b) => {
      return a.$node[0].y - b.$node[0].y;
    });
    for (let i = 0; i < window.dancers.length; i ++) {
      window.dancers[i].$node.animate({
        opacity: 0
      });
    }
  });
});

