'use strict';

const fs = require('fs');
const types = require('sass').types;

var dir = '';

exports.setDir = function (path) {
  dir = path;
};

exports.svg = function (path) {
  let content, data;

  content = fs.readFileSync(dir + path.getValue());
  data = content.toString('base64');

  return new types.String('url(data:image/svg+xml;base64,' + data + ')');
};
