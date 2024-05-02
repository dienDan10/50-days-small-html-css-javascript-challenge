const bg = document.querySelector('.bg');
const count = document.querySelector('.loading-text');

let percent = 0;

// we will using setInterval() method 
// the bg will be clear in 3s, the percent will run from 0 to 99
// which means 100 call to the handler function in 3s => interval = 3000/100 = 30ms

function handler() {
  count.textContent = `${percent}%`;
  count.style.opacity = `${(99 - percent) * 0.01}`;
  bg.style.filter = `blur(${(99 - percent) * 0.1}px)`;

  percent++;
  if (percent >= 100) {
    clearInterval(blurryLoading);
    count.style.display = 'none';
  }
}

const blurryLoading = setInterval(handler, 100);