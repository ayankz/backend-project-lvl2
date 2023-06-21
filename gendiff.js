#!/usr/bin/env node

const { program } = require('commander');

program
    .helpOption('-h, --help', 'output usage information')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>' , 'output format')
    .option('-V, --version', 'output the version number')
    .argument('<filepath1>' )
    .argument('<filepath2>');

program.parse();
