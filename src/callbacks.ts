function callAfter1Second(cb: () => void, timer: number) {
  setTimeout(cb, timer);
}

callAfter1Second(function () {
  console.log("Hit after a sec.");
}, 1000);
