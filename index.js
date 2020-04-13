const ctx = document.getElementById("myChart");

const showGlobalDataLabel = "Show global data";
const hideGlobalDataLabel = "Hide global data";

let showGlobalData = false;
const globalDataToggleBtnEl = document.getElementById("globalDataToggleBtn");
globalDataToggleBtnEl.textContent = showGlobalDataLabel;

const countriesEl = document.getElementById("countries");
countries.forEach((country) => {
  const checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.name = country;
  checkboxEl.value = country;

  const liEl = document.createElement("li");

  liEl.appendChild(checkboxEl);
  liEl.innerHTML = liEl.innerHTML + country;
  countriesEl.appendChild(liEl);
});

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
