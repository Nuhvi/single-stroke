const isHoveringOverSelf = (parent: HTMLElement, e: DragEvent) => {
  const rect = parent.getBoundingClientRect();
  return (
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom &&
    e.clientX >= rect.left &&
    e.clientX <= rect.right
  );
};

export default (el: HTMLElement) => {
  el?.addEventListener('dragover', (e) => {
    e.preventDefault();
    if (el.classList.contains('dragged-over')) return;
    el.classList.add('dragged-over');
  });

  el?.addEventListener('dragleave', (e) => {
    e.preventDefault();
    if (isHoveringOverSelf(el, e)) return;
    el.classList.remove('dragged-over');
  });
};
