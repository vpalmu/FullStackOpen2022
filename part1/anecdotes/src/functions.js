
function getRandomIndex(nbrOfElements) {
    return Math.floor(Math.random() * nbrOfElements);
}

function getBiggestVoteQty(...votes) {
    return Math.max(...votes)
}

function getIndexOfMatchingAnecdote(nbrOfVotes, anecdoteVotes ) {
    return Array.from(anecdoteVotes)
                .findIndex(element => element === nbrOfVotes)
}

function addVote(index, votes) {
    // create a copy of points and add vote to it 
    const pointsWithVote = Array.from(votes)
    pointsWithVote[index]+= 1
    console.log('pointsWithVote: ', pointsWithVote)
    
    return pointsWithVote
}

export { getRandomIndex, getBiggestVoteQty, getIndexOfMatchingAnecdote, addVote }