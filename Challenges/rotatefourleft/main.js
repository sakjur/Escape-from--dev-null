string = "abcdefghi";

string = string.split("");

for(i = 0; i < 4; i++)
{
	string.push(string[0]);
	string.splice(0, 1);
}

string = string.join("");
console.log(string);
