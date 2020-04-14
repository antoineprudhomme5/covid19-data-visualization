const ctx = document.getElementById("myChart");

const defaultCountry = 'France';

const globalDataSwitchEL = document.getElementById("globalDataSwitch");
const infectionsSwitchEL = document.getElementById("infectionsSwitch");
const deathsSwitchEL = document.getElementById("deathsSwitch");
const healingsSwitchEL = document.getElementById("healingsSwitch");

infectionsSwitchEL.checked = true;
deathsSwitchEL.checked = true;
healingsSwitchEL.checked = true;

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

document.querySelector(
  `input[value="${defaultCountry}"]`
).checked = true;

function buildCountryDatasets(country, colorIndex = 0) {
  const datasets = [];
  if (deathsSwitchEL.checked) {
    datasets.push({
      label: `Number of deaths in ${country}`,
      backgroundColor: colorCharts[colorIndex].deaths,
      borderColor: colorCharts[colorIndex].deaths,
      data: dataByCountry[country].map(({ deaths }) => deaths),
      fill: false,
    });
  }
  if (healingsSwitchEL.checked) {
    datasets.push({
      label: `Number of healings in ${country}`,
      backgroundColor: colorCharts[colorIndex].healings,
      borderColor: colorCharts[colorIndex].healings,
      data: dataByCountry[country].map(({ healings }) => healings),
      fill: false,
    });
  }
  if (infectionsSwitchEL.checked) {
    datasets.push({
      label: `Number of infections in ${country}`,
      backgroundColor: colorCharts[colorIndex].infections,
      borderColor: colorCharts[colorIndex].infections,
      data: dataByCountry[country].map(({ infections }) => infections),
      fill: false,
    });
  }
  return datasets;
}

function buildDatasetsForSelectedCountries() {
  const countriesCheckedEl = Array.from(document.querySelectorAll(
    'input[class="country_choice"]:checked'
  ));
  const countries = countriesCheckedEl.map((el) => el.value);
  const datasets = [];
  countries.forEach((country, i) => {
    buildCountryDatasets(country, i).forEach((countryDataset) => {
      datasets.push(countryDataset);
    });
  });

  if (globalDataSwitchEL.checked) {
    if (deathsSwitchEL.checked) {
      datasets.push(globalDeathsDataset); 
    }
    if (healingsSwitchEL.checked) {
      datasets.push(globalHealingsDataset);
    }
    if (infectionsSwitchEL.checked) {
      datasets.push(globalInfectionsDataset);
    }
  }

  return datasets;
}

const options = {};

const data = {
  labels: xLabels,
  datasets: buildCountryDatasets(defaultCountry),
};

const config = {
  type: "line",
  data,
  options,
};

const myLineChart = new Chart(ctx, config);

function handleSwitchStateChange() {
  config.data.datasets = buildDatasetsForSelectedCountries();
  myLineChart.update();
}

globalDataSwitchEL.addEventListener("change", handleSwitchStateChange);
infectionsSwitchEL.addEventListener("change", handleSwitchStateChange);
deathsSwitchEL.addEventListener("change", handleSwitchStateChange);
healingsSwitchEL.addEventListener("change", handleSwitchStateChange);

function handleClickOnCountryCheckbox(el) {
  const countriesCheckedEl = Array.from(document.querySelectorAll(
    'input[class="country_choice"]:checked'
  ));
  const nbChecked = countriesCheckedEl.length;
  if (nbChecked === 3) {
    el.checked = false;
  } else {
    config.data.datasets = buildDatasetsForSelectedCountries();
    myLineChart.update();
  }
}

Array.from(document.getElementsByClassName("country_choice")).map((el) => {
  el.addEventListener("click", (event) => {
    handleClickOnCountryCheckbox(event.target);
  });
});
