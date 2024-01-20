/**
 * Find winners and the person they beat
 * @param {Object} matches - Data of matches
 * @returns Object of winners and who they beat
 */
const winnersObject = function(matches){
    const results = {};

    // Iterate through each match
    matches.forEach(match => {
      const {winner,loser} = match;
      // If the winner is not in the results, start empty set
      if (!results[winner]) {
        results[winner] = new Set();
      }
      // Add the loser to the set of opponents the winner has beaten
      results[winner].add(loser);
      // If loser not in results, create array for set
      if (!results[loser]) {
        results[loser] = new Set();
      }
    });
    
    // Iterate through each match
    matches.forEach(match => {
      const {winner,loser} = match;
      // Convert sets into arrays for unique players
      results[winner] = Array.from(results[winner]);
      results[loser] = Array.from(results[loser]);
    });

    return results;
};

module.exports = winnersObject;