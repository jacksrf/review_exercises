
//# 3 answer
var fun = ["pretzels", "cheez-its", "m&ms"];
var work = ["raisins", "dried apricots", "nuts"];

var funWork = fun.concat(work);
console.log(funWork);

//bonus problem
function altCombine() {
	var fun = ["pretzels", "cheez-its", "m&ms"];
	var work = ["raisins", "dried apricots", "nuts"];
	var altFunWork = [];
	for (i=0; i < fun.length; i++) {
		altFunWork.push(fun[i]);
		altFunWork.push(work[i]);
	}
	return altFunWork
}

console.log(altCombine());