const biggestLoser = function(matches){
    const loserPoints = {};
    
    // For each match calculate the points for each player and set initial point to 0
    matches.forEach(match => {
        loserPoints[match.loser] = (loserPoints[match.loser] || 0) + match.loser_points;
        loserPoints[match.winner] = (loserPoints[match.winner] || 0) - match.loser_points;
    });

    let loser = null;
    let biggestLoserPoints = 0;

    // For each player find the player with the highest amount of points
    for (const player in loserPoints){
        // If player has more points the current biggest loser then switch
        if (loserPoints[player] > biggestLoserPoints) {
            loser = player;
            biggestLoserPoints = loserPoints[player];
        }
    }

    return loser;
};

module.exports = biggestLoser;