const lyrics = [
  {
    text: "I've been on the road since I was sixteen",
    time: 0.1,
    duration: 3.4,
    side: "left"
  },

  {
    text: "they don't really notice how I see things",
    time: 3.5,
    duration: 3.6,
    side: "right"
  },

  {
    text: "these girls they come and go between my bedsheets",
    time: 7,
    duration: 3.5,
    side: "left"
  },

  {
    text: "and I've been doing blue and causing big scenes, yeah",
    time: 11,
    duration: 3.8,
    side: "right"
  },

  {
    text: "pull up and I'm higher than the big trees, yeah",
    time: 14.6,
    duration: 3.8,
    side: "left"
  },

  {
    text: "she don't really like it but she needs me, yeah",
    time: 18,
    duration: 4.5,
    side: "right"
  },

  {
    text: "she saying she don't really miss me",
    time: 22,
    duration: 3.5,
    side: "left"
  },

  {
    text: "but fuck it, now I'm faded after all things, yeah",
    time: 25,
    duration: 4.5,
    side: "right"
  }
];

const lyricElement = document.getElementById("lyrics");
const song = document.getElementById("song");

let current = -1;

song.addEventListener("timeupdate", () => {

  const time = song.currentTime;

  lyrics.forEach((line, index) => {

    if(
      time >= line.time &&
      time <= line.time + line.duration
    ){

      if(current !== index){

        current = index;

        lyricElement.innerHTML = line.text;

        lyricElement.className = "";

        lyricElement.classList.add(line.side);

        lyricElement.style.opacity = "1";

        // fade out
        setTimeout(() => {
          lyricElement.style.opacity = "0";
        }, (line.duration - 1) * 1000);
      }
    }
  });
});

song.addEventListener("timeupdate", () => {

  // reset ketika lagu balik ke awal
  if(song.currentTime < 0.2){
    current = -1;
  }

});