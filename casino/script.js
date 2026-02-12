function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



let guthaben = 100;   
const einsatz = 10;       

const guthabenSpan = document.getElementById("guthaben");
const einsatzSpan = document.getElementById("einsatz");

guthabenSpan.textContent = "   " + guthaben;
einsatzSpan.textContent = einsatz;

let letztekombi = null;
let kombi = null;
  





const symbole = ['🍒','🍋','🍇','🔔','💎','🍊','🍉','👻'];
const slots = document.querySelectorAll('.symbole')

function randomgenerieren(length) {  
  let strip = '';
  for(let i = 0; i < length; i++) {  
    strip += symbole[Math.floor(Math.random() * symbole.length)];  
  }
  return strip;
}
function luckyzahleneinsetzen() {
  let kombi = dreiemojis();

  const div1 = document.getElementById("links");
    let random1 = randomgenerieren(10);
    div1.textContent = random1 + kombi[0] + random1;

  const div2 = document.getElementById("mitte");
    let random2 = randomgenerieren(10);
    div2.textContent = random2 + kombi[1] + random2;

  const div3 = document.getElementById("rechts");
    let random3 = randomgenerieren(10);
    div3.textContent = random3 + kombi[2] + random3;


  slots.forEach(sslot => {
    sslot.style.animation = "spin 1s linear infinite";
    sslot.style.animationPlayState = "paused"; 
  });
  console.log(kombi)
  letztekombi = kombi;
  return kombi;
}
luckyzahleneinsetzen();
letztekombi = kombi;


function dreiemojis() {
  const winning = ['🍒','🍋','🍇','💎','🍉','👻'];

  const slot1 = winning[Math.floor(Math.random() * winning.length)];
  const slot2 = winning[Math.floor(Math.random() * winning.length)];
  const slot3 = winning[Math.floor(Math.random() * winning.length)];

  return [slot1, slot2, slot3];
}



function dreh() {
  slots.forEach(slot => {
    slot.style.animationPlayState = "running";
  });
}
function outro() {
  slots.forEach(slot => {
    slot.style.animation = "stoop 1.3s ease-out forwards";
  });
}
function resetnachoutro() { //weil animationFillMode forwards und dann kann man nd neu drehen
  slots.forEach(slot => {
    slot.style.animation = "none";
    void slot.offsetWidth; //reflow 

    slot.style.animation = "spin 1s linear infinite";
    slot.style.animationPlayState = "paused";
  });
}


// HIER IST DIE HAUPTFUNKTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

async function finale() {

  if (guthaben < einsatz) {
    alert("du hast zu wenig Geld");
    return;
  }
  guthaben -= einsatz;
  zeigmoney(-einsatz) //FÜR DIE ANIMAITON
  guthabenSpan.textContent = guthaben;


  luckyzahleneinsetzen();
  resetnachoutro()
  dreh()
  await sleep(2000);
  outro();
  await sleep(1000)
  ergebnisgucken();
}

// HIER IST DIE HAUPTFUNKTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





// ERGEBNIS GUCKEN OB PASST

function ergebnisgucken() {

  const [links, mitte, rechts] = letztekombi;
  let multipilkator = 0;
  let nachricht = "";



  //3 GLEICHE EMOJIS JACKPOT
  if (links == mitte && mitte == rechts) {
    multipilkator = 10;
    nachricht = "JACKPOT   dein einsatz 10fach"
  }
  
  //2 GLEICHE EMOJIS
  if (links === mitte || links === rechts || mitte === rechts) {
    multipilkator = 0.5;
    nachricht = "fast    dein einsatz 2fach"
  }

  else {nachricht = "kein gewinn"}

  let gewinn = multipilkator * einsatz;


  guthaben += gewinn;
  if (gewinn > 0) { zeigmoney(gewinn);}
  guthabenSpan.textContent = guthaben;

}





//SCHWEBEANIMATION GELD
async function zeigmoney(amount) {
  const container = document.getElementById("infos")

  const div = document.createElement("div");
  div.classList.add("geld-schweben");

  if (amount < 0) {
    div.classList.add("geld-weg");
    div.textContent = amount + "€";
  }
  else {
    div.classList.add("geld-dazu");
    div.textContent = "+" + amount + "€"
  }

  container.appendChild(div);
  await sleep(1000);
  div.remove();
}
