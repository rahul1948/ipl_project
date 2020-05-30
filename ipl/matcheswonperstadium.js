function WinningteamperVenue(matches){
    const result={};
    for(let match of matches){
    let venue=match.venue;
    result[venue]={};
    for(let match of matches){
    let winner =match.winner;
        if(Object.values(match).includes(venue)){ 
    if(result[venue][winner]){
        result[venue][winner]+=1;
    }
    else{
    result[venue][winner]=1;
    }
        }
    }

}
    return result;
}

module.exports =WinningteamperVenue;