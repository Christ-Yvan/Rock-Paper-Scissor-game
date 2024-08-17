const ImgLeft = ["./final/SilvaZoldyck.png","./final/netero.png","./final/kaito1.png","./final/leolio.png","./final/chrollo12.png","./final/Gon3.png"];
const ImgRight = ["./final/hisoka22.png","./final/meruem.png","./final/pitou.png","./final/kurapica1.png","./final/kurapica.png","./final/killua3.png"];
const Left = document.getElementById('ImgLeft');
const Right = document.getElementById('ImgRight');
let counter = 0;

function SwitchImg(){
  Left.setAttribute('src', `${ImgLeft[counter]}`);
  Right.setAttribute('src', `${ImgRight[counter]}`);
  counter = (counter+1) % ImgLeft.length;
}

// gestion du song que je yamo mal dans hunter hunter
window.addEventListener('load', function() {
  var audio = document.getElementById('song');
  audio.play().catch(function(error) {
      console.log('Autoplay was prevented:', error);
  });
});

setInterval(SwitchImg, 5000);

const audio = document.getElementById('song');
Window.audio.play();

