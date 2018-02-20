function CountModel() {
  this._count = 0;
};

CountModel.prototype.count = function() {
  return this._count;
};

CountModel.prototype.set = function(count) {
  this._count = count;
};

var countModel = new CountModel();

// How does the printed output of the program change if you add this
// code? Why?

countModel.set = function() {
  return "hello";
};

countModel.set(5);

console.log("count is", countModel.count());

// even though set doesn't accept arguments (line 18) and we pass one (line 22), this funciton is still working but
// not changing the this._count.
