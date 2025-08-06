import { gendiff } from '../bin/index.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const expectedResult = fs.readFileSync(getFixturePath('result.txt'), 'utf8').trim();


let file1;
let file2;
beforeAll(() => {
  // Подготавливаем пути к тестовым файлам
  file1 = getFixturePath('file1.json');
  file2 = getFixturePath('file2.json');
});

test('compares files', () => {
  const result = gendiff(file1, file2);
  expect(result.trim()).toEqual(expectedResult);
});
