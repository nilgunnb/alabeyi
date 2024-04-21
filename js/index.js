let sun = document.getElementById("sun");
sun.onclick = function(){
    sun.classList.toggle("night");
    document.body.classList.toggle("dark-theme");
}

let menu = document.querySelector('#menu');
let sidenav = document.querySelector("#sidenavigation");
menu.onclick = function() {
    if(this.className === 'fa-solid fa-xmark'){
        this.className = 'fa-solid fa-bars';
        sidenav.style.width = '0';
    }
    else{
        this.className ='fa-solid fa-xmark';
        sidenav.style.width = '100%';
    }

}
