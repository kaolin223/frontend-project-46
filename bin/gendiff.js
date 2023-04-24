#!/usr/bin/env node

import { Command } from 'commander';
import diff from '../src/gendiffLogic.js';

const program = new Command();

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    console.log(diff(filepath1, filepath2));
  });

program.parse(process.argv);
