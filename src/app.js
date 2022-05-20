//requiring express module
const express=require('express');
const path=require('path');
const hbs=require('hbs');
const { partials } = require('handlebars');
const app=express();
//for hosting purpose
const port=process.env.PORT ||8000

//public static path(so that we can access files of public folder)
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")
//requiring hbs
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));





//routing
app.get("/",(req,res)=>
{
    res.render('index')
})

app.get("/weather",(req,res)=>
{
    res.render('weather')
})

//if requeat doesn't matches any of the above choices
app.get("*",(req,res)=>
{
    res.render('404error')
})

app.listen(port,()=>{
    console.log("listening to the server");
})