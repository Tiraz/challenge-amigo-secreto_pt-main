listaAmigos = [];


function adicionarAmigo(){
    let amigoDigitado = document.getElementById("amigo").value;//pega o nome digitado 
    if(amigoDigitado == ""){//Compara se o valor coletado está vazio 
        alert("Digite um nome valido!");
    }else{
        listaAmigos.push(amigoDigitado);//Coloca o nnome digitado na lista
        //let lista = document.getElementById("listaAmigos"); // pega o elemento atravez do ID e atribui a variavel lista
        //let nome = document.createElement("li"); // cria um elemento da lista de atribui a variavel nome
       //nome.textContent = amigo;// coloca o nome deigitado no elemento criado
        //lista.appendChild(nome); // Define o elemento criado como filho do "ul" 
        imprimirNomes("listaAmigos",amigoDigitado);
        let limpar = document.querySelector("input");// atribui o campo de input a variavel limpar
        limpar.value = ""; // limpa o campo de input
    }
}


function gerarIndiceAleatorio(numeroMax) {
    let indice = parseInt(Math.random() * numeroMax); // gera um numero aleatorio baseado no tamanho da lista e atribui avariavel indice
    return indice;
}

function sortearAmigo() {
    let num = gerarIndiceAleatorio(listaAmigos.length);
    //let imprimir = getElementById("resultado");
    //imprimir.
    imprimirNomes("resultado",listaAmigos[num]);
    alert(`O amigo secreto é ${listaAmigos[num]}`);
}

function imprimirNomes(tag, amigo) {
    let lista = document.getElementById(tag); // pega o elemento atravez do ID e atribui a variavel lista
    let nome = document.createElement("li"); // cria um elemento da lista de atribui a variavel nome
    nome.textContent = amigo;// coloca o nome deigitado no elemento criado
    lista.appendChild(nome); // Define o elemento criado como filho do "ul" 
}