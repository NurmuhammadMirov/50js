const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.indicator');
const buttons = document.querySelectorAll('button');

let currentStep = 1;

const updateSteps = (e) => {
  currentStep += e.target.id === 'next' ? 1 : -1;
  currentStep = Math.min(Math.max(currentStep, 1), circles.length);

  circles.forEach((circle, index) => {
    circle.classList.toggle('active', index < currentStep);
  });

  progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

  buttons[0].disabled = currentStep === 1;
  buttons[1].disabled = currentStep === circles.length;
};

buttons.forEach((button) => button.addEventListener('click', updateSteps));