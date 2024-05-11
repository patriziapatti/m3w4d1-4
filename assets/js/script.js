window.addEventListener('scroll', addSection) // aggiungo eventlistener sull'evento scroll 

function addSection(){ //creo una funzione per trovare l'altezza della finestra
  let altezzaVisibile = window.innerHeight // altezza visibile della finestra (la dimensione verticale della finestra)
  //console.log(altezzaVisibile)
  let sections = document.querySelectorAll(".movies") //recupero tutte le mie sezioni
  for(let s of sections){ //le ciclo una per una
  //console.log(s)
    let dimensioneSec = s.getBoundingClientRect();//recupeto le dimensioni di ogni sezione
    if (dimensioneSec.top > altezzaVisibile){ //se il top della sezione è nella finestra
     s.classList.add("hidden") //aggiungo la classe .hidden
    }else{
      s.classList.remove("hidden") //altrimenti la rimuovo
    }
  } 
}
