import path from 'node:path';
import * as fs from 'node:fs';
import buildDiffTree from './gendiffLogic.js';
import { readFileSync } from "fs";

const parser = (filepath1, filepath2) => {
    const file1 = readFileSync(filepath1, "utf-8");
    const file2 = readFileSync(filepath2, "utf-8");
    const parseFile1 = JSON.parse(file1);
    const parseFile2 = JSON.parse(file2);
    return (parseFile1,parseFile2)
    }
console.log(parser());