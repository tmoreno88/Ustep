


function $(id){
  return document.getElementById(id);
}



var velocidad = 15,
    direccion = velocidad,
    iniciar = false,
    x = 0,
    y = 100,
    intervalo;

window.addEventListener('load', energy);
function energy(){
  var lienzo = $("micanvas");

  var particle = lienzo.getContext('2d');
  particle.fillStyle='#5ce7f1';
  //Tamaño partícula
  particle.arc(x,y,5,0,7);

  particle.fill();
  intervalo = window.setInterval(function(){moveAndDraw(lienzo,particle);
  }, 80);

};

function draw(lienzo,particle,x,y){
  lienzo.width = lienzo.width;

  particle.fillStyle='#5ce7f1';
  //Especifica tamaño partícula
  particle.arc(x,y,5,0,7);
  particle.fill();
}
function moveAndDraw(lienzo,particle){
  //Empezamos en 14.3
  /*
   7.20 -->-7  +17
   77.5 -->+70  -15
   28.80 -->-49  +75
   146.40 -->+118  -40
   88.163 -->-58  +123
   192.117 -->+104  -50
   164.231 -->-28  -114
   227.217 -->+70  -15
   */
  //Movimiento hacia abajo

  toPoint(500,240,particle,lienzo);

}
function toPoint(xMove,yMove,particle,lienzo) {

  var abajoIzquierda = ((x > xMove) && (y < yMove)),
      abajoDerecha = ((x < xMove) && (y < yMove)),
      arribaDerecha = ((x < xMove) && (y > yMove)),
      arribaIzquierda = ((x > xMove) && (y > yMove)),
      movimiento = [abajoIzquierda,
                    abajoDerecha,
                    arribaDerecha,
                    arribaIzquierda].indexOf(true);

  abajoIzquierda = 0;
  abajoDerecha = 1;
  arribaDerecha = 2;
  arribaIzquierda = 3;

  if(y>(lienzo.height-20)) {
    direccion = -velocidad;
  }
  if(y<(20)) {
    direccion = velocidad;
  }

  switch (movimiento) {
    case abajoIzquierda:  x-=direccion; y+=direccion;
      break;
    case abajoDerecha:  x+=direccion; y=Math.sin( x/15 ) * 30 + 80;
      break;
    case arribaDerecha:  x++; y--;
      break;
    case arribaIzquierda:  x--; y--;
      break;
    default: "ERROR en la búsqueda de posiciones";
  }

  return draw(lienzo,particle,x,y);;
}
