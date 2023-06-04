import { readdir, readFile, writeFile } from 'fs/promises';
import { load } from 'js-yaml';

readdir('./data')
  .then((files) => files.filter((file) => file.match(/\.ya?ml$/)))
  .then((files) => Promise.all(files.map((file) => readFile(`./data/${file}`, 'utf8'))))
  .then((files) => files.map((file) => load(file)))
  .then((data) => JSON.stringify(data))
  .then((json) => writeFile('./data.json', json, 'utf8'));