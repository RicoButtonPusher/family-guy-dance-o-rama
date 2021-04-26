var addBrian = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.timer = timeBetweenSteps;
  this.$node = $('<img src="../src/images/brianPBJ.gif" class="brian gif">');


  this.setPosition(top, left);
};

addBrian.prototype = Object.create(MakeDancer.prototype);
addBrian.prototype.constructor = addBrian;
addBrian.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timer);
};