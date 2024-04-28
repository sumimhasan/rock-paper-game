CanPlay = false
Player= 0
function start(){
    document.querySelector(".start").remove()
    CanPlay = true
}




document.querySelector(".buttons").addEventListener("click",(e)=>{
    if(CanPlay==true){
Computer =  Math.floor(Math.random() * 3)
  id = e.target.id
  let scr = document.getElementById(id).src
  document.getElementById("pr").src = scr
  switch(id){
    case "bt1":
        Player = 0
        break
    case "bt2":
        Player =1
        break
    case "bt3":
        Player = 2
        break
  }



 
switch(Computer){
    case 0:
        document.getElementById("pl").src = document.getElementById("bt1").src
        break
    case 1:
        document.getElementById("pl").src = document.getElementById("bt2").src
        break
    case 2:
        document.getElementById("pl").src = document.getElementById("bt3").src
        break
}








    }

})