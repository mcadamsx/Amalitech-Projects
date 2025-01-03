const background = document.getElementById("container");
const toggle = document.getElementById("toggle");
const cards = document.querySelectorAll("#card");
const header = document.querySelector("header");
const title = document.getElementById("title");
const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");

textInput.addEventListener("input", () =>{
    textOutput.innerHTML = textInput.value;
})

toggle.addEventListener('click', ()=>{
    background.classList.toggle('open');
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    if(background.classList.contains('open')){
        background.style.backgroundColor = "hsl(232, 19%, 15%)";
        card.style.backgroundColor = "hsl(228, 28%, 20%)";
        card.style.color = "hsl(225, 100%, 98%)";
        header.style.color = "hsl(0, 0%, 100%)"
        title.style.color = "hsl(0, 0%, 100%)";    
            
    }else{
        background.style.backgroundColor = "hsl(0, 0%, 100%)";
        card.style.backgroundColor =    "hsl(225, 100%, 98%)";
        card.style.color = " hsl(230, 17%, 14%)";
        header.style.color = "hsl(230, 17%, 14%)";
        title.style.color = "hsl(230, 17%, 14%)";  
    }
}
}); 