let card = document.querySelector('.phone');
let moveobj = document.querySelector('.home');

moveobj.addEventListener('mousemove', function(e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 5;
  card.style.transform = `rotateY(${-(xAxis/2)}deg) rotateX(${yAxis/2}deg)`;
});



const counters = document.querySelectorAll('.count');
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

counters.forEach(function(counter){
    animate(counter,0,counter.getAttribute('data'),5000);
});
