var character = document.getElementById("character")
var block = document.getElementById("block")

function jump() {   

   
    if (character.classList != "animate"){     
    character.classList.add("animate");
}
    setTimeout(function(){
character.classList.remove("animate");
    },450);
}
document.body.onkeypress = jump;

var checkDead = setInterval(function (){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<-205 && blockLeft>-272 && characterTop>=53){

        block.style.animation = "none";
        alert("you lose!!!")
        location.reload()
    }
},10)








