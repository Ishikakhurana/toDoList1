const { urlencoded } = require('express');
const express=require('express');

const app=express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
var items=[];

var workItems=[];

app.get("/",function(req,res){
 var today=new Date();
var options={
    weekday:"long",
    day:"numeric",
    month:"long"
};
var day=today.toLocaleDateString("en-US",options);

res.render("list",{day:day,newItems:items});

});

app.get("/about",function(req,res){
    res.render("about");
})

app.get("/work",function(req,res){
res.render("list",{day:"Work List",newItems:workItems})
});


app.post("/",function(req,res){
    let item=req.body.newItem;
    if(req.body.list==="Work List"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }

});


app.listen(3000,function(){

});