const fs = require("fs");
const allData = require("./coronavirus.politologue.com-data-2020-04-11.json");

const dataByCountryMap = new Map();

const globalData = allData.GlobalData.map((data) => {
  return {
    date: data.Date,
    infections: data.Infection,
    deaths: data.Deces,
    healings: data.Guerisons,
  };
});
dataByCountryMap.set("global", globalData);

allData.PaysData.forEach((data) => {
  if (!dataByCountryMap.has(data.Pays)) {
    dataByCountryMap.set(data.Pays, []);
  }
  dataByCountryMap.get(data.Pays).push({
    date: data.Date,
    country: data.Pays,
    infections: data.Infection,
    deaths: data.Deces,
    healings: data.Guerisons,
  });
});

Array.from(dataByCountryMap.keys()).forEach((key) => {
  dataByCountryMap.set(
    key,
    dataByCountryMap
      .get(key)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
  );
});

const dataByCountryObject = {};
dataByCountryMap.forEach((value, key) => {
  dataByCountryObject[key] = value;
});

fs.writeFileSync(
  "./data/all.js",
  `const dataByCountryJSON = \`${JSON.stringify(dataByCountryObject)}\`;`
);
