/**
 * Check if array is a factor chain
 * @param {Array} arrayNum - Array of numbers
 * @returns True or False if all values are factors of the next number
 */
const isArrayFactorChain = function(arrayNum){
    let length = arrayNum.length;
    // Iterate through each index
    for (let i = 0; i <= length-2; i++){
        // Check if the modulo is 0 to check for factor, return false if not
        if (arrayNum[i+1] % arrayNum[i] != '0'){
            return false;
        }
    };
    return true;
};

module.exports = isArrayFactorChain;