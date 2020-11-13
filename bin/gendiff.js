#!/usr/bin/env node

import program from 'commander';

program
.option('-h, --help', 'output usage information')
.parse(process.argv);

console.log(program);