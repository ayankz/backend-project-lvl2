import fs from 'fs';
import path from 'path';
import _ from 'lodash';


const compare = (file1, file2) => {
    
    const filePath1 = path.resolve(`${process.cwd()}`, file1);
    const filePath2 = path.resolve(`${process.cwd()}`, file2);
    const filePathAsObj1 = JSON.parse(fs.readFileSync(filePath1));
    const filePathAsObj2 = JSON.parse(fs.readFileSync(filePath2));
    const keys1 = _.keys(filePathAsObj1);
    const keys2 = _.keys(filePathAsObj2);
    const keys = _.union(keys1, keys2).sort();
    const objectOfStatuses = {};
    const result = [];
    for (const key of keys) {
      if (!_.has(filePathAsObj1, key)) {
        objectOfStatuses[key] = 'added';
      } else if (!_.has(filePathAsObj2, key)) {
        objectOfStatuses[key] = 'deleted';
      } else if (filePathAsObj1[key] !== filePathAsObj2[key]) {
        objectOfStatuses[key] = 'changed';
      } else {
        objectOfStatuses[key] = 'unchanged';
      }
    }
    for (const key of keys) {
      if (objectOfStatuses[key] === 'added') {
        const string = `+ ${key}: ${filePathAsObj2[key]}`;
        result.push(string);
      } else if (objectOfStatuses[key] === 'changed') {
        const string1 = `- ${key}: ${filePathAsObj1[key]}`;
        result.push(string1);
        const string2 = `+ ${key}: ${filePathAsObj2[key]}`;
        result.push(string2);
      } else if (objectOfStatuses[key] === 'deleted') {
        const string = `- ${key}: ${filePathAsObj1[key]}`;
        result.push(string);
      } else {
        const string = `  ${key}: ${filePathAsObj1[key]}`;
        result.push(string);
      }
    }
    result.push('}');
    result.unshift(' {');
    console.log(result.join(' \n '));
  };
export default compare;
