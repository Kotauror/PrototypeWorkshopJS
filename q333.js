function CountModel() {
  this._count = 0;

  // How does the printed output of the program change if you
  // uncomment the line below? Why does this happen?

  return {};
};

var countModel = new CountModel();

CountModel.prototype.count = function() {
  return this._count;
};

CountModel.prototype.set = function(count) {
  this._count = count;
}

countModel.set(5);
countModel.count();

var countModel = new CountModel();
countModel.set(5);
console.log("count is", countModel.count());


// return {} breaks the program because is an object because it has a prototype.
// strings, booleans don't break the program as they are primitives. 
