const ctx = document.getElementById("myChart");

const showGlobalDataLabel = "Show global data";
const hideGlobalDataLabel = "Hide global data";

let showGlobalData = false;
const globalDataToggleBtnEl = document.getElementById("globalDataToggleBtn");
globalDataToggleBtnEl.textContent = showGlobalDataLabel;

const options = {};

const data = {
  labels: xLabels,
  datasets: [
    frenchDeathsDataset,
    frenchHealingsDataset,
    frenchInfectionsDataset,
  ],
};

const config = {
  type: "line",
  data,
  options,
};

const myLineChart = new Chart(ctx, config);

globalDataToggleBtnEl.addEventListener("click", () => {
  showGlobalData = !showGlobalData;
  if (showGlobalData) {
    (config.data.datasets = [
      frenchDeathsDataset,
      frenchHealingsDataset,
      frenchInfectionsDataset,
      globalDeathsDataset,
      globalHealingsDataset,
      globalInfectionsDataset,
    ]),
      (globalDataToggleBtnEl.textContent = hideGlobalDataLabel);
  } else {
    config.data.datasets = [
      frenchDeathsDataset,
      frenchHealingsDataset,
      frenchInfectionsDataset,
    ];
    globalDataToggleBtnEl.textContent = showGlobalDataLabel;
  }
  myLineChart.update();
});
