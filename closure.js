//1
function sum(number_1) {
  
    return function(number_2) {
        return number_1 + number_2;
    }
  }
  
  // 2
  function inBetween(a, b) {
	return function(x) {
  	return x >= a && x <= b; 
  }
}

function inArray(arrayA) {
    return function(item, index, arrayB) {
  	    return ~(arrayA.indexOf(item))
        //array.includes(item) более читабельно
  }
}
//3
function byField(arrgument) {
	return function(a, b) {
  	return (a, b) => a[argument] > b[argument] ? 1 : -1;
  }
}
//4
