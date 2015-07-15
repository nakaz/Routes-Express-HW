console.log('THE CALCULATOR IS RUNNINGGGGG!!!!!');

module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
};

function add(x, y){
  return x + y;
}

function subtract(x, y){
  return x - y;
}

function multiply(x, y){
  return x * y;
}

function divide(x,y){
  return x / y;
}