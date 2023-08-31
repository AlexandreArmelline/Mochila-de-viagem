const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")


form.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    criaElementos(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
} )

function criaElementos(nome, quantidade){

   // <li class="item"><strong>7</strong>Camisas</li>
   const novoItem = document.createElement('li')
   novoItem.classList.add("item")

   const numeroItem = document.createElement('strong')
   numeroItem.innerHTML = quantidade

   novoItem.appendChild(numeroItem)
   novoItem.innerHTML += nome

   lista.appendChild(novoItem)
   
}