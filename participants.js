/**
 * Find all participants in the data
 * @param {Object} matches - Data of matches
 * @returns An array of participants
 */
const participants = function(matches){
    const uniquePerson = new Set();
    // Iterate through each match 
    matches.forEach(match => {
        // Add each player into the set
        uniquePerson.add(match.winner);
        uniquePerson.add(match.loser);
    });
    // Convert set into an array and return array
    const uniquePersonArray = Array.from(uniquePerson);
    return uniquePersonArray;
};

module.exports = participants;