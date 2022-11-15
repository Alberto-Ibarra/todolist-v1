const express = require("express");
const bodyParser = require("body-parser");
//below is created module with node
// const getDate = require("./date");
//exported from app.js
const date = require(__dirname + "/date.js");



const app = express();
app.use(bodyParser.urlencoded({extended: true}));
//below used to use CSS must create a public folder and put css, js whatever needs to go in there
app.use(express.static("public"));
app.set('view engine', 'ejs');


let items = [];
let workItems = [];

//get
app.get("/", (req, res) => {
//export from date.js is used here.
let day = date.getDate();

    res.render("list", {listTitle: day, newListItems: items});
});

//post
app.post("/", (req, res) => {
    console.log(req.body);
    let item = req.body.newItem;
    if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work")
    }else{
        items.push(item)
        res.redirect("/");
    }
})

app.get("/work", (req,res) => {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
})

app.get("/about", (req,res)=>{
    res.render("about")
})


app.listen(3000, () => {
    console.log("server started on port 3000");
});

