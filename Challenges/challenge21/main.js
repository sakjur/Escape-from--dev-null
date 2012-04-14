(function(x){
	console.log("Hej " + x || "världen");
	arguments.callee("Mars")
})();
