import _ from 'lodash';
import { getPath, getData } from './src/parseJson.js';

const getDifferent = (obj1, obj2) => {
  const dataObj1 = JSON.stringify(obj1).split(' ');
  const dataObj2 = JSON.stringify(obj2).split(' ');
  const str = _.union([...dataObj1, ...dataObj2].flat());
  const strClone = _.cloneDeep(str).sort();
  return strClone.join(' ');
};

const genDiff = (filepath1, filepath2) => {
  const dataFile1 = getData(getPath(filepath1));
  const dataFile2 = getData(getPath(filepath2));
  return getDifferent(dataFile1, dataFile2);
};

export default genDiff;