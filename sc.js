let card= document.getElementById("card");

let chatacter={};
let origin={};
const aleatorio_entre=(min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
}

const get_data=(id) =>{
    fetch("https://rickandmortyapi.com/api/character/"+ id)
    .then((d) => d.json())
    .then((data) =>  {
        chatacter=data;
        get_data_origin(chatacter.origin.url);
    })
    .catch((err) =>{
            console.log(err);
    });
};
const get_data_origin =(url) => {
    fetch(url)
    .then((d) => d.json())
    .then((data)=>{
        origin=data;
        console.log(origin);
        print_data();
    })
    .catch((err) =>{
        console.log(err);
    });
};
const print_data = () =>{
    card.innerHTML="";
    card.insertAdjacentHTML(
        "beforeend",
        `
        <div class="image-container">
        <img src="${chatacter.image}" alt="" />
        </div>
        <div class="data-container">
        <h1> ${chatacter.name}</h1>
        <div> Especie: ${chatacter.species}</div>
        <div> Estado:${chatacter.status}</div>
        <div class="button-container">
        <button> Ver personaje aleatorio</button>
        </div>
        </div>
    `
    
    );
    let rand_btn=document.getElementById("random-btn");
    rand_btn.addEventListener("click" ,() => {
        get_data(3);
    });
};
get_data(1);