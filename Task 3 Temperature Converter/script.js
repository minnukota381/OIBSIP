function convert() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  const kelvin = celsius + 273.15;
  const fahrenheit = (celsius * 9/5) + 32;

  document.getElementById('kelvin').value = kelvin.toFixed(2);
  document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
}
