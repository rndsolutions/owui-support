export function smoothScrollTo(id) {
  const target = document.getElementById(id);
  if (target) {
    const targetPosition = target.offsetTop - 50;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // duration in milliseconds
    let start = null;

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * progressRatio);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    });
  }
}
