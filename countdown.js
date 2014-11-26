var count=11;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
  if (count > 1){
  	count -= 1;
	console.log(count);
	  if (count <= 1)
	  {
	  	console.log("HAPPY NEW YEAR");
	     clearInterval(counter);
	     return;
	  }
	}
}

console.log(counter);
