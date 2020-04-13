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
  checkboxEl.className = "country_choice";

  const liEl = document.createElement("li");

  liEl.appendChild(checkboxEl);
  liEl.innerHTML = liEl.innerHTML + country;
  countriesEl.appendChild(liEl);
});

function handleClickOnCountryCheckbox(el) {
  const nbChecked = document.querySelectorAll(
    'input[class="country_choice"]:checked'
  ).length;
  if (nbChecked === 3) {
    el.checked = false;
  }
}

Array.from(document.getElementsByClassName("country_choice")).map((el) => {
  el.addEventListener("click", (event) => {
    handleClickOnCountryCheckbox(event.target);
  });
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
