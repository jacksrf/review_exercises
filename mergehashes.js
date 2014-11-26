var blue = {
  "Heisenberg": "Hello, anyone home?",
  "Cap'n Cook": "Science, friend!",
  "James McGill": "Ring, ring!"
}
var ciudad = {
  "Vuente": "Salud!",
  "Gus": "One taste and you'll know.",
  "Tio": "Family is all."
}

function mergeHashes(x,y){
    var z = {};
    for (var attrname in x) { 
    	z[attrname] = x[attrname]; 
    }
    for (var attrname in y) { 
    	z[attrname] = y[attrname]; 
    }
    return z;
}

var happyFamily = mergeHashes(blue,ciudad);

console.log(happyFamily);