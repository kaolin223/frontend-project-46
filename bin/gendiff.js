#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../index.js';

const program = new Command();

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to file')
  .argument('<filepath2>', 'path to file')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)));
  