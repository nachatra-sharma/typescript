enum Key {
  up,
  down,
  left,
  right,
}

function doSomething(pressed: Key) {
  if (pressed === Key.down) {
    console.log("up");
  }
}

doSomething(Key.up);
