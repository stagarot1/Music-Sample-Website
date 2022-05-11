const music = new Audio('Music/Good_News.mp3');

//Array of songs
const songs =[{
    id: '1',
    songName:'Good News<br><div class="subtitle">Mac Miller</div>',
    title: "Good_News",
    album: "Circles",
    artist: "Mac Miller",
    releaseDate: "2020",
    price: "0",
    poster: "Media/Circles.png"
},{
    id: '2',
    songName:'Hand Me Downs<br><div class="subtitle">Mac Miller</div>',
    title: "Hand_Me_Downs",
    album: "Circles",
    artist: "Mac Miller",
    releaseDate: "2020",
    price: "0",
    poster: "Media/Circles.png"
},{
    id: '3',
    songName:'<Once a Day<br><div class="subtitle">Mac Miller</div>',
    title: "Once_a_Day",
    album: "Circles",
    artist: "Mac Miller",
    releaseDate: "2020",
    price: "0",
    poster: "Media/Circles.png"
},{
    id: '4',
    songName:'Self Care<br><div class="subtitle">Mac Miller</div>',
    title: "Self_Care",
    album: "Swimming",
    artist: "Mac Miller",
    releaseDate: "2018",
    price: "0",
    poster: "Media/Swimming.png"
},{
    id: '5',
    songName:'2009<br><div class="subtitle">Mac Miller</div>',
    title: "2009",
    album: "Swimming",
    artist: "Mac Miller",
    releaseDate: "2018",
    price: "0",
    poster: "Media/Swimming.png"
}
 
]
Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;

})
let wave = document.getElementsByClassName('wave')[0];
let masterPlay = document.getElementById('masterPlay');
masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <=0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    }else{
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');

    }
}
)

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
        element.style.background = "rgb(105,105,170,0)";
        })
}
const makeAllBackgrounds = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
        })
}
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = 'Music/${title}.mp3';
        poster_master_play.src = 'img/${album}.png';
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id ==index;
        })
        song_title.forEach(ele => {
            let {songName} = ele;
            title.innerHTML = songName
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',() =>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))['${index-1}'].style.background ="rgb(105,105,170,.1)";
    })
}
)
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');

music.addEventListenes('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10){
        sec = '0${sec}';
    }
    currentEnd.innerText = '${min}:${sec}';

    let min1 = Math.floor(music_currr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10){
        sec1 = '0${sec1}';
    }
    currentStart.innerText = '${min1}:${sec1}';
})