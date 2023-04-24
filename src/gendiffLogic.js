#!/usr/bin/env node

import _ from 'lodash';

const genDiff = (data1, data2) => {
  const key1 = Object.keys(data1);
  const key2 = Object.keys(data2);
  const keys = _.union(key1, key2);
  const map = keys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (Object.hasOwn(data2, key)) {
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

export default genDiff;
