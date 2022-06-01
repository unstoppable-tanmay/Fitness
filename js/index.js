window.onload = ()=>{
    document.querySelector('.root').style.display="block";
    document.querySelector('.loader').style.display="none";
    // document.querySelector('.loader1').style.display="none";
}


// Counter
const counters1 = document.querySelectorAll('.count1');
function animate(obj, initVal=0, lastVal=obj.getAttribute('data'), duration=3000) {
    let startTime = null;
    let currentTime = Date.now();
    const step = (currentTime ) => {
        if (!startTime) {
              startTime = currentTime ;
        }
        const progress = Math.min((currentTime  - startTime) / duration, 1);
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
        if (progress < 1) {
              window.requestAnimationFrame(step);
        }
        else{
              window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };
    window.requestAnimationFrame(step);
}

// counters1.forEach(function(counter){animate(counter,0,counter.getAttribute('data'),5000);});



const countbtm = document.querySelector('.countbtm');

let observer = new IntersectionObserver(ent=>{
    ent[0].isIntersecting?counters1.forEach(function(counter){animate(counter,0,counter.getAttribute('data'),3000);}):true;
    ent[0].isIntersecting?observer.unobserve(countbtm):true;
},{});
observer.observe(countbtm);
