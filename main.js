import _ from 'lodash';

export default (json1, json2) => {
  const data1 = JSON.parse(json1);

  const data2 = JSON.parse(json2);

  const keys = _.union(Object.keys(data1), Object.keys(data2));

  return keys.reduce((differences, key) => {
    if (_.isEqual(data1[key], data2[key])) {
      differences += `   ${key}: ${data1[key] ?? data2[key]} \n`;
    } else {
      differences += _.has(data1, key) ? `  - ${key}: ${data1[key]} \n` : '';
      differences += _.has(data2, key) ? `  + ${key}: ${data2[key]} \n` : '';
    }
    return differences;
  }, '');
};
