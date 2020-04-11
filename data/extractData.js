const fs = require('fs');
const allData = require('./coronavirus.politologue.com-data-2020-04-11.json');

const frenchData = allData.PaysData
  .filter((data) => data.Pays === 'France')
  .map((data) => {
    return {
      date: data.Date,
      country: data.Pays,
      infections: data.Infection,
      deaths: data.Deces,
      healings: data.Guerisons,
    };
  })
  .sort((a, b) => new Date(a.date) - new Date(b.date));

const globalData = allData.GlobalData
  .map((data) => {
    return {
      date: data.Date,
      infections: data.Infection,
      deaths: data.Deces,
      healings: data.Guerisons,
    };
  })
  .sort((a, b) => new Date(a.date) - new Date(b.date));

fs.writeFileSync('./data/french.json', JSON.stringify(frenchData));
fs.writeFileSync('./data/global.json', JSON.stringify(globalData));
