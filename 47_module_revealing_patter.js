// The revealing module pattern is the one that I use the most in my daily job.
// Back in the days when we didn't have classes, this pattern was my main tool
// for mimicking OOP.

// The idea here is to create a scope and return an API. The scope encapsulates the logic
// and, the object that we return gives access to our public interface.

// Imagine we have to write a music plater:

function Player() {
  let trackId;
  function play(id) {
    trackId = id;
    console.log(`Track #${trackId} is started`);
  }
  function stop() {
    console.log(`Track #${trackId} stopped`);
  }
  function status() {
    console.log(`Processing track #${trackId}`)
  }
  return {
    play,
    stop,
    status
  }
}
const p = Player();
p.play(4); // Track #4 is started
p.status(); // Processing track #4
p.stop(); // Track #4 stopped

// We have scoped the variable "trackId" that is hidden for the ourside world. The
// The functions play, stop, and status are our public API. It is similar to writing a
// class. The Player fucntion acts as a constructor because whenever we call it we will get
// a new instance. With its own trackId and public methods.
