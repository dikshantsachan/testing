const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(express.static("static"));

app.use(bodyparser.urlencoded({extended: false}))

app.set("view engine", "ejs");

app.get("/", function(req, res, next)
{
  res.send("Hi! This is my first node server");
});

app.get("/first", function(req, res, next)
{
  if(req.query.greeting == '1')
    res.send("Hi! This is second router.");
  else
    res.send("Bye, from the second router");
  res.send("Hi! This is my first node server1");
});

app.get("/second", function(req, res, next)
{
  res.send("Hi! This is my first node server2");
});

app.post("/query", function(req, res, next)
{
  //res.send(MATH.random() + " " + JSON.stringigy(req.body));
  if(!req.body.username)
  {
    res.send("Username field is empty");
  }
  else if(!req.body.Password)
  {
    res.send("Password field is empty");
  }
  else
  {
    res.send("Your username is "+req.body.username+" and password is "+req.body.Password);
  }
});

app.get("/random", function(req, res, next)
{
  res.send(" " + Math.floor(Math.random()*100000));
});

app.get("/third", function(req, res, next)
{
  if(req.query.q == 'node')
  {
    res.render("test1",
    {
      title:"Node JS",
      topic:"Node EJS Template Engine",
      status:1,
      fruits:["apple", "banana", "orange"],
      error: {code: 0, msg: "no error"}
    });
  }
  else if(req.query.q == 'python')
  {
    res.render("test1",
    {
      title:"Python",
      topic:"Introduction to Python",
      status:0,
      fruits:["coconut", "peach", "watermelon", "Grapes"],
      error: {code: 1, msg: "not started"}
    });
  }
  else
  {
    res.render("test1",
    {
      title:"No Title",
      topic:"No Topic",
      status:2,
      fruits:[],
      error: {code: 2, msg: "topic not found"}
    });
  }
});

app.listen(3004);
