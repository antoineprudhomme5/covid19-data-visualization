const dataByCountry = JSON.parse(dataByCountryJSON);

const xLabels = dataByCountry['global'].map(({ date }) =>
  new Date(date).toLocaleDateString()
);

const frenchDeathsDataset = {
  label: "Number of deaths in France",
  backgroundColor: colorsChart.red,
  borderColor: colorsChart.red,
  data: dataByCountry['France'].map(({ deaths }) => deaths),
  fill: false,
};

const frenchHealingsDataset = {
  label: "Number of healings in France",
  backgroundColor: colorsChart.green,
  borderColor: colorsChart.green,
  data: dataByCountry['France'].map(({ healings }) => healings),
  fill: false,
};

const frenchInfectionsDataset = {
  label: "Number of healings in France",
  backgroundColor: colorsChart.orange,
  borderColor: colorsChart.orange,
  data: dataByCountry['France'].map(({ infections }) => infections),
  fill: false,
};

const globalDeathsDataset = {
  label: "Number of deaths in the world",
  backgroundColor: colorsChart.redLight,
  borderColor: colorsChart.redLight,
  data: dataByCountry['global'].map(({ deaths }) => deaths),
  fill: true,
};

const globalHealingsDataset = {
  label: "Number of healings in the world",
  backgroundColor: colorsChart.greenLight,
  borderColor: colorsChart.greenLight,
  data: dataByCountry['global'].map(({ healings }) => healings),
  fill: true,
};

const globalInfectionsDataset = {
  label: "Number of infections in the world",
  backgroundColor: colorsChart.orangeLight,
  borderColor: colorsChart.orangeLight,
  data: dataByCountry['global'].map(({ infections }) => infections),
  fill: true,
};