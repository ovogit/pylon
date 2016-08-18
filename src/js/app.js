import 'babel-polyfill';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom'

var css = require('../sass/style.scss');
var html = require('../pug/index.pug');

$('body').append(html);
