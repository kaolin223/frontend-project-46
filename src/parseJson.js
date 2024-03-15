import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import _ from 'lodash';

const filepath1 = path.resolve('../__fixtures__/file1.json');
const obj1 = JSON.parse(fs.readFileSync(filepath1));
const filepath2 = path.resolve('../__fixtures__/file2.json');
const obj2 = JSON.parse(fs.readFileSync(filepath2));

const getPath = (str) => str.startsWith('/') ? path.resolve(str) : process.cwd(str);

const getData = (obj) => JSON.parse(fs.readFileSync(obj));

const genDiffLogick = (obj1, obj2) => {
  const union = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(union)
  const result = sortedKeys.map((key) => {
    const oldValue = obj1[key];
    const newValue = obj2[key];
    if (!_.has(obj2, key)) {
      return {
        action: 'deleted',
        key,
        oldValue 
      };
    }
    if (!_.has(obj1, key)) {
      return {
        action: 'added',
        key,
        newValue
      };
    }
    if (oldValue !== newValue) {
      return {
        action: 'changed',
        key,
        oldValue,
        newValue
      };
    }
    return {
      action: 'unchanged',
      oldValue,
      key
    }
  });
  return result;
};

console.log(genDiffLogick(users, users1));

export { getData, getPath };