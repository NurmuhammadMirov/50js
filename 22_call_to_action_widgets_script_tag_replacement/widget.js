(async function loadContent() {
  const options = document.currentScript.dataset;
  const node = document.createElement('div');
  const style = options.color ? `color: ${options.color}` : '';

  node.innerHTML = `<a href="http://mysite.com" style="${style}">Click Me</a>`;
  document.currentScript.parentNode.replaceChild(node, document.currentScript);
})();

// The APIs that are used are document.currentScript and element.dataset. The
// first one gives us access to the element whose script we are currently processing.
// The dataset property is quick access to the data attributes of the element.

// The snippet above creates a new div and injects in it a link. Then, by using
// replaceChild it swaps the script tag with that newly created element. The result
// is:

// <div><a href="http://mysite.com"  style="color: #ff0000">click me</a></div>
// <section>Content here</section>
// <div><a href="http://mysite.com"  style="color: #00ff00">click me</a></div>