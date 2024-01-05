import _ from 'lodash';
import myName from './myName';
import { functionOne, functionTwo } from './myModule';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  console.log(myName('Dylan'));
  console.log(functionOne());
  console.log(functionTwo());

  return element;
}

document.body.appendChild(component());
