const ctx = document.getElementById('myChart');

const chartColors = {
  red: 'rgb(213, 0, 0)',
  redLight: 'rgb(255, 138, 128)',
  green: 'rgb(0, 230, 118)',
  greenLight: 'rgb(185, 246, 202)',
  orange: 'rgb(255, 145, 0)',
  orangeLight: 'rgb(255, 209, 128)',
};

const xLabels = frenchData.map(({ date }) => new Date(date).toLocaleDateString());

const options = {};

const frenchDeathsDataset = {
  label: 'Number of deaths in France',
  backgroundColor: chartColors.red,
  borderColor: chartColors.red,
  data: frenchData.map(({ deaths }) => deaths),
  fill: false,
};

const frenchHealingsDataset = {
  label: 'Number of healings in France',
  backgroundColor: chartColors.green,
  borderColor: chartColors.green,
  data: frenchData.map(({ healings }) => healings),
  fill: false,
};

const frenchInfectionsDataset = {
  label: 'Number of healings in France',
  backgroundColor: chartColors.orange,
  borderColor: chartColors.orange,
  data: frenchData.map(({ infections }) => infections),
  fill: false,
};

const globalDeathsDataset = {
  label: 'Number of deaths in the world',
  backgroundColor: chartColors.redLight,
  borderColor: chartColors.redLight,
  data: globalData.map(({ deaths }) => deaths),
  fill: true,
};

const globalHealingsDataset = {
  label: 'Number of healings in the world',
  backgroundColor: chartColors.greenLight,
  borderColor: chartColors.greenLight,
  data: globalData.map(({ healings }) => healings),
  fill: true,
};

const globalInfectionsDataset = {
  label: 'Number of infections in the world',
  backgroundColor: chartColors.orangeLight,
  borderColor: chartColors.orangeLight,
  data: globalData.map(({ infections }) => infections),
  fill: true,
};

const data = {
  labels: xLabels,
  datasets: [frenchDeathsDataset, frenchHealingsDataset, frenchInfectionsDataset, globalDeathsDataset, globalHealingsDataset, globalInfectionsDataset],
}

const config = {
  type: 'line',
  data,
  options,
};

const myLineChart = new Chart(ctx, config);