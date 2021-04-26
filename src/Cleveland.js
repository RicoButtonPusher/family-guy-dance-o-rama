var addCleveland = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.timer = timeBetweenSteps;
  this.$node = $('<img src="../src/images/Cleveland.gif" class="cleveland gif">');
  this.setPosition(top, left);
};

addCleveland.prototype = Object.create(MakeDancer.prototype);
addCleveland.prototype.constructor = addCleveland;
addCleveland.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timer);
};