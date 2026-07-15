// const express = require('express')


import express from 'express'

const app = express();

// User "/" URL par GET request bhejta hai
//         ↓
// Express request receive karta hai
//         ↓
// Ye function chalata hai
//         ↓
// "server is ready" response bhej deta hai

app.get('/',(req,res)=>{
    res.send("server is ready")
});

 
app.get('/api/jokes',(req,res)=>{
        const jokes = [
    {
        id: 1,
        title: "Programmer Joke",
        joke: "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
        id: 2,
        title: "JavaScript Joke",
        joke: "Why did the JavaScript developer go broke? Because he used up all his cache!"
    },
    {
        id: 3,
        title: "Computer Joke",
        joke: "Why was the computer cold? Because it left its Windows open!"
    },
    {
        id: 4,
        title: "Developer Joke",
        joke: "There are only 10 types of people: those who understand binary and those who don't."
    },
    {
        id: 5,
        title: "Debugging Joke",
        joke: "Debugging is like being a detective in a crime movie where you are also the murderer."
    }
    ]
 res.send(jokes);

    // res.send("jokes page")
})


const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`)
});