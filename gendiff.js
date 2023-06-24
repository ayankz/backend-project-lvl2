#!/usr/bin/env node
import {program} from "commander";
import path from 'path';
import fs from 'fs';
import genDiff from './main.js'
program
    .helpOption('-h, --help', 'output usage information')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>' , 'output format')
    .option('-V, --version', 'output the version number')
    .argument('<filepath1>' )
    .argument('<filepath2>')
    .action( (filepath1, filepath2)=>{
        const data1 = fs.readFileSync(path.resolve(filepath1), 'utf-8');
        const data2 = fs.readFileSync(path.resolve(filepath2), 'utf-8');
        let result = genDiff(data1, data2);
        console.log(`{\n ${result} }`)
    })

program.parse();
