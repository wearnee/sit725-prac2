const express = require('express')
const app = express()

//app.use(express.static(_dirname + '/index'))

 app.get('/', function(req,res){
     res.send("hello world")
 })

app.get('/index', function(req,res){
    console.log('test page has been hit')
    res.send('test page')
    
})
// takes two number and adds them together and return value
let addition = function(num1, num2){
    result = num1 + num2;
    return result
}
// basic calculator through '/adder' 
app.get('/adder',function(req,res){
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = addition(num1,num2);
    res.send('The sum is: ' + sum);
})
//
app.get('/sentiment', function(req, res){
    let text = req.query.text;
    let analysis = sentimentAnalysis(text);
    res.send(analysis)
    console.log(analysis);
    console.json(analysis);
})


// retrieving data that is stored in a JS object

app.get('/bank', function(req, res){
    let accounts = [
        {id:1, name: 'alex', deposit:5},
        {id:2, name: 'beth', deposit:5},
        {id:3, name: 'abdul', deposit:15},
        
    ]
    
    console.log(accounts)
    res.send(accounts)
    

})
app.listen(5000) 