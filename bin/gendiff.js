#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../index.js'
import { getPath, getData } from '../src/parseJson.js';

const program = new Command();

program
  .name("gendiff")
  .argument('<filepath1>', 'path to file')
  .argument('<filepath2>', 'path to file')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V --version', 'output the version number')
  .option('-f --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)))

  program.help();
  genDiff();