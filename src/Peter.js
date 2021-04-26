var addPeter = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.timer = timeBetweenSteps;
  this.$node = $('<img src="../src/images/peter.gif" class="peter gif">');


  this.setPosition(top, left);
};

addPeter.prototype = Object.create(MakeDancer.prototype);
addPeter.prototype.constructor = addPeter;
addPeter.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timer);
};