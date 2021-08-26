let output=document.getElementById('output')
let container=document.getElementById('container')
let body=document.getElementById('body')
let hour=new Date().getHours()
let date=new Date().getDate()
let month=new Date().getMonth()
let year=new Date().getFullYear()
let min=new Date().getMinutes()
let sec=new Date().getSeconds()
let b=new Date().getDay()
if(hour>=13){
    hour=hour-12
}
setTimeout(() => {
    location.reload()
}, sec*1000-sec);
if(b==0){
    b="Sunday"
}
else if(b==1){
    b="Monday"
}
else if(b==2){
    b="Tuesday"
}
else if(b==3){
    b="Wednesday"
}
else if(b==4){
    b="Thursday"
}
else if(b==5){
    b="Friday"
}
else{
    b="Saturday"
}
let ran1=Math.floor(Math.random()*4)
if(ran1==1){
    body.classList.add("container1")
}
else if(ran1==2){
    body.classList.add("container2")
}
else if(ran1==3){
    body.classList.add("container3")
}
else{
    body.classList.add('container4')
}
output.innerText=`${b} ${hour}:${min}  ${date}/${month+1}/${year}`
