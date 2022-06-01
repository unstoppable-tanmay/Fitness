const switcher = document.querySelector('.switcher');

// document.querySelector('.loginpage').style.display = 'none';

var issignin = 1;
var issignup = 0;

const signinopen = ()=>{
    if(issignin)return;
    else{
        issignin = 1;
        issignup = 0;
        switcher.style.transform = 'translateX(0rem)'
    }
};
const signupopen = ()=>{
    if(issignup)return;
    else{
        issignin = 0;
        issignup = 1;
        switcher.style.transform = 'translateX(-35rem)'
    }
};

const loginclose = () =>{
    document.querySelector('.loginpage').style.display = 'none';
}
const loginopen = () =>{
    document.querySelector('.loginpage').style.display = 'flex';
}