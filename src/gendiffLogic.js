#!/usr/bin/env node
import { readFileSync } from 'fs';
import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));
  const sortedKeys = _.sortBy(keys);
  const map = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { key, type: 'deleted', value: data1[key] };
    }
    if (data1[key] !== data2[key]) {
      return {
        key, type: 'changed', value1: data1[key], value2: data2[key],
      };
    }
    return { key, type: 'unchanged', value: data2[key] };
  });
  return map;
};

export default (filepath1, filepath2) => {
  const file1 = readFileSync(filepath1, 'utf-8');
  const file2 = readFileSync(filepath2, 'utf-8');
  const parseFile1 = JSON.parse(file1);
  const parseFile2 = JSON.parse(file2);
  console.log(genDiff(parseFile1, parseFile2));
};
