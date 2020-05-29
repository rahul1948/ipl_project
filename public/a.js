function fetchAndVisualizeData() {
    fetch("./data.json")
      .then(r=>r.json())
      .catch(e=>{
          console.log('error')
      })
      .then(visualizeData)
      
  }
  
  fetchAndVisualizeData();



  function visualizeData(data) {
    visualizeproblems(data.matchesPlayedPerYear,data.matches_won,data.extra_runs,data.economical_bowler);
    return;
  }
  
  function visualizeproblems(matchesPlayedPerYear,matches_won,extra_runs,result) {
    const seriesData = [];
    for (let year in matchesPlayedPerYear) {
      seriesData.push([year, matchesPlayedPerYear[year]]);
    }
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column"
      },
      title: {
        text: "matches Played Per Year"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "matches"
        }
      },
      series: [
        {
          name: "Years",
          data: seriesData
        }
      ]
    })
    var data=[],data1=[],data2=[];data3=[],data4=[],data5=[],
    data7=[],data8=[],data9=[],data10=[],data11=[],data12=[],data13=[],data6=[];
    
    for(let ob in matches_won){
      console.log(ob)
            if(Object.keys(matches_won[ob]).includes("Deccan Chargers")){
              let a=(matches_won[ob]["Deccan Chargers"])
              data.push(a)
            }else{data.push(0)}
            if(Object.keys(matches_won[ob]).includes("Kolkata Knight Riders")){
                let a=(matches_won[ob]["Kolkata Knight Riders"])
                data1.push(a)
              }else{data1.push(0)}
              if(Object.keys(matches_won[ob]).includes("Chennai Super Kings")){
                let a=(matches_won[ob]["Chennai Super Kings"])
                data2.push(a)
              }else{data2.push(0)}
              if(Object.keys(matches_won[ob]).includes("Rajasthan Royals")){
                let a=(matches_won[ob]["Rajasthan Royals"])
                data3.push(a)
              }else{data3.push(0)}
              if(Object.keys(matches_won[ob]).includes("Kings XI Punjab")){
                let a=(matches_won[ob]["Kings XI Punjab"])
                data4.push(a)
              }else{data4.push(0)}
              if(Object.keys(matches_won[ob]).includes("Royal Challengers Bangalore")){
                let a=(matches_won[ob]["Royal Challengers Bangalore"])
                data5.push(a)
              }else{data5.push(0)}
              if(Object.keys(matches_won[ob]).includes("Mumbai Indians")){
                let a=(matches_won[ob]["Mumbai Indians"])
                data6.push(a)
              }else{data6.push(0)}
              if(Object.keys(matches_won[ob]).includes("Pune Warriors")){
                let a=(matches_won[ob]["Pune Warriors"])
                data7.push(a)
              }else{data7.push(0)}
              if(Object.keys(matches_won[ob]).includes("Delhi Capitals")||Object.keys(matches_won[ob]).includes("Delhi Daredevils")){
                let a=(matches_won[ob]["Delhi Capitals"])||(matches_won[ob]["Delhi Daredevils"])
                data8.push(a)
              }else{data8.push(0)}
              if(Object.keys(matches_won[ob]).includes("Gujarat Lions")){
                let a=(matches_won[ob]["Gujarat Lions"])
                data9.push(a)
              }else{data9.push(0)}
              if(Object.keys(matches_won[ob]).includes("Rising Pune Supergiants")){
                let a=(matches_won[ob]["Rising Pune Supergiants"])
                data10.push(a)
              }else{data10.push(0)}
              if(Object.keys(matches_won[ob]).includes("Sunrisers Hyderabad")){
                let a=(matches_won[ob]["Sunrisers Hyderabad"])
                data11.push(a)
              }else{data11.push(0)}
              if(Object.keys(matches_won[ob]).includes("noresult")){
                let a=(matches_won[ob]["noresult"])
                data12.push(a)
              }else{data12.push(0)}
              if(Object.keys(matches_won[ob]).includes("Kochi Tuskers Kerala")){
                let a=(matches_won[ob]["Kochi Tuskers Kerala"])
                data13.push(a)
              }else{data13.push(0)}
    }
    Highcharts.chart("matches_won" ,{
      chart: {
          type: 'column'
      },
      title: {
          text: 'IPL'
      },
      subtitle: {
          text: 'Source: IPL.com'
      },
      xAxis: {
          categories: ['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018',2019
                          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Matcheswon'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [{
          name: 'Deccan Chargers',
          data: data
  
      },
          {
          name: 'Kolkata Knight Rider',
          data: data1
  
      }, {
          name: 'Chennai Super Kings',
          data: data2
  
      }, {
          name: 'Kings XI Punjab',
          data: data4
  
      }, {
          name: 'Delhi Capitals',
          data: data8
  
      },
      {
          name: 'Royal Challagers Banglore',
          data: data5
  
      },
      {
          name: 'Rajasthan Royals',
          data: data3
  
      },
      {
          name: 'Mumbai Indians',
          data: data6
  
      },
      {
          name: 'Sunrisers Hyedrabad',
          data: data11
  
      },
      {
          name: 'Gujrat Lions',
          data: data9
  
      },
      {
          name: 'Rising Pune Supergiant',
          data: data10
  
      },
      {
          name: 'noresults',
          data: data12
  
      },
      {
          name: 'Kochi Tuuskera Kerala',
          data: data13
  
      },
      {
          name: 'Pune Warriors',
          data: data7
  
      }

  ]
  });
  const seriesdata1=[];
  for(let nam in extra_runs ){
      seriesdata1.push([nam, extra_runs[nam]])
  }
Highcharts.chart("extra_runs", {
chart: {
  type: 'column'
},
title: {
  text: 'IPL 2016'
},
subtitle: {
  text: 'Source:IPL.com'
},
xAxis: {
  type: 'category',
  labels: {
      rotation: -45,
      style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
      }
  }
},
yAxis: {
  min: 0,
  title: {
      text: 'extra_runs'
  }
},
legend: {
  enabled: false
},
tooltip: {
  pointFormat: '<b>{point.y:.1f}</b>'
},
series: [
  {
      name:"names",
      data:seriesdata1
  }

]
})
const seriesdata =[];
for(let i=0;i<result.length;i++){
    var name =result[i].bowler
    var a =result[i].economy
    var c=a.toFixed(2)
    var b=parseFloat(c)
  seriesdata.push([name,b])
}
Highcharts.chart("economical_bowler", {
chart: {
type: 'column'
},
title: {
text: 'IPL 2015'
},
subtitle: {
text: 'Source: <a href="https://www.iplt20.com/">IPL.com</a>'
},
xAxis: {
type: 'category',
labels: {
    rotation: -45,
    style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
    }
}
},
yAxis: {
min: 0,
title: {
    text: 'top ten economical bowler'
}
},
legend: {
enabled: false
},
tooltip: {
pointFormat: 'economy: <b>{point.y:.2f}</b>'
},
series: [{
name: 'names',
data: seriesdata

}]
})
}
  