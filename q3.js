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

// empty block on line 7 makes each instance of CountModel undefined. 
