readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

rl.on('line', function(linein) {
	lineinsplit = linein.split(''); // Splits the line
	lineinreverse = lineinsplit.reverse(); // Reverses the array from the split
	licount = linein.length; // Determines the length of the line in
	lisplice = lineinreverse.splice(licount/2, 1); // Removes the middlemost character
	out = lineinreverse.join(''); // Changes the array to a string 
	console.log(out); // Sends the output to the console
});
