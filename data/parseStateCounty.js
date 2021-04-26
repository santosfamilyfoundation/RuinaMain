```
This file download full US county dataset from us-atlas library: https://www.npmjs.com/package/us-atlas
and parse it into a dictionary where the keys are each of the state and US territory and the values are its
corresponding counties.

To run: 
cd <project root directory>
node data/parseStateCounty.js

output json is saved in data/stateCountyMapping.json
```
const usStateAbbrev = require('us-state-codes'); // Maryland -> MD
const fips = require('fips-county-codes');
const fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function Get(url) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
const us = JSON.parse(Get('https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json'));

let countiesByStates = {};
    const statesByFips = new Map(us.objects.states.geometries.map(state => {
        let stateName = state.properties.name;
        countiesByStates[stateName] = [];
        return [state.id, stateName]
    }));

const countiesByFips = new Map(us.objects.counties.geometries.map(county => {
      let fip = county.id; // county fip code

      // Get the state code from fip and look up the corresponding state name
      let countyStateName = statesByFips.get(fip.slice(0, 2)); // first 2 digit of fip is state, get full state name

      // Get abbreviated state name (fips-county-codes API uses abbrev state name)
      let stateCode = usStateAbbrev.getStateCodeByStateName(countyStateName); // get state abbrev ex MD

      // Try getting full county name from fips-county-codes library if failed, use default name in json
      let countyName = county.properties.name;
      try {
          countyName = fips.get({
              "fips": fip.slice(2, 5),
              "state": stateCode
          }).county;
      } catch (error) { }

      // add county to corresponding list by state
      countiesByStates[countyStateName].push(countyName);
      return [fip, countyName]
  }));

console.log("MD County: ", countiesByStates['Maryland']);
let json = JSON.stringify(countiesByStates);
fs.writeFile('stateCountyMapping.json', json, function (err, data) {
  fs.writeFile('errorLog.txt', data, function(err, result) {
     if(err) console.log('error', err);
   });
 });