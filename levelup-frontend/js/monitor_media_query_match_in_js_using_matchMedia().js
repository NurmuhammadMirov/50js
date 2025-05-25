// in CSS, we have @media rule using which we can change style based on the state of media.

// But, what if we need to change some functionality using javascript based on the current state of media?

// we can do that using window.matchMedia()

const mq = window.matchMedia('screen and (max-width: 550px)');

/* one-time check */ 
const isPhone = mq.matches;
// isPhone: true if viewport width <= 550px

/* watch for change in matches property */ 
mq.addEventListener('change', (event) => {
  console.log('isPhone', event.matches);
});