//! Start by creating the variables for the data recorded


const day1TempF = 32

const day2TempC = 25

const day3TempF = 70

const day4TempC = 18

const day5TempF = 80

const day6TempC = 15

const day7TempF = 72

const day8TempC = 28

const day9TempF = 68

const day10TempC = 20

const day11TempF = 75

const day12TempC = 23

const day13TempF = 82

const day14TempC = 30

const day15TempF = 65

const day16TempC = 22

const day17TempF = 77

const day18TempC = 26

const day19TempF = 78

const day20TempC = 24

const day21TempF = 73

const day22TempC = 21

const day23TempF = 79

const day24TempC = 27

const day25TempF = 71

const day26TempC = 19

const day27TempF = 74

const day28TempC = 17

const day29TempF = 76

const day30TempC = 29



//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)



function celciusConversion(tempinFahrenheit) {
    return ((tempinFahrenheit - 32) * 5/9)
}

function fahrenheitConversion(tempinCelsius) {
    return ((tempinCelsius * 9/5) + 32)
}


//! Start the calculation of the total temperatures


let tot_temperature_in_fahrenheit = (day1TempF + fahrenheitConversion(day2TempC) + day3TempF+ fahrenheitConversion(day4TempC) + day5TempF+ fahrenheitConversion(day6TempC) + day7TempF+ fahrenheitConversion(day8TempC) + day9TempF+ fahrenheitConversion(day10TempC) + day11TempF+ fahrenheitConversion(day12TempC) + day13TempF+ fahrenheitConversion(day14TempC) + day15TempF+ fahrenheitConversion(day16TempC) + day17TempF+ fahrenheitConversion(day18TempC) + day19TempF+ fahrenheitConversion(day20TempC) + day21TempF+ fahrenheitConversion(day22TempC) + day23TempF+ fahrenheitConversion(day24TempC) + day25TempF+ fahrenheitConversion(day26TempC) + day27TempF+ fahrenheitConversion(day28TempC) + day29TempF + fahrenheitConversion(day30TempC))
let tot_temperature_in_celsius = (celciusConversion(day1TempF) + day2TempC + celciusConversion(day3TempF) + day4TempC +celciusConversion(day5TempF) + day6TempC + celciusConversion(day7TempF) + day8TempC +celciusConversion(day9TempF) + day10TempC + celciusConversion(day11TempF) + day12TempC + celciusConversion(day13TempF) + day14TempC + celciusConversion(day15TempF) + day16TempC + celciusConversion(day17TempF) + day18TempC + celciusConversion(day19TempF) + day20TempC + celciusConversion(day21TempF) + day22TempC + celciusConversion(day23TempF) + day24TempC + celciusConversion(day25TempF) + day26TempC + celciusConversion(day27TempF) + day28TempC + celciusConversion(day29TempF) + day30TempC)

//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

tot_temperature_in_fahrenheit;
tot_temperature_in_celsius;

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30

let avg_temperature_in_celsius = tot_temperature_in_celsius / 30

//! Console.log the results for your own inspection if you'd like

//console.log( avg_temperature_in_fahrenheit );
//console.log( avg_temperature_in_celsius );

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
     tot_temperature_in_fahrenheit,
     tot_temperature_in_celsius,
     avg_temperature_in_fahrenheit,
     avg_temperature_in_celsius
};

