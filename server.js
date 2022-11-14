#!/usr/bin/env node

import {roll} from './lib/roll.js';
import express from 'express';
import minimist from 'minimist';
const args = minimist(process.argv.slice(2));
const app = express();

const port = args.port || 5000;

app.use(express.urlencoded({ extended: true }));

//3
app.get("/app", (req,res) => {
    res.status(200).send("200 OK");
})
//4
app.get("/app/roll", (req,res) => {
    res.status(200).json(roll(6,2,1));
})
//5
app.post("/app/roll", (req, res) => {
    const sides = parseInt(req.body.sides);
    const dice = parseInt(req.body.dice);
    const rolls = parseInt(req.body.rolls);
    res.status(200).json(roll(sides,dice,rolls));
  })
//6
app.get('/app/roll/:sides', (req, res) => {
    const sides =  parseInt(req.params.sides);
    res.send((roll(sides, 2,1)));
  })
//7
app.get('/app/roll/:sides/:dice', (req, res) => {
    const sides =  parseInt(req.params.sides);
    const dice =  parseInt(req.params.dice);
    res.status(200).json((roll(sides, dice,1)));
  })
//8
app.get('/app/roll/:sides/:dice/:rolls', (req, res) => {
    const sides =  parseInt(req.params.sides);
    const dice =  parseInt(req.params.dice);
    const rolls =  parseInt(req.params.rolls);
    res.status(200).json((roll(sides, dice,rolls)));
  })
//2
app.get("*", (req,res) => {
    res.status(404).send("404 NOT FOUND");
})

app.listen(port)