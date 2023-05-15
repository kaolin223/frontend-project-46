import { readFileSync } from 'fs';
import _ from 'lodash';

const stringify = (value, replacer = ' ', spaceCount = 1) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }
    const indentSize = depth * spaceCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.replace(indentSize - spaceCount);
    const lines = Object.entries(currentValue).map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 1)}`);
    return ['{', ...lines, `${bracketIndent}}`,].join('\n');
  };
  return iter(value, 1);
};

const gendiff = (filepath1, filepath2) => {
  const data1 = readFileSync(filepath1, 'utf-8')
  const data2 = readFileSync(filepath2, 'utf-8')
  const dataParse1 = JSON.parse(data1);
  const dataParse2 = JSON.parse(data2);
  const keys1 = Object.keys(dataParse1);
  const keys2 = Object.keys(dataParse2);
  const keys = _.union(keys1, keys2);
  const sortKeys = _.sortBy(keys)
  const result = {};
  for (const key of sortKeys) {
    if (!Object.hasOwn(dataParse1, key)) {
      result[`+ ${key}`] = dataParse2[key];
    } else if (!Object.hasOwn(dataParse2, key)) {
      result[`- ${key}`] = dataParse1[key];
    } else if (dataParse1[key] !== dataParse2[key]) {
      result[`- ${key}`] = dataParse1[key];
      result[`+ ${key}`] = dataParse2[key];
    } else {
      result[`  ${key}`] = dataParse1[key];
    }
  }
return stringify(result)
};

export default gendiff;
