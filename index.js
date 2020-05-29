const csv1 = require("csvtojson");
const fs = require("fs")
const MATCHES_FILE_PATH = "./csv_data/matches.csv";

const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main(){
    csv1()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result=matchesPlayedPerYear(matches);
      saveMatchesPlayedPerYear(result);
    });
    
    
}

function saveMatchesPlayedPerYear(result) {
    const jsonData = {
      matchesPlayedPerYear: result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }

main();