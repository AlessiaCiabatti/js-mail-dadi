const lista = ['come@gmail.com', 'quando@gmail.com', 'fuori@gmail.com', 'piove@gmail.com'];
console.log(lista);

let email = prompt('Inserisci la tua email');

let trovato = false;

for (let i = 0; i <= lista.length; i++){
  if(lista[i] === email){
   trovato = true;
   console.log('mailUguale');
  }else{
    console.log('diversa');
  }
  console.log(trovato);
  
}

if(trovato == true){
  messaggio = 'Sei in lista!';
  document.getElementById('in-out').innerHTML = messaggio;
}else{
  messaggio = 'Non sei in lista!';
  document.getElementById('in-out').innerHTML = messaggio;
}




const numeroGiocatore = Math.ceil(Math.random() * 6);
console.log(numeroGiocatore);

const numeroPc = Math.ceil(Math.random() * 6);
console.log(numeroPc);

let risultato = '';

if(numeroGiocatore < numeroPc){
  risultato = 'Hai perso!';
}else{
  risultato = 'Hai vinto!';
}

document.getElementById('win-lose').innerHTML = `
  Il computer ha giocato ${numeroPc}, tu hai giocato ${numeroGiocatore} <br>
  ${risultato}
  `;


