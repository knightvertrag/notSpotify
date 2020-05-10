var sound1 = new Howl({
  src: [
    "./songs/The_Script_-_Six_Degrees_of_Separation_Official_Video[GrabvidtoMp3.com].mp3",
  ],
  preload: true,
  volume: 0.5,
});
var sound2 = new Howl({
  src: [
    "./songs/The_Script_-_If_You_Could_See_Me_Now_Official_Video[GrabvidtoMp3.com].mp3",
  ],
  preload: true,
  volume: 0.5,
});
var sound3 = new Howl({
  src: ["./songs/OneRepublic - Counting Stars.mp3"],
  preload: true,
  volume: 0.5,
});

var list = [
  "./songs/The_Script_-_Six_Degrees_of_Separation_Official_Video[GrabvidtoMp3.com].mp3",
  "./songs/The_Script_-_If_You_Could_See_Me_Now_Official_Video[GrabvidtoMp3.com].mp3",
  "./songs/OneRepublic - Counting Stars.mp3",
];
function current_song(current) {
  return current;
}
var z = sound1;

function Play(song) {
  song.play();
  console.log(z);
}
function Stop() {
  z.stop();
}

function Pause() {
  z.pause();
}
var vol = 0.5;
function autoplay(i, list) {
  var sound = new Howl({
    src: [list[i]],
    preload: true,
    volume: 0.5,
    onend: function () {
      if (i + 1 == list.length) {
        Stop();
      } else {
        autoplay(i + 1, list);
      }
    },
  });
  z = sound;
  sound.play();
}

function volinc(sound) {
  vol = vol + 0.1;
  console.log(vol);
  // vol = sound.volume + 0.1;
  sound.volume(vol);
}
function voldec(sound) {
  vol = vol - 0.1;
  sound.volume(vol);
}

function input(path) {
  var linkk = path;
  console.log(linkk);
  var input_sound = new Howl({
    src: linkk,
    preload: true,
    volume: 0.5,
  });
  console.log(path);
  console.log(input_sound);
  return input_sound;
}

var r;

function text() {
  var x = document.getElementById("search").value;
  console.log(x);
  return x;
}

var wave = new SiriWave({
  container: waveform,
  width: window.innerWidth,
  height: window.innerHeight * 0.3,
  cover: true,
  speed: 0.03,
  amplitude: 0.7,
  frequency: 2,
});
wave.start();
