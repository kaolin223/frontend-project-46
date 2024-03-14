import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const filepath1 = path.resolve('../__fixtures__/file1.json');
const obj1 = JSON.parse(fs.readFileSync(filepath1));
console.log(obj1);
const filepath2 = path.resolve('../__fixtures__/file2.json');
const obj2 = JSON.parse(fs.readFileSync(filepath2));
console.log(obj2);

const getPath = (str) => str.startsWith('/') ? path.resolve(str) : process.cwd(str);

const getData = (obj) => JSON.parse(fs.readFileSync(obj));

const genDiffLogick = () => 123; 

export { getData, getPath };