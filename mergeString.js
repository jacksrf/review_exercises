

var mergeString = function() {
	var names = ["Trey","James","John"];
	var greeting = "Hey there, ";
	var y = [];
	 for (i = 0; i < names.length; i++) {
	 var greetingString = greeting.concat(names[i]+".");
		y.push(greetingString);
	}
	var result = y.join(" ");
	return result
}

console.log(mergeString());