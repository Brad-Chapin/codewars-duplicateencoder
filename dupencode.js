function dupes (str) {
  str = str.toLowerCase();
  let counts = {}, newStr = "";
  for (let i = 0; i < str.length; i++){
    counts[str[i]] = (counts[str[i]] || 0) + 1;
  };
  for (let x = 0; x < str.length; x++){
    if (counts[str[x]] == 1){
      newStr += "(";
    } else {
      newStr += ")";
    }
  }
  return newStr;
}

console.log(dupes("din")); // "((("
console.log(dupes("recede")); // "()()()"
console.log(dupes("Success")); //")())())"
console.log(dupes("(( @")); //"))(("
