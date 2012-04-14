i = 15432;

function whatNums(i) {
	s = i.toString();
	s = s.split("");
	s = s.sort();
	s = s.join();
	return s;
}

ifind = i;

found = false;

while(!found)
{	
	if(ifind > i && whatNums(ifind) == whatNums(i)){
		console.log(ifind);
		found = true;
	}
	ifind++;
}
