var a = [3,4,5,6,20,11];

var removeEvens = function(arr) {
	var b = [];
	for (i = 0; i < arr.length; i++) {
		var x = (arr[i]);
		if (x % 2 === 0) {
		 b.push(arr[i]);
		}
	}
	return b
}

console.log(removeEvens(a));