function reverse(word) {
  var splitString = word.split("");
  var reverseArray = splitString.reverse();
  var joinWord = reverseArray.join("");
  console.log(joinWord);
};

reverse('Jonathan');
