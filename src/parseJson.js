import fs from 'node:fs';
import path from 'node:path';
import _ from 'lodash';

//const filepath1 = path.resolve('__fixtures__/file1.json');
//const obj1 = JSON.parse(fs.readFileSync(filepath1));
//const filepath2 = path.resolve('__fixtures__/file2.json');
//const obj2 = JSON.parse(fs.readFileSync(filepath2));

const json1 = '{"result":true, "count":42}';
const obj1 = JSON.parse(json1);
const json2 = '{"result":false, "count":46}';
const obj2 = JSON.parse(json2)
  
const genDiffObj = (obj1, obj2) => {
  const dataObj1 = Object.entries(obj1);
  const dataObj2 = Object.entries(obj2);
  const str = _.union([...dataObj1, ...dataObj2].flat());
  const cloneObj = _.cloneDeep(str);
  const result = cloneObj.sort((a, b) => {
    return a - b;
  });
  return result.join(' ');
};
  
console.log(genDiffObj(obj1, obj2));


