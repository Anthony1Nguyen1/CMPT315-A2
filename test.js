/**
 * Test.js used to test all functions
 */

const biggestLoser = require("./biggestLoser");
const countNumberOfArrays = require("./countNumberOfArrays");
const findNaNIndex = require("./findNaNIndex");
const isArrayFactorChain = require("./isArrayFactorChain");
const participants = require("./participants");
const winnersObject = require("./winnersObject");

console.log('Testing All Array Functions\n');
console.log('Testing findNaNIndex() with array [2,NaN,8,16,32] expected outcome [1]');
console.log(findNaNIndex([2,NaN,8,16,32]));

console.log('Testing findNaNIndex() with array [2, 4, NaN, 16, 32, NaN] expected outcome [2,5]');
console.log(findNaNIndex([2, 4, NaN, 16, 32, NaN]));

console.log('Testing findNaNIndex() with array [2, 4, 16, 32] expected outcome []');
console.log(findNaNIndex([2, 4, 16, 32]));

console.log('\nTesting isArrayFactorChain() with array [2, 4, 8, 16, 32] expected outcome true');
console.log(isArrayFactorChain([2, 4, 8, 16, 32]));

console.log('Testing isArrayFactorChain() with array [2, 4, 8, 16, 32, 68] expected outcome false');
console.log(isArrayFactorChain([2, 4, 8, 16, 32, 68]));

console.log('\nTesting countNumberOfArrays() with array [2,8,[6],3,3,5,3,4,[5,4]] expected outcome 2');
console.log(countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]]));

console.log('Testing countNumberOfArrays() with array [2,8,[6,3,3],[4],5,[3,4,[5,4]]] expected outcome 3');
console.log(countNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]]));

console.log('\nTesting All Object Functions\n');

const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]

console.log('Matches', matches);

console.log('\nTesting participants() with matches expected outcome [Alice, Bob, Carol, Dean, Elise]');
console.log(participants(matches));

console.log('\nTesting winnersObject() with matches expected outcome \n{\nAlice:[Bob,Carol],\nBob:[],\nCarol:[Dean],\nDean:[Elise],\nElise:[Bob,Carol]\n}\n');
console.log(winnersObject(matches));

console.log('\nTesting biggestLoser() with matches expected outcome Bob');
console.log(biggestLoser(matches));