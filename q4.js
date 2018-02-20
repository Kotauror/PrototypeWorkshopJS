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


CountModel.prototype.set = function(count) {
  return "world";
};

countModel.set(5);

console.log("count is", countModel.count());


/// lines 17 - 19  - new function set but not for the prototype (CountModel), but for instance countModel - so it overwrites the prototype funciton. Now the set function
// only returns helo.

// always prioritize the instance function. - overwrites set on 9 and set on 22. 
