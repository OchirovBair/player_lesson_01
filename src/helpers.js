export function createElementWithClass(tagName, ...classNames) {
  const element = document.createElement(tagName);
  classNames.forEach((c) => element.classList.add(c));
  return element;
}

export function createEle(tagName, props) {
  const element = document.createElement(tagName);
  Object.entries(props).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

export function secondsToMinutesAndSeconds(time) {
  const min = Math.round(time / 60);
  const sec = time % 60;
  return `${min}m ${sec}s`;
}
