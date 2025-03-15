// We have MediaQueryList API:
const mediaQueryList = window.matchMedia(
  "(max-width: 800px)"
);

const handle = (mql) => {
  if (mql.matches) {
    console.log("width <= 800px");
  } else {
    console.log("width > 800px");
  }
};

mediaQueryList.addEventListener("change", handle);
handle(mediaQueryList);

// We create a media query list object matching our criteria. After that we can
// attach a listener that will tell us when our criteria are met.

// With this API we can make truly reponsive applications. Not only on how
// the things look like but also how they work.