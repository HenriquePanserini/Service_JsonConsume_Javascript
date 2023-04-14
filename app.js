'use strict';

let root = document.querySelector('#root')

const url = async function(url) {
     await fetch(url).then(function(response){
         response.json().then(function(dados){
              dados.user.map((user) => {
                 root.innerHTML += `<li>${user.name}</li>`
              })
         });
     })
}

url("./dados.json");

