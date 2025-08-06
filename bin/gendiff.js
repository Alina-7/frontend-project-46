#!/usr/bin/env node
//import _ from 'lodash';
import { Command } from 'commander';
import { parsingFiles, gendiff } from './index.js';
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .option('-h, --help ', 'display help for command')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    //const [obj1, obj2] = parsingFiles(filepath1, filepath2)
    console.log(gendiff(filepath1, filepath2))
  })

program.parse();
if (program.opts().help) {
  program.help()
}

