let timerId = null;
const SET_TIMER = 1000

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.stopBtn.disabled = true;
refs.startBtn.addEventListener('click', onBtnStartChangeColor);
refs.stopBtn.addEventListener('click', onBtnStopChangeColor);

function onBtnStartChangeColor() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, SET_TIMER);
}

function onBtnStopChangeColor() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;

  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
