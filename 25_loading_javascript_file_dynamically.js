// It is funny how in the past we had to write a lot of things alone. There was no
// NPM or GitHub. We had to write our loader. A utility that loads JavaScript files
// dynamically. Today this problem is solved by numerous packages, but I figured will
// be intersting to share:

function loadJS(files, done) {
  const head = document.getElementsByTagName('head')[0];
  Promise.all(files.map(file => {
    return new Promise(loaded => {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = file;
      s.addEventListener('load', (e) => loaded(), false);
      head.appendChild(s);
    });
  })).then(done);
}

loadJS(["a.js", "b.js"], () => {
  console.log('Loading completed.');
});

// The solution is to add a <script> tag and use the load event to understand 
// when the file is downloaded