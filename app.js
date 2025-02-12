//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let campoAmigo = document.querySelector("#amigo").value ;
    if (campoAmigo == "") {
        alert("Insira um nome de usuario valido");
    } else {
        amigos.push(campoAmigo);
        //console.log(amigos);
        document.querySelector("#amigo").value = ""; 
        atualizarListaAmigos(); 
    }

    function atualizarListaAmigos() {
        let lista = document.querySelector("#listaAmigos");
        lista.innerHTML = ""; //Limpa a lista antes de adicionar o novo nome

        for (let i = 0; i < amigos.length ; i++){  
            let novoNome = document.createElement("li");
            novoNome.innerText = amigos[i];
            lista.appendChild(novoNome); 
            //console.log(novoNome);
        }
           
    } 

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("A lista esta vazia! Adicione amigos antes de sortear.");
        return;
    } 

    let indiceSorteado = getRandomInt(0, amigos.length); // Obtém um índice aleatório
    let amigoSorteado = amigos[indiceSorteado]; // Pega o nome do amigo sorteado

    alert(`O amigo sorteado foi ${amigoSorteado}`);

    amigos.splice(indiceSorteado, 1); // Remove o amigo sorteado da lista
    //atualizarListaAmigos(); // Atualiza a lista na interface
    console.log(amigos);
}