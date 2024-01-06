import _ from 'lodash';
import myName from './myName';
import { functionOne, functionTwo } from './myModule';
import './style.css';
import Icon from './icon.png';

import Data from './data.xml';
import Notes from './data.csv';
import Data2 from './data.json';

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

import printMe from './print.js';

console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  element.appendChild(btn);

  console.log(myName('Dylan'));
  console.log(functionOne());
  console.log(functionTwo());

  console.log(Data);
  console.log(Notes);
  console.log(Data2);

  return element;
}

document.body.appendChild(component());
