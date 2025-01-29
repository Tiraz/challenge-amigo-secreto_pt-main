listaAmigos = [];













function adicionarAmigo(){
    let amigo = document.getElementById("amigo").value;//pega o nome digitado 
    if(amigo == ""){//Compara se o valor coletado está vazio 
        alert("Digite um nome valido!");
    }else{
        listaAmigos.push(amigo);
        let lista = document.getElementById("listaAmigos");
        let nome = document.createElement("li");
        nome.textContent = amigo;
        lista.appendChild(nome);
        let limpar = document.querySelector("input");
        limpar.value = "";
    }
}