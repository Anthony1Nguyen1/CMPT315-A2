/**
 * Search for index numbers of NaN values in an array
 * @param {Array} arrayNaN - Array with NaN values or none
 * @returns An array of index value that are NaN
 */
const findNaNIndex = function(arrayNaN){
    const arrayIndex = new Array();
    var indexNum = 0;
    // Iterate through each value of array
    arrayNaN.forEach(value => {
        // Check if value is NaN, if so push index number, and increment counter
        if (isNaN(value)){
            arrayIndex.push(indexNum);
            indexNum+=1;
        }
        else{
            indexNum+=1;
        }
    });

    return arrayIndex;
};

module.exports = findNaNIndex;