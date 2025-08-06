import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import { fileURLToPath } from 'url';

// Получаем __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const parsingFiles = (filepath1, filepath2) => {
  const absolutePath1 = path.resolve(__dirname, filepath1);
  const absolutePath2 = path.resolve(__dirname, filepath2);
  const content1 = fs.readFileSync(absolutePath1, 'utf8');
  const content2 = fs.readFileSync(absolutePath2, 'utf8');

  const obj1 = JSON.parse(content1);
  const obj2 = JSON.parse(content2);
  return [obj1, obj2]

}


export const gendiff = () => {
  const [obj1, obj2] = parsingFiles('../filepath1.json', '../filepath2.json')
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const commonKeys = _.union(keys1, keys2)
  const sortedKeys = _.sortBy(commonKeys)
  const result = sortedKeys.map(key => {
    if (!Object.hasOwn(obj1, key)) {
      return `    + ${key}: ${obj1[key]}`
    } else if (!Object.hasOwn(obj2, key)) {
      return `    - ${key}: ${obj1[key]}`
    } else if (obj1[key] !== obj2[key]) {
      return `    - ${key}: ${obj1[key]}\n    + ${key}: ${obj2[key]}`
    } else {
      return `      ${key}: ${obj1[key]}`
    }
  })

  return `{\n${result.join('\n')}\n}`

}

