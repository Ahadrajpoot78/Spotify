console.log("Welcom to Spotify")
//Initialize the Variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from (document.getElementsByClassName('songItem'));

let song =[
    {songName:"Salam-e-Ishq",filePath:"./1.mp3",coverPath:"cover/1.jpg"},
    {songName:"dua",filePath:"./2.mp3",coverPath:"cover/2.jpg"},
    {songName:"payer",filePath:"./3.mp3",coverPath:"cover/3.jpg"},
    {songName:"tum he ho",filePath:"./4.mp3",coverPath:"cover/4.jpg"},
    {songName:"bawafa",filePath:"./5.mp3",coverPath:"cover/5.jpg"},
    {songName:"iove",filePath:"./6.mp3",coverPath:"cover/6.jpg"},
    {songName:"blue eyes",filePath:"./7.mp3",coverPath:"cover/7.jpg"},
    {songName:"bye bye",filePath:"./8.mp3",coverPath:"cover/8.jpg"},
    {songName:"dil da",filePath:"./9.mp3",coverPath:"cover/9.jpg"},
    {songName:"m,ohabat",filePath:"./10.mp3",coverPath:"cover/10.jpg"},
]
songItem.forEach((element,i)=>{

    element.getElementsByClassName('songName')[0].innerText = song[i].songName
})


//audioElement.play();
// Handle play
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        
    }
})

//Listen to Event
audioElement.addEventListener('timeupdate' , () =>{
// Update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
myProgressBar.value =progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value *audioElement.duration/100;
})
const makeAllPlays =()=>{
      Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-pause-circle');
        element.classList.remove('fa-play-circle');
    })

}
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`./${songIndex +1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa.pause.circle');
    })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src =`./${songIndex +1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa.pause.circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src =`./${songIndex +1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa.pause.circle');
})