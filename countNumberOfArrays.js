/**
 * Count number of arrays in an array
 * @param {Array} arrayVal - Array of values
 * @returns The number of arrays in array
 */
const countNumberOfArrays = function(arrayVal){
    let counter = 0;
    // Iterate through array
    arrayVal.forEach(value => {
        // Check if value is an array and increase counter
        if (Array.isArray(value)){
            counter+=1;
        }
    });

    return counter;
};

module.exports = countNumberOfArrays;