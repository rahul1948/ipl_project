function matches_won(matches){
    const result={};
    for(let match of matches){
    let season=match.season;
    result[season]={};
    let id=match.id;
    for(let match of matches){
    let winner =match.winner;
        if(Object.values(match).includes(season)){ 
    if(result[season][winner]){
        result[season][winner]+=1;
    }
    else{
    result[season][winner]=1;
    }
        }
    }
    if(Object.keys(result[season]).includes('')){
        let a=result[season]['']
        delete result[season]['']
        let c='noresult'
        result[season][c]= a;
    }
}
    return result;
}
module.exports=matches_won;