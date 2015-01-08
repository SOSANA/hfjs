// be the browser test drive with "this
var song = {
  name: "Walk This Way",
  artist: "Run-D.M.C",
  minutes: 4,
  seconds: 3,
  genre: "80s",
  playing: false,
  
  play: function() {
    if (!this.playing) {
      this.playing = true;
      console.log("Playing " + this.name + " by " + this.artist)
    }
  },
  
  pause: function() {
    if(this.playing) {
      this.playing = false;
      console.log("Paused " + this.name + " by " + this.artist)
    }
  }
};

song.play();
song.pause();


//Object Magnets Exercise 1
/*var dog = {
  name: "Fido",
  weight: 20.2,
  age: 4,
  breed: "mixed",
  activity: "Fetch balls"
};

var bark;
if ( dog.weight > 20) {
  bark = "WOOF WOOF";
} else {
  bark = "woof woof";
}

var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);
*/

// cadi exercise
/*var cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892
};

console.log(cadi);
*/