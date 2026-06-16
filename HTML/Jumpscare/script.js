function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
  

  await sleep(2000); // 2 Sekunden warten

  
}





document.addEventListener("mousemove",function(event){
    const x = event.clientX;
    const y = event.clientY;
    
    //console.log(x + "   " + y)

    let buttonH = document.getElementById("h");
    buttonH.addEventListener("mouseenter", HORROR);
    buttonH.addEventListener("click", HORROR);
    let card = document.getElementById("card");
    

    async function HORROR(){
        let headingID = document.getElementById("GFG");
    headingID.style.backgroundImage = "url('images/scary.gif')";


    let sound = document.createElement('audio');
    sound.src = "music/scary.mp3";
    sound.controls = "controls";
    sound.autoplay = "autoplay";
    document.getElementById("audio").replaceWith(sound)

    buttonH.style.fontSize = 0;
    

    while(true){
            await sleep(700);
            let random=Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            console.log(random);
            let wdth=0;
            let hght=0;
            if(random>=1){
              wdth=(Math.floor(Math.random() * (window.screen.width/2 - 1 + 1)) + 1);
              card1.style.width= wdth   + "px";
              hght=(Math.floor(Math.random() * (window.screen.height/2 - 1 + 1)) + 1);
              card1.style.height= hght + "px";
              card1.style.backgroundColor= "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"); //Random Color Generator
              card1.style.position = "absolute";
              card1.style.left = (Math.floor(Math.random() * (window.screen.width -wdth-100 - 2 + 1)) + 2) +'px';
              card1.style.top = (Math.floor(Math.random() * (window.screen.height -hght-100 - 2 + 1)) + 2) +'px';
            }
            if(random>=2){
              wdth=(Math.floor(Math.random() * (window.screen.width/2 - 1 + 1)) + 1);
              card2.style.width= wdth   + "px";
              hght=(Math.floor(Math.random() * (window.screen.height/2 - 1 + 1)) + 1);
              card2.style.height= hght + "px";
              card2.style.backgroundColor= "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"); //Random Color Generator
              card2.style.position = "absolute";
              card2.style.left = (Math.floor(Math.random() * (window.screen.width -wdth-100 - 2 + 1)) + 2) +'px';
              card2.style.top = (Math.floor(Math.random() * (window.screen.height -hght-100 - 2 + 1)) + 2) +'px';
            }
            if(random>=3){
              wdth=(Math.floor(Math.random() * (window.screen.width/2 - 1 + 1)) + 1);
              card3.style.width= wdth   + "px";
              hght=(Math.floor(Math.random() * (window.screen.height/2 - 1 + 1)) + 1);
              card3.style.height= hght + "px";
              card3.style.backgroundColor= "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"); //Random Color Generator
              card3.style.position = "absolute";
              card3.style.left = (Math.floor(Math.random() * (window.screen.width -wdth-100 - 2 + 1)) + 2) +'px';
              card3.style.top = (Math.floor(Math.random() * (window.screen.height -hght-100 - 2 + 1)) + 2) +'px';
            }
            
        }
    }

    
})








