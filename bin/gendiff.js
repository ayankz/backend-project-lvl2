#!/usr/bin/env node
import program from 'commander';
import compare from '../src/compare.js';
program.version('1.0.0');

program
.description('Compares two configuration files and shows a difference.')
.option('-f, --format [type]', 'output format')
.arguments('<filepath1> <filepath2>')
.action((filepath1, filepath2) => {
  compare(filepath1, filepath2);
});

program.parse(process.argv);