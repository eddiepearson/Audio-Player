const songTitle = document.querySelector('.song-title');
const artistName = document.querySelector('.artist-name');
const track1 = document.querySelector('#song1');
const track2 = document.querySelector('#song2');
const track3 = document.querySelector('#song3');
const button1 = document.querySelector('#key1');

const songs = {
    song1: {
        title: 'Automation City',
        artist: 'eddiepearson',
        audio: track1,
    },

    song2: {
        title: 'Changing It',
        artist: 'eddiepearson',
        audio: track2,
    },

    song3: {
        title: 'Finding Her',
        artist: 'eddiepearson',
        audio: track3,
    },
};

button1.addEventListener('keyDown', function () {
    if (track1.paused) {
        track1.play();
        songTitle.innerHTML = songs.song1.title;
    } else
        track1.pause();
});

