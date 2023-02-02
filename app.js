const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
//ejs
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

let newItems=[]

app.get('/',(req,res)=>{
    let options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
    let today = new Date();
    let day = today.toLocaleDateString("en-US",options);
    // res.send(day);
    res.render("list",{kindOfDay:day, newListItems:newItems});
})

app.post('/',(req,res)=>{
    let newItem = req.body.newItem;
    newItems.push(newItem);
    // res.send(newItem);
    res.redirect('/');
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on port http://localhost:3000");

})