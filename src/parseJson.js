import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const getData = (str) => {
  let data = {};
  if (str.startsWith('/')){
    data = path.resolve(str);
  } else {
    const directoryName = process.cwd(str);
    data = path.resolve(directoryName, str);
  }
  return JSON.parse(fs.readFileSync(data));
}

export { getData };