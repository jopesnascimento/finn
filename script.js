let img = document.querySelector('img')
const audio = new Audio('batiman');


function troca(){
    document.body.style.background = "black"
    document.body.style.color = "yellow"
    img.setAttribute('src', 'https://external-preview.redd.it/v9rmXPXlIRiDcdW7W2t7k34rD_AFvyeCxKV0y9ipCeU.jpg?auto=webp&s=7473138fae99f17301330be2f862d4e5e682b45a');
    document.querySelector("p").textContent = "EU SOU O BATMAN!"
    document.querySelector("h1").textContent = "OLHA JAKE!"
    audio.play()

}

img.addEventListener('click',troca)