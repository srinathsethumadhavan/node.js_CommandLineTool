#!/usr/bin/env node


const fs = require("fs")
const chalk = require("chalk")
const path = require('path')

const targetDir= process.argv[2] || process.cwd()

fs.readdir(targetDir,async (err,files)=>
{
    if(err)
         console.log(err);
        
    const statPromises = files.map(filename=>{
        return lstat(path.join(targetDir,filename));
    })
    const allStats = await Promise.all(statPromises);
    for(let stat of allStats){
        const index = allStats.indexOf(stat);
        if(stat.isFile())
        console.log(chalk.bold.red(files[index]))
        else
        console.log(chalk.blue(files[index]))
    }
});


const lstat = targetPath=>{
    return new Promise((resolve,reject)=>{
        fs.lstat(targetPath,(err,stats)=>{
            if(err)
            reject(err);
            resolve(stats);
        })
    })
}