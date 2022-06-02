const home = document.querySelector('.absposhome');
const activity = document.querySelector('.absposactivity');

const width = window.innerWidth;
const height = window.innerHeight;

// const iconnum = parseInt(window.innerWidth<800?(window.innerWidth/100)*2:(window.innerWidth/100)*1.3);
const iconnum = 27;
// console.log(iconnum);
const icons = [  '<i class="fa-solid fa-bicycle"></i>'    
                ,'<i class="fa-solid fa-dumbbell"></i>'
                ,'<i class="fa-solid fa-watch-fitness"></i>'
                ,'<i class="fa-solid fa-person-running"></i>'
                ,'<i class="fa-solid fa-wave-pulse"></i>'
                ,'<i class="fa-solid fa-person-biking"></i>'
                ,'<i class="fa-solid fa-medal"></i>'
                ,'<i class="fa-solid fa-futbol"></i>'
                ,'<i class="fa-solid fa-person-running"></i>'
                ,'<i class="fa-solid fa-whistle"></i>'
                ,'<i class="fa-solid fa-flag-pennant"></i>'
                ,'<i class="fa-solid fa-cricket-bat-ball"></i>'
                ,'<i class="fa-solid fa-badminton"></i>'
                ,'<i class="fa-solid fa-uniform-martial-arts"></i>'
            ];


const randpos = () => {
    var min = 0;
    var maxw = window.innerWidth-50;
    var maxh = window.innerHeight-50;

    var randw = Math.random() * (maxw - min) + min;
    var randh = Math.random() * (maxh - min) + min;
    
    return [randw,randh]
}

icons.forEach((icon)=>{
    const pos = randpos();

    const color = ['#fff1','#fff2','#fff3','#fff4','#fff5','#fff6']
    var randomclr = color[Math.floor(Math.random()*color.length)];

    const rotate = [5,10,15,20,30.-30,-15,60,-5];
    var randomdeg = rotate[Math.floor(Math.random()*rotate.length)];

    home.innerHTML += `<div class="randicons" style="color:${randomclr};transform: rotateZ(${randomdeg}deg);top:${pos[1]}px;left:${pos[0]}px">${icon}</div>`;
    activity.innerHTML += `<div class="randicons" style="color:${randomclr};transform: rotateZ(${randomdeg}deg);z-index:1;top:${pos[1]}px;left:${pos[0]}px">${icon}</div>`;
})