const csv1 = require("csvtojson");
const fs = require("fs")
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH="./csv_data/deliveries.csv"
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matches_won = require("./ipl/matches_won.js")
const extraruns =require("./ipl/extra")
const economical_bowler = require("./ipl/economy")
const WinningteamperVenue = require("./ipl/matcheswonperstadium")
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

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
      saveData(result,result1,result2,result3,result4);
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

main();