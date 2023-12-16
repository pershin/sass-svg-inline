'use strict';

const fs = require('fs');
const resolve = require('path').resolve;
const types = require('sass').types;

var directory = '';

exports.setDir = function (path) {
  directory = path;
};

exports.svg = function (path) {
  let content, data, filename;

  filename = resolve(directory, path.getValue());
  content = fs.readFileSync(filename);
  data = content.toString('base64');

  return new types.String('url(data:image/svg+xml;base64,' + data + ')');
};
