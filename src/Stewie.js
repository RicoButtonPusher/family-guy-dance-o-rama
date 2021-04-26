var addStewie = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.timer = timeBetweenSteps;
  this.$node = $('<img src="../src/images/Stewie.gif" class="stewie gif">');
  this.setPosition(top, left);
};

addStewie.prototype = Object.create(MakeDancer.prototype);
addStewie.prototype.constructor = addStewie;
addStewie.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timer);
};