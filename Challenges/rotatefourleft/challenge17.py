string = "abcdefghi"
string2 = ""

for letter in string:
  string2 += " " + letter

string2 = string2.split()

i = 0
while(i<4):
  string2.append(string2[0])
  string2.pop(0)
  i += 1

stringfin = ""

for letter in string2:
  stringfin += letter

print(stringfin)

