const songs = [
    {
        name : 'The-Night-We-Met',
        songname : 'The-Night-We-Met',
        artist : 'Lord Huron Phoebe Bridgers'
    },
    {
        name : 'Jaise Mera Tu',
        songname : 'Jaise Mera Tu',
        artist : 'Arijit Singh'
    },
    {
        name : 'Calm Down',
        songname : 'Calm Down',
        artist : 'Selena Gomez Rema'
    },
    {
        name : 'Uff Teri Ada',
        songname : 'Uff Teri Ada',
        artist : 'Shankar Mahadevan'
    },
    {
        name : 'Love-Me-Like-You-Do',
        songname : 'Love Me Like You Do',
        artist : 'Ellie Goulding'
    }
]
const image = document.querySelector('img');
const title = document.getElementById("title");
const author = document.getElementById("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("previous");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("progress-container");
const progress = document.querySelector(".progress");
const currentTimeEl = document.getElementById("currenttime")
const durationEl = document.getElementById("duration")
let currentItem = 0;

let isPlaying = false;

function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'pause');
    music.play();
}
function pauseSong(){
    isPlaying = false;
    playBtn.setAttribute('title','play');
    playBtn.classList.replace('fa-pause', 'fa-play');
    music.pause();
}
playBtn.addEventListener('click',() => (isPlaying ? pauseSong() : playSong()));

function loadSong(){
    let muzic = songs[currentItem];
    title.textContent = muzic.songname;
    author.textContent = muzic.artist;
    music.src = `music/${muzic.name}.mp3`;
    image.src = `img/${muzic.name}.jpg`;
}
loadSong(songs[currentItem])
nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>songs.length-1){
        currentItem = 0;
    }
    loadSong();
    playSong();
})
prevBtn.addEventListener('click',function nextSong(){
    currentItem--;
    if(currentItem < 0){
        currentItem = songs.length - 1;
    }
    loadSong();
    playSong();
})
function updateProgressBar(e){
    if(isPlaying){
        const{duration, currentTime} = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if(durationSeconds < 10){
            durationSeconds = `0${durationSeconds}`;
        }
        if(durationSeconds){
            durationEl.textContent = `${durationMinutes} : ${durationSeconds}`;
        }
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if(currentSeconds < 10){
            currentSeconds = `0${currentSeconds}`;
        }
        currentTimeEl.textContent = `${currentMinutes} : ${currentSeconds}`;
    }
}

function setProgressBar(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const{duration} = music;
    music.currentTime = (clickX / width) * duration;
}
progressBar.addEventListener('click',setProgressBar)
music.addEventListener('timeupdate',updateProgressBar)