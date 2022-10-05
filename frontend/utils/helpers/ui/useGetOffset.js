export function getOffset(selector) {
  const el = document.querySelector(selector);
  const box = el.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
    // bottom: box.top + el.offsetHeight
  }
}