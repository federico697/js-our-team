let staff = [{
    nome: 'marco',
    professione: 'ceo',
    immagine: 'Logo.png'
},
{
    nome: 'tommaso',
    professione: 'co-ceo',
    immagine: 'Logo.png'
},
{
    nome: 'yuri',
    professione: 'web developer',
    immagine: 'Logo.png'
},
{
    nome: 'andrea',
    professione: 'front-end',
    immagine: 'Logo.png'
},
{
    nome: 'federico',
    professione: 'back-end',
    immagine: 'Logo.png'
},
{
    nome: 'flavio',
    professione: 'javascript',
    immagine: 'Logo.png'
}
]

// stampare tutti i nomi


for( let i = 0; i < staff.length; i++ ){
// ogni giro del ciclo ho il singolo elemento
let elementoCorrente = staff[i]
console.log(elementoCorrente.nome)

document.getElementById('card').innerHTML += 
`<div class="card" style="width: 18rem;">
  <img src="./img/${elementoCorrente.immagine}" class="card-img-top immagine" alt="...">
  <div class="card-body">
    <h3 class="card-title text-center">${elementoCorrente.nome}</h3>
    <p class="card-text text-center">${elementoCorrente.professione}</p>
  </div>
</div>`
}