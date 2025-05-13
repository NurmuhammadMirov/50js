// build a Virtual DOM from Scratch
// 🚀 Here's the flow I followed:
// 1. Create virtual nodes with a createElement function
// 2. Render them with a recursive render() function
// 3. Compare with old VDOM & update only what changed — just like React’s diffing algorithm


// Step 1: Create Virtual DOM Elements
// Funtion to create a virtual DOM element (an object representation of a real DOM element)
function createElement(type, props = {}, ...children) {
  return {
    type, // the type of the element (e.g., 'div', 'hi', etc)
    props: {
      ...props, // spread any provided properties (e.g., id, className, etc)
      children: children
        .flat() // flatten children in case of nested arrays
        .map((child) =>
          typeof child === 'object' ? child : createTextElement(child)) // if child is string, create a text element
    }
  }
}

// function to create a virtual DOM text element (used for string/text content)
function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT', // special type for text nodes
    props: { nodeValue: text, children: [] }, // text content is stored in 'nodeValue'
  }
}

// Step 2: Render to real DOM
// function to render a virtual DOM node to an actual DOM node
function render(vdom) {
  const dom = 
    vdom.type === 'TEXT_ELEMENT' // if it's a text element, create a text node
      ? document.createTextNode(vdom.props.nodeValue)
      : document.createElement(vdom.type) // otherwise create an element of the specified type

  // set all props (except for children) to the real DOM element
  Object.keys(vdom.props)
    .filter((k) => k !== 'children') // Ignore the 'children' property for now
    .forEach((k) => (dom[k] = vdom.props[k])) // set attributes like class. id. etc

  // recursivelly render children and append them to the DOM element
  vdom.props.children.forEach((child) => dom.appendChild(render(child)));

  return dom; // return the real DOM element
}

// Step 3: Update Logic (Diffing)
// function to update the DOM when the virtual DOM changes
function updateElement(parent, newVNode, oldVNode, index = 0) {
  const existing = parent.childNodes[index] // get the current DOM child at the given index

  if (!oldVNode) {
    parent.appendChild(render(newVNode)); // if there's no oldVNode, render and append the new one
  } else if(!newVNode) {
    parent.removeChild(existing); // if the newVNode is null, remove the old element
  } else if (newVNode.type !== oldVNode.type) {
    parent.replaceChild(render(newVNode), existing); // if types differ, replace the olf node with the new one
  } else {
    // Update the properties of the exsiting DOM node
    updateProps(existing, newVNode.props, oldVNode.props);

    const newChildren = newVNode.props.children || [] // get the children of the newVNode
    const oldChildren = oldVNode.props.children || [] // get the children of the oldVNode

    // recursively update children
    for (let i = 0; i < newChildren.length || i < oldChildren.length; i++) {
      updateElement(existing, newChildren[i], oldChildren[i], i);
    }
  }
}

// function to update the properties (attributes) of the DOM element
function updateProps(dom, newProps, oldProps) {
  // remove any old props that are not in newProps
  Object.keys(oldProps).forEach((k) => {
    if (k !== 'children' && !(k in newProps)) dom[k] = ''; // if the prop no longer exists, clear it 
  });

  // set the new properties on the DOM element
  Object.keys(newProps).forEach((k) => {
    if (k !== 'children') dom[k] = newProps[k]; // set the new property
  });
}

// initial virtual DOM structure
const vApp1 = createElement(
  'div',
  null,
  createElement('h1', null, 'Hello Virtual DOM')
);

// update virtual DOM structure
const vApp2 = createElement(
  'div',
  null,
  createElement('h1', null, 'Hello VDOM')
);

// get the root DOM element to mount the app
const root = document.getElementById('root');

// render and append the initial virtual DOM
let oldVNode = vApp1;
root.appendChild(render(oldVNode));

// after 2 second, update the DOM with a new virtual DOM structure
setTimeout(() => {
  updateElement(root, vApp2, oldVNode); // update the DOM with the new virtual DOM
  oldVNode = vApp2;
}, 2000);