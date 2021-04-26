var addMeg = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.timer = timeBetweenSteps;
  this.$node = $('<img src="../src/images/meg.gif" class="meg gif">');
  this.setPosition(top, left);
};

addMeg.prototype = Object.create(MakeDancer.prototype);
addMeg.prototype.constructor = addMeg;
addMeg.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timer);
};