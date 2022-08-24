let icon = document.getElementById("icon");
icon.addEventListener("click",()=>{
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon.src = "sun.png";
    }
    else{
        icon.src = "moon.png";
    }}) 
    

//map

// var map=L.map('map').setView([51.505, -0.09],13);
// L.titleLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=I8SDNtTZ4khl548o4DBz',{
//     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
// }).addTo(map);

// var marker= L.marker([51.5,-0.09]).addTo(map);

var map = L.map('map').setView([30.516905076265868, 76.66080328513229], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([30.516905076265868, 76.66080328513229]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    
function hide(){
    // console.log("working");
    var x = document.getElementById("log");
    // console.log("working");
    if(x.style.display === "none"){
        x.style.display ="block";
    }
    else{
        x.style.display="none";
    }
}

function vidStart(x){
    let a = document.getElementById("left");
    a.style.backgroundImage="none";
    let b = document.getElementById("yoru");
    b.style.display="";
}

function vidStop(x){
    let a = document.getElementById("left");
    a.style.backgroundImage="";
    let b = document.getElementById("yoru");
    b.style.display="none";
}