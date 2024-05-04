const boxes = document.querySelectorAll('.box');

function moveBox(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
      entry.target.classList.add('move-in');
    } else {
      entry.target.classList.remove('move-in');
    }
  })
}

const observer = new IntersectionObserver(moveBox, {
  root: null,
  threshold: 0.5,
  rootMargin: '0px 500px 0px 500px'
})

boxes.forEach(box => observer.observe(box));