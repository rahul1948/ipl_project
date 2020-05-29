const csv1 = require("csvtojson");
const fs = require("fs")
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matches_won = require("./ipl/matches_won.js")
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main(){
    csv1()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result=matchesPlayedPerYear(matches);
      let result1=matches_won(matches)
      saveData(result,result1);
    });
    
    
}

function saveData(result,result1) {
    const jsonData = {
      matchesPlayedPerYear: result,
      matches_won:result1

    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }

main();