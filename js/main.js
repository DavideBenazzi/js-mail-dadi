/*     MAIL
 * Chiedere email all'utente
 * Controllare se presente in una lista
 * Stampa messaggio di avvenuta verifica
*/
//LISTA CLASSE 19
var lista = ['alberto.abate87@gmail.com' , 'ivanalva8998@gmail.com' , 'francesco.duff@gmail.com' , 'maxi.ambrogio@gmail.com' , 'benazzi.davide@gmail.com' , 'cristianacaruana1@gmail.com' , 'fracassani@gmail.com' , 'batmanmotopattini@gmail.com' , 'simona.cinti2@gmail.com' , 'alessio.cirillo.1995@gmail.com' , 'giuseppecolucciwork@gmail.com' , 'david.cortesi.097@gmail.com' , 'delfatti.ivan@gmail.com' , 'adf.palermo@gmail.com' , 'matteofruianu@gmail.com' , 'galantifrancesco042@gmail.com' , 'ilaria.galliano7@gmail.com' , 'cristian.gardosi97@gmail.com' , 'ga6t00n@gmail.com' , 'giulia.guerrazzi1008@gmail.com' , 'nginvernizzi1@gmail.com' , 'marrazzo.pietroalfonso@gmail.com' , 'francescomartinmail@gmail.com' , 'fabio.mezzina.09@gmail.com' , 'pg.minetti@gmail.com' , 'paiolaosama@gmail.com' , 'cherubina.pantano@gmail.com' , 'antonia.parini@gmail.com' , 'andre98377@gmail.com' , 'matteorascioni@gmail.com' , 'davidesbalzer@gmail.com' , 'stefanoserafini7@gmail.com' , 'msibiriu@gmail.com' , 's.ros.luis@gmail.com'];

//Input email
var email = prompt('Inserisci la tua E-Mail').toLowerCase().trim();

//Variabile di conferma presenza in lista
var access = false;

//Ciclo per confronto con lista
for (var i = 0; i < lista.length; i++) {
  if (email == ( lista[i]) ) {
    access = true;
  }
}

//Messaggio di verifica
if (access) {
  alert('Accesso verificato , puoi proseguire.');
}
else {
  alert('Accesso negato , E-Mail non presente in lista d\'accesso');
}

/*     DADI
 * Genera un numero da 1 a 6 sia per il giocatore sia per il computer
 * Stabilire vincitore in base al numero piu' alto
 * Stampa messaggio del risultato
 */
alert('Giochiamo a dadi.')

//Gioco Dadi ciclo for
for (var c = 0; c < 1; c++) {

  //Dado per il computer
  var computer = Math.floor( Math.random() * 6 ) + 1;

  //Dado per l'utente
  var utente = Math.floor( Math.random() * 6 ) + 1;

  //Decisione del vincitore e stampa Messaggio
  if (computer > utente) {
    alert('Ho vinto io, ho ottenuto un : ' + computer + ' mentre tu solo un : ' + utente);
  }
  else if (computer < utente) {
    alert('Congratulazioni! Hai vinto tu con un : ' + utente + ' mentre io solo un : ' + computer);
  }
  else {
    alert('Pareggio! Sono usciti per due volte : ' + utente);
  }
  //Vuoi continuare a giocare?
  var continua = prompt('Vuoi giocare ancora ? Scrivi si oppure no');
  if (continua === 'si') {
    c--;
  }
  else {
    alert('Peccato, ciao e buona giornata!')
  }
}
