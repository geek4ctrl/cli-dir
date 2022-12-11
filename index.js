#!/usr/bin/env node
const { spawn } = require('child_process');

const lsCommand = spawn('ls');

lsCommand.stdout.on('data', (data) => {
    console.log(`DATA FROM CHILD PROCESS: \n ${data}`)
});