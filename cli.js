#!/usr/bin/env node

const owofire = require("./index");
const args = process.argv.slice(2);
console.log(owofire(args.join(" ")));