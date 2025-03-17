// I remember the times when copying to a clipboard was done via embedding a small
// Flash app. Nowadays we have an API for this:

// Setting text to clipboard
async function copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
}
// Getting text from clipboard
async function pasteFromClipboard() {
  return navigator.clipboard.readText();
}

// Another problem that we had with Flash back in the days was the routing.
// Because the Flash player was just a plugin we didn't have direct access to the
// addess bar. If the user progresses in our application and changes pages there was
// no way to give him/her a sharable link to that place. Then the term 'deep linking'
// was invented. That was the process of changing the fragment of the browser's URL so
// we have unique addresses for each page. Today we don't use Flash anumore and we have
// the History API:

window.onpopstate = function(event) {
  console.log(`State: ${JSON.stringify(event.state)}`);
}

history.pushState({foo: "bar"}, "my title", "/foo/bar");
history.back();

// We didn't have storage APIs too. We could pretty much use only cookies. Today there are a
// couple of different ways to store data in the user's browser. The most popular one is the 
// local storage.

localStorage.setItem("foo", "bar");
//....
const value = localStorage.getItem("foo");
console.log(value); // bar

// There is also sessionStorage which is similar to localStorage but keeps the data only for
// the current session. Meaning that if the user closes the tab or the browser the data is gone.
// While the localStorage will store the data untill it gets deleted via JavaScript or by
// the user manually.

// In case we need more space, there is IndexedDB API. It is a low-level API for storing significant
// amounts of data. IndexDB is a transaction database system. Similar to SQL.
// Here is one not very short example:

const  IndexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

const request = indexedDB.open("UserProfiles", 1);

request.onupgradeneeded = function() {
  const db = request.result;
  const store = db.createObjectStore("User", {keyPath: "id"});
  const index = store.createIndex("NameIdx", ["name", "age"]);
};

request.onsuccess = function() {
  const db = request.result;
  const tx = db.transaction("User", "readwrite");
  const store = tx.objectStore("User");
  const index = store.index("NameIdx");
  store.put({id: 1234, name: "Steve", age: 32});
  store.put({id: 1234, name: "Steve", age: 34});

  const getUser = store.get(1234);
  getUser.onsuccess = function() {
    console.log(getUser.result.name); // => "Steve"
  };

  tx.oncomplete = function() {
    db.close();
  };
}