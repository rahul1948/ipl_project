function economies9(match,delivery){
    let result ={};
    let real={};
    for(let i=0;i<match.length;i++){
        if(match[i].season==="2017"){
            var a = match[i].id
        for(let j=0;j<delivery.length;j++){
                if(delivery[j].match_id==a){
                     let bow=delivery[j].bowler
                    if(result.hasOwnProperty(bow)){
                        let p=delivery[j].total_runs
                        let q=parseInt(p)
                        result[bow]+=(q+1);
                        if(delivery[j].bye_runs!='0'){
                            let aw =parseInt(delivery[j].bye_runs)
                            result[bow]=result[bow]-aw
                        }
                        if(delivery[j].legbye_runs!='0'){
                            let aws =parseInt(delivery[j].legbye_runs)
                            result[bow]=result[bow]-aws
                        }
            if(delivery[j].wide_runs=='1'||delivery[j].noball_runs=='1')
            {
                 result[bow]-=1;
            }
                        real[bow]+=q
        }
        else{
                        let p=delivery[j].total_runs
                        let q=parseInt(p)
                        result[bow]=q+1;
                        if(delivery[j].bye_runs!='0'){
                            let aw =parseInt(delivery[j].bye_runs)
                            result[bow]=result[bow]-aw
                        }
                        if(delivery[j].legbye_runs!='0'){
                            let aws =parseInt(delivery[j].legbye_runs)
                            result[bow]=result[bow]-aws
                        }
            if(delivery[j].wide_runs=='1'||delivery[j].noball_runs=='1')
            {
                result[bow]-=1;
            }
                        real[bow]=q;
                    }
                }
            }
        }
    }
    let arr=[];
    let ar=[];
    let l=Object.values(result);
    let k=Object.values(real);
    let g=Object.keys(result);
    let final_result;
    for(let i=0;i<l.length;i++){
      let o =l[i]-k[i]
      if(o%6==0){
          let u=o/6;
          final_result=k[i]/u
          ar.push(final_result)
          arr.push([final_result,g[i]])
      }else{ let r=o%6
            o=o-r;
          let s=o/6
            let t=r/6;
            let w=t+s;
            final_result=k[i]/w
            ar.push(final_result)
      arr.push([final_result,g[i]])
            }
        }
        let resultingarray=[];
        let aray =[];
        let newar=ar.sort((a,b)=>a-b);
        for(let i=0;i<newar.length;i++){
            for(let j=0;j<arr.length;j++){
                if(arr[j][0]==newar[i]){
                    if(!aray.includes(arr[j][1])){
                        aray.push(arr[j][1])
                        resultingarray.push({bowler:arr[j][1],
                        economy:arr[j][0]})
                    }
                    break;
                }
            }
            if(resultingarray.length==10){
                break;
            }
        }
        return resultingarray
    }
    
    module.exports=economies9;