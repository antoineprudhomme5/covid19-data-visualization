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

const options = {};

const data = {
  labels: xLabels,
  datasets: [],
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
      globalDeathsDataset,
      globalHealingsDataset,
      globalInfectionsDataset,
    ]),
      (globalDataToggleBtnEl.textContent = hideGlobalDataLabel);
  } else {
    config.data.datasets = [];
    globalDataToggleBtnEl.textContent = showGlobalDataLabel;
  }
  myLineChart.update();
});

function handleClickOnCountryCheckbox(el) {
  const countriesCheckedEl = Array.from(document.querySelectorAll(
    'input[class="country_choice"]:checked'
  ));
  const nbChecked = countriesCheckedEl.length;
  if (nbChecked === 3) {
    el.checked = false;
  } else {
    const countries = countriesCheckedEl.map((el) => el.value);
    const datasets = [];
    countries.forEach((country, i) => {
      datasets.push({
        label: `Number of deaths in ${country}`,
        backgroundColor: colorCharts[i].deaths,
        borderColor: colorCharts[i].deaths,
        data: dataByCountry[country].map(({ deaths }) => deaths),
        fill: false,
      });
      datasets.push({
        label: `Number of healings in ${country}`,
        backgroundColor: colorCharts[i].healings,
        borderColor: colorCharts[i].healings,
        data: dataByCountry[country].map(({ healings }) => healings),
        fill: false,
      });
      datasets.push({
        label: `Number of infections in ${country}`,
        backgroundColor: colorCharts[i].infections,
        borderColor: colorCharts[i].infections,
        data: dataByCountry[country].map(({ infections }) => infections),
        fill: false,
      });
    });
    config.data.datasets = datasets;
    myLineChart.update();
  }
}

Array.from(document.getElementsByClassName("country_choice")).map((el) => {
  el.addEventListener("click", (event) => {
    handleClickOnCountryCheckbox(event.target);
  });
});
