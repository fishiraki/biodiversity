var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);


var numbers = [0,2,4,6,8];
var plusfive = numbers.map(function(num){
    return num + 5;
});
console.log(plusfive);


cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

PopulationSize = cities.map(function(Population){
    return Population.population;
});
console.log(PopulationSize);

var numbers = [1,2,3,4,5];
var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var swords = words.filter(function(word){
    return words.startsWith("s")
});
console.log(swords);

var numbers = [1,2,3,4,5];
var doubled = numbers.map(num => num * 2);
console.log(doubled);

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

var integers = [0,1,2,3,4,5];
slice1 = integers.slice(0,2);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );

