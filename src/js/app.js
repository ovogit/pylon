//**** IMPORTS
//TODO
//GOAL => pylon when completed will be a phone app that schedules, maintains your focus, and 
// and assists in meal plann/prep and workout schedules
//=======================================================================================
// [?] tie into trello?
// [ ] load hotschedules schedule
//    | - [ ] make scraper front end
//              - event emitter called nxsEvents!!
//              - bootstrap grid system setup
//              - navigation
//                - react component created
//                - bootstrap
//
//    | - [ ] hook into n.py
//    | - [ ] 
//    | - [ ] 
// [ ] scrape hotschedules
import 'babel-polyfill';
import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
window.jQuery = $;
import * as nxsEvents from 'events'

console.log(nxsEvents);

//*** FRONT_END_IMPORTS
var css = require('../sass/style.scss');
var html = require('../pug/index.pug');


//*** APP_IMPORTS
import  Navigation  from './templates/navigation.nxs.js';
import  Scraper  from './templates/scraper.nxs.js';

class Layout extends React.Component {
    render() {
        return (
                <div>
                    <Navigation />
                    <Scraper />
                </div>
               );
    }
}

render(<Layout />, document.querySelector('#app'));
