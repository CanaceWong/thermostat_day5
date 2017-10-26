$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up(1);
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down(1);
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.powerSavingModeOn();
    $('#power-saving').text('on');
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.powerSavingModeOff();
    $('#power-saving').text('off');
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  }
});

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.check());
}