var addQuagmire = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.timer = timeBetweenSteps;
  this.$node = $('<img src="../src/images/quagmire.gif" class="quagmire gif">');
  this.setPosition(top, left);
};

addQuagmire.prototype = Object.create(MakeDancer.prototype);
addQuagmire.prototype.constructor = addQuagmire;
addQuagmire.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timer);
  // $('.quagmire').animate({
  //   left: 5
  // })
  // $('.quagmire').animate({
  //   left: 0
  // })
};