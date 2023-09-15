const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []



itens.forEach((elemento) => {
    criaElementos(elemento)
})


form.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find(elemento => elemento.nome === nome.value)
       
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
   }

   if (existe) {
    itemAtual.id = existe.id

        atualizaElemento(itemAtual)

   } else {
        itemAtual.id = itens.length

        criaElementos(itemAtual)

        itens.push(itemAtual)
   }


   localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
    
} )

function criaElementos(item){

   const novoItem = document.createElement("li")
   novoItem.classList.add("item")

   const numeroItem = document.createElement("strong")
   numeroItem.innerHTML = item.quantidade
   numeroItem.dataset.id = item.id
   novoItem.appendChild(numeroItem)

   novoItem.innerHTML += item.nome

   lista.appendChild(novoItem)
   
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHtml = item.quantidade
}

// localStorage só permite armazenar string, então usamos o metodo JSON.stringify para converter o objeto em string.