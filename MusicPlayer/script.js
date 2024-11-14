const progress = document.getElementById("progress");
const playBtn = document.querySelector(".playBtn");
const audio = document.querySelector("audio")
const forwardBtn = document.querySelector(".forwardBtn");
const backwardBtn = document.querySelector(".backwardBtn")

progress.onloadedmetadata = () => {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}

function playPause() {
    if(playBtn.classList.contains("fa-pause")){
        audio.pause()
        playBtn.classList.remove("fa-pause")
        playBtn.classList.add("fa-play")
    }
    else{
        audio.play()
        playBtn.classList.add("fa-pause")
        playBtn.classList.remove("fa-play")
    }
}

// if(audio.play()){
//     setInterval(() => {
//         progress.value = audio.currentTime
//     }, 500)
// } this is another way to change the value of progress bar

audio.ontimeupdate = function() {
    progress.value = audio.currentTime
}

progress.onchange = function(){
    audio.play()
    audio.currentTime = progress.value
    playBtn.classList.remove("fa-play")
    playBtn.classList.add("fa-pause")
}

backwardBtn.addEventListener("click", () => {
    audio.play()
    audio.currentTime -= 10;
    playBtn.classList.remove("fa-play")
    playBtn.classList.add("fa-pause")
})

forwardBtn.addEventListener("click", () => {
    audio.play()
    audio.currentTime += 10
    playBtn.classList.remove("fa-play")
    playBtn.classList.add("fa-pause")
})

audio.onended = function(){
    // audio.play()
    audio.currentTime = 0
    playBtn.classList.remove("fa-pause")
    playBtn.classList.add("fa-play")
}