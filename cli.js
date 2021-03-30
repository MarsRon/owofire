#!/usr/bin/env node

const owofire = require("./index");
const [ node, file, ...args ] = process.argv;
console.log(owofire(args.join(" ")));