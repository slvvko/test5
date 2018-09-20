
var inputString = prompt('Введите 10 чисел через пробел', '');

// var inputString = "12 dd 122 55f 3 -666 -2 7 -7 0 -1 3 1 555 23 kj23 1 gd 4 34 njk34 "

function splitString(stringToSplit, separator) {
  var inputNumbers = stringToSplit.split(separator);

  // console.log('введено:"' + stringToSplit + '"');

  return inputNumbers;
}

inputNumbers = splitString(inputString, ' ');

for (var i = 0; i < inputNumbers.length; i++) {
	if (!isNumeric(inputNumbers[i])) {
		inputNumbers.splice(i, 1);
	}
} 

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && !isNaN(parseInt(n, 10)) && isFinite(n);
}

function compareNumbers(a, b) {
    return a - b;
}

var sortedNumbers = inputNumbers.sort(compareNumbers);

alert(sortedNumbers.join(', '));  // 1, 2, 15

