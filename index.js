#!/usr/bin/env node
// const { exec } = require('child_process');

// const lsCommand = spawn('ls');

// lsCommand.stdout.on('data', (data) => {
//     console.log(`DATA FROM CHILD PROCESS: \n ${data}`)
// });

const dirName = process.argv[2];
const { exec } = require('child_process');
const { stdout, stderr } = require('process');

const cb = (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);    
}

exec(`mkdir -p ${dirName}`, cb);
