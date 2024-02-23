const lista = ['come@gmail.com', 'quando@gmail.com', 'fuori@gmail.com', 'piove@gmail.com'];
console.log(lista);

let email = prompt('Inserisci la tua email');
let elementiLista = lista.length;

for (let i = 0; i <= lista.length; i++){
  if(lista[i] === email){
    messaggio = 'Sei in lista!';
    console.log(messaggio);
    document.getElementById('in-out').innerHTML = messaggio;
  }else{
    messaggio = 'Non sei in lista!';
    console.log(messaggio);
    document.getElementById('in-out').innerHTML = messaggio;
  }
}