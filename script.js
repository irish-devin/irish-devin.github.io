// Terminal animation
const text = [
"> Initializing security profile...",
"> Loading penetration testing credentials...",
"> Network Defense Mode: ACTIVE",
"> Threat Detection: ENABLED",
"> Status: Available for IT & Cybersecurity Roles"
];

let i=0,j=0,currentLine="";
const terminal=document.getElementById("terminal");

function type(){
if(i<text.length){
if(j<text[i].length){
currentLine+=text[i].charAt(j);
terminal.innerHTML=currentLine+'<span class="cursor"></span>';
j++;setTimeout(type,25);
}else{
currentLine+="<br>";
terminal.innerHTML=currentLine+'<span class="cursor"></span>';
i++;j=0;setTimeout(type,400);
}}
}
if(terminal){ type(); }

// Scroll reveal
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("visible");
}
});
});
sections.forEach(section => observer.observe(section));

// Dark / Light toggle
const toggle = document.getElementById("themeToggle");
if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light-mode");
}
toggle.addEventListener("click",()=>{
document.body.classList.toggle("light-mode");
localStorage.setItem("theme",
document.body.classList.contains("light-mode")?"light":"dark");
});
