#!/usr/bin/env node

const { program } = require('commander');

program
    .helpOption('-h, --help', 'output usage information')
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', 'output the version number')

program.parse();
