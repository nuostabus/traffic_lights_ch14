const { log } = console;

const stopButton = document.getElementById('stop');
const cautionButton = document.getElementById('caution');
const goButton = document.getElementById('go');

const stopLight = document.querySelector('.light.stop');
const cautionLight = document.querySelector('.light.caution');
const goLight = document.querySelector('.light.go');
const allLights = document.querySelectorAll('.light');

log(allLights);

const handler = (element) => {
  for (let i = 0; i < allLights.length; i++) {
    allLights[i].classList.remove('on');
  }
  element.classList.add('on');
};

stopButton.addEventListener('click', () => handler(stopLight));
cautionButton.addEventListener('click', () => handler(cautionLight));
goButton.addEventListener('click', () => handler(goLight));

stopLight.addEventListener('mouseover', () => handler(stopLight));
cautionLight.addEventListener('mouseover', () => handler(cautionLight));
goLight.addEventListener('mouseover', () => handler(goLight));
