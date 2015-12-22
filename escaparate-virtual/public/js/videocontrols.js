
var video = $("medio");

function vidplay() {
       
      video.style.visibility = "visible";
   
      video.play();   
       
    }


       
    function vidpause() {
    	 
       video.pause();
    }

    function volup() {
     
		//Cambia el volumen para la mitad
		video.volume += 0.1;
		
    }

    function voldown() {
      

		//Cambia el volumen para la mitad
		video.volume -= 0.1;
    }   