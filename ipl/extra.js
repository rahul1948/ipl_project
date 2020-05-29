function extraruns(matches,deliveries){
    let result ={};
    for(let i=0;i<matches.length;i++){
    if(matches[i].season=='2016')
    {
        var b = matches[i].id;
    for(let j=0;j<deliveries.length;j++){
        if(deliveries[j].match_id==b){
            let name=deliveries[j].bowling_team;
            if(result.hasOwnProperty(name)){
                let p=deliveries[j].extra_runs;
                let q=parseInt(p);
                result[name]+=q;
            }
            else{
                let m=deliveries[j].extra_runs;
                let n=parseInt(m)
                result[name]=n;
            }
        }
    }
}
}
    return result;
}
module.exports=extraruns;