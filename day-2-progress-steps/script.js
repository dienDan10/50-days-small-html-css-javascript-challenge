const btnNext = document.querySelector('.btn--next');
const btnPrev = document.querySelector('.btn--prev');
const steps = document.querySelectorAll('.step');
const stepBar = document.querySelector('.step_bar-active');

let currentStep = 0;
const totalStep = steps.length;
steps[0].classList.add('step--active');
checkStepActive();

btnNext.addEventListener('click', () => {
  currentStep++;
  checkStepActive();
  stepBar.style.width = `${currentStep * 100 / (totalStep - 1)}%`;
  steps[currentStep].classList.add('step--active');
})

btnPrev.addEventListener('click', () => {
  currentStep--;
  checkStepActive();
  stepBar.style.width = `${currentStep * 100 / (totalStep - 1)}%`;
  steps[currentStep + 1].classList.remove('step--active');
})

// disabled next button if we are the last step
// disabled prev button if we are at the first step
function checkStepActive() {
  if (currentStep === (totalStep - 1)) {
    btnNext.disabled = true;
    return;
  }
  if (currentStep === 0) {
    btnPrev.disabled = true;
    return;
  }

  btnNext.disabled = false;
  btnPrev.disabled = false;
}