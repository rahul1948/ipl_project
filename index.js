const csv1 = require("csvtojson");
const fs = require("fs")
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH="./csv_data/deliveries.csv"
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matches_won = require("./ipl/matches_won.js")
const extraruns =require("./ipl/extra")
const economical_bowler = require("./ipl/economy")
const WinningteamperVenue = require("./ipl/matcheswonperstadium")
const economies = require("./exp/economies")
const economies1=require("./exp/economies1")
const economies2=require("./exp/economies2")
const economies3=require("./exp/economies3")
const economies4=require("./exp/economies4")
const economies5=require("./exp/economies5")
const economies6=require("./exp/economies6")
const economies7=require("./exp/economies7")
const economies8=require("./exp/economies8")
const economies9=require("./exp/economies9")
const economies10=require("./exp/economies10")
const economies11=require("./exp/economies11")
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH1 = "./eco.json";

function main(){
    csv1()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv1()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(delivery=>{
      let result=matchesPlayedPerYear(matches);
      let result1=matches_won(matches)
      let result2 = extraruns(matches,delivery)
      let result3 = economical_bowler(matches,delivery)
      let result4 = WinningteamperVenue(matches)
      let r= economies(matches,delivery)
      let r1= economies1(matches,delivery)
      let r2= economies2(matches,delivery)
      let r3= economies3(matches,delivery)
      let r4= economies4(matches,delivery)
      let r5= economies5(matches,delivery)
      let r6= economies6(matches,delivery)
      let r7= economies7(matches,delivery)
      let r8= economies8(matches,delivery)
      let r9= economies9(matches,delivery)
      let r10= economies10(matches,delivery)
      let r11=economies11(matches,delivery)
      saveData(result,result1,result2,result3,result4);
      saveEconomy(r,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11);
       } )
    });
    
    
}

function saveData(result,result1,result2,result3,result4) {
    const jsonData = {
      matchesPlayedPerYear: result,
      matches_won:result1,
      extra_runs:result2,
      economical_bowler:result3,
      winningteam_pervenue:result4

    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }
  function saveEconomy(re,re1,re2,re3,re4,re5,re6,re7,re8,re9,re10,re11) {
    const jsonData = {
      2008:re,
      2009:re1,
      2010:re2,
      2011:re3,
      2012:re4,
      2013:re5,
      2014:re6,
      2015:re7,
      2016:re8,
      2017:re9,
      2018:re10,
      2019:re11
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH1, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }

main();