var conversion = function(gallons){
return gallons * 3.78541;
};
var gallons = parseFloat(prompt("How many gallons?"));
var result = conversion(gallons);
alert(+ result + " litres.");
