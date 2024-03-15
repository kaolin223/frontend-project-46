import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const getPath = (str) => str.startsWith('/') ? path.resolve(str) : process.cwd(str);

const getData = (obj) => JSON.parse(fs.readFileSync(obj));


export { getData, getPath };