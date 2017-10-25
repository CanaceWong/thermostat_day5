describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can increase the temperature with up function', function() {
    thermostat.up(1);
    expect(thermostat.temperature()).toEqual(21);
  });
});