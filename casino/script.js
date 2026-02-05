function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




const symbole = ['🍒','🍋','⭐','🍇','🔔','💎','🍊','🍉','7️⃣','👻'];
const slots = document.querySelectorAll('.symbole')


function randomgenerieren(length) {  
  let strip = '';
  for(let i = 0; i < length; i++) {  
    strip += symbole[Math.floor(Math.random() * symbole.length)];  
  }
  return strip;
}
document.querySelectorAll(".lane").forEach(lane => {
  const symboldiv = lane.querySelector(".symbole");  
  const nummer = String(randomgenerieren(10))
  //symboldiv.textContent = "sassa";
  symboldiv.textContent = nummer + nummer + nummer;
});


function dreiemojis() {
  const slot1 = symbole[Math.floor(Math.random() * symbole.length)];
  const slot2 = symbole[Math.floor(Math.random() * symbole.length)];
  const slot3 = symbole[Math.floor(Math.random() * symbole.length)];

  msg = `${slot1} ${slot2} ${slot3}`;
  //return msg;
  return [slot1, slot2, slot3];
}


function luckyzahleneinsetzen() {
  let kombi = dreiemojis();
  let num = String(randomgenerieren(10));
  
  const div1 = document.getElementById("links");
    div1.textContent =  num + kombi[0] + num;

  const div2 = document.getElementById("mitte");
    div2.textContent = num + kombi[1] + num;

  const div3 = document.getElementById("rechts");
    div3.textContent = num + kombi[2] + num;


    document.querySelectorAll(".symbole").animationDuration = "spin 4s linear infinite";


  console.log(kombi)
}


function upwards() {
  slots.forEach(slot => {
    slot.style.animationDirection = "reverse";
    slot.style.animationPlayState = "running";
  } )
}

function dreh() {
  slots.forEach(slot => {
    slot.style.animationPlayState = "running";
  });
}
async function stoppp() {
  slots[0].style.animationPlayState = "paused";
  //await sleep(600)
  slots[1].style.animationPlayState = "paused";
  //await sleep(600)
  slots[2].style.animationPlayState = "paused";
}


async function sapin() {
  stoppp();
  dreh();
  await sleep(2400)
  luckyzahleneinsetzen();
  await sleep(2400)
  stoppp();
}
