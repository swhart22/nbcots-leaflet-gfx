//import _ from 'lodash';
import '../css/nbcotsbase.css';
import * as d3 from 'd3';
import colors from './colors.js';
const L = require("leaflet");
//import sheetsy from 'sheetsy';
//const {urlToKey, getWorkbook, getSheet } = sheetsy;
//import metadata from './proj-config.js';

function draw(data){
	console.log(data);

	var container = d3.select('#container');
	var map = L.map('container').setView([37.8, -96], 4);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	//the actual graphic
		
};

export default draw;
