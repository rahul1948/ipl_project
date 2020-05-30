let obj = require("./eco.json")
var express = require("express")
var app = express();
var path = require("path")
var cors = require('cors');
app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());
//serve static files
app.use("/",express.static(path.join(__dirname,'public')))
      
// receives request and as a response gives the calculated data
app.get('/economy',function(req, res, next) {
                let year = req.query.year
                let year1=year+""
                console.log(year)
                let result=obj[year1]
                console.log(result)
                res.send(result)
   
    }) 
  


    app.listen(process.env.PORT || 3000, function() {
        console.log('server running on port 3000', '');
    });
