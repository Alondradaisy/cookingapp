var toFarenheit = function(celsius) {
	return (celsius *9/5)+32;
};

var number = prompt("Enter degrees in Celsius:");
var farenheit = toFarenheit(number);
alert(farenheit);


var toCelcius = function(farenheit) {
	return (farenheit-32)*5/9;
}

var number = prompt("Enter degrees in Farenheit:");
var celcius = toCelcius(number);
alert(celcius);


var toLiter = function(gallon) {
	return (gallon*3.78);
};

var number = prompt("Enter number of gallons:");
var liter = toLiter(number);
alert(liter);


var toGallon = function(liter) {
	return (liter/3.78)
}

var number = prompt("Enter number of liters:");
var gallon = toGallon(number)
alert(gallon);

