const inputTemp = document.getElementById('input-temp');
const inputScale = document.getElementById('input-scale');
const convertBtn = document.getElementById('convert-btn');
const celsiusOutput = document.getElementById('celsius-output');
const fahrenheitOutput = document.getElementById('fahrenheit-output');
const kelvinOutput = document.getElementById('kelvin-output');
const heroSection = document.querySelector('.hero-section');

const imageUrls = [
  'Assets/1.jpg',
  'Assets/2.jpg',
  'Assets/3.jpg',
  'Assets/4.jpg',
  'Assets/5.jpg',
  'Assets/6.jpg',
  'Assets/7.jpg',
  'Assets/8.jpg',
  'Assets/9.jpg',
  'Assets/10.jpg',
  'Assets/11.jpg',
  'Assets/12.jpg',
  'Assets/13.jpg',
  'Assets/14.jpg',
  'Assets/15.jpg',
  'Assets/16.jpg',
  'Assets/17.jpg',
  'Assets/18.jpg',
  'Assets/19.jpg',
  'Assets/20.jpg',
  'Assets/21.jpg',
  'Assets/22.jpg',
  'Assets/23.jpg',
  'Assets/24.jpg',
  'Assets/25.jpg',
];

const preloadImages = () => {
  const promises = [];
  for (const imageUrl of imageUrls) {
    const img = new Image();
    const promise = new Promise(resolve => img.onload = resolve);
    img.src = imageUrl;
    promises.push(promise);
  }
  return Promise.all(promises);
};

window.onload = () => {
  preloadImages().then(() => {
    console.log('All images preloaded successfully!');
  });
};

function changeBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const imageUrl = imageUrls[randomIndex];
  heroSection.style.backgroundImage = `url(${imageUrl})`;

  heroSection.classList.add('fade-in');

  setTimeout(() => {
    heroSection.classList.remove('fade-in');
  }, 5000);
}

setInterval(changeBackgroundImage, 8000);

function convertTemperature() {
  const temp = parseFloat(inputTemp.value);
  const scale = inputScale.value;

  let celsius, fahrenheit, kelvin;

  switch (scale) {
    case 'celsius':
      celsius = temp;
      fahrenheit = (temp * 9/5) + 32;
      kelvin = temp + 273.15;
      break;
    case 'fahrenheit':
      celsius = (temp - 32) * 5/9;
      fahrenheit = temp;
      kelvin = (temp + 459.67) * 5/9;
      break;
    case 'kelvin':
      celsius = temp - 273.15;
      fahrenheit = (temp * 9/5) - 459.67;
      kelvin = temp;
      break;
  }

  celsiusOutput.textContent = `${celsius.toFixed(2)} °C`;
  fahrenheitOutput.textContent = `${fahrenheit.toFixed(2)} °F`;
  kelvinOutput.textContent = `${kelvin.toFixed(2)} K`;
}

convertBtn.addEventListener('click', convertTemperature);
