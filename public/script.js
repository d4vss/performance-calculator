var weightInput = document.querySelector('#weight');
var unitSelect = document.querySelector('#unit');
var cgInput = document.querySelector('#cg');
var configSelect = document.querySelector('#config');
var aiceSelect = document.querySelector('#aice');
var actypeSelect = document.querySelector('#actype');
var airportInput = document.querySelector('#airport');
var runwayLengthInput = document.querySelector('#runwaylength');
var runwayUnitSelect = document.querySelector('#runwayunit');
var runwayHeadingInput = document.querySelector('#runwayheading');
var runwayConditionSelect = document.querySelector('#runwaycondition');
var airportElevationInput = document.querySelector('#airportelevation');
var qnhInput = document.querySelector('#qnh');
var presstypeSelect = document.querySelector('#presstype');
var temperatureInput = document.querySelector('#temperature');
var windInput = document.querySelector('#wind');

function getFormData() {
  var formData = {
    weight: weightInput.value,
    unit: unitSelect.value,
    cg: cgInput.value,
    config: configSelect.value,
    aice: aiceSelect.value,
    actype: actypeSelect.value,
    airport: airportInput.value,
    runwayLength: runwayLengthInput.value,
    runwayUnit: runwayUnitSelect.value,
    runwayHeading: runwayHeadingInput.value,
    runwayCondition: runwayConditionSelect.value,
    airportElevation: airportElevationInput.value,
    qnh: qnhInput.value,
    presstype: presstypeSelect.value,
    temperature: temperatureInput.value,
    wind: windInput.value,
  };

  return formData;
}

function write() {
    console.log(getFormData());
}
