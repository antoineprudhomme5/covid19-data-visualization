const dataByCountry = JSON.parse(dataByCountryJSON);

const xLabels = dataByCountry["global"].map(({ date }) =>
  new Date(date).toLocaleDateString()
);

const countries = Object.keys(dataByCountry).filter((key) => key !== "global");

const globalDeathsDataset = {
  label: "Number of deaths in the world",
  backgroundColor: globalColorChart.deaths,
  borderColor: globalColorChart.deaths,
  data: dataByCountry["global"].map(({ deaths }) => deaths),
  fill: true,
};

const globalHealingsDataset = {
  label: "Number of healings in the world",
  backgroundColor: globalColorChart.healings,
  borderColor: globalColorChart.healings,
  data: dataByCountry["global"].map(({ healings }) => healings),
  fill: true,
};

const globalInfectionsDataset = {
  label: "Number of infections in the world",
  backgroundColor: globalColorChart.infections,
  borderColor: globalColorChart.infections,
  data: dataByCountry["global"].map(({ infections }) => infections),
  fill: true,
};
