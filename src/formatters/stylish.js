import _ from 'lodash';

const stringify = (iter, value, depth, repeat) => {
  if (_.isObject(value)) {
    if (!Array.isArray(value)) {
      const entries = Object.entries(value);
      const result = entries.map((a) => ({ name: a[0], status: 'unchanged', value: a[0] }));
      return ` {${iter(result, depth + 1)}\n${repeat}  }`;
    }
    return ` {${iter(value, depth + 1)}\n${repeat}  }`
  }
}