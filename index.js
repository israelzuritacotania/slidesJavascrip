let slide_actual = 1;
mostrarSlides(slide_actual)

function mostrarSlides(num){
    let slides = document.getElementsByClassName('slide');
    const circulos = document.getElementsByClassName('circulo');
    if(num > slides.length)
    {
        slide_actual = 1;
    }
    else{
        if(num < 1){
            slide_actual = slides.length;
        }
        else{
            slide_actual=num;
        }
    }
   for(var i=0; i<slides.length; i++){
    slides[i].style.display = 'none';
    circulos[i].classList.remove("activo");
   }
    
    slides[slide_actual-1].style.display = 'block';
    circulos[slide_actual-1].classList.add("activo");
}

let boton_previo = document.getElementById("btn_previo");
boton_previo.addEventListener("click",ir_atras);

function ir_atras(){
    let n = slide_actual-1;
    mostrarSlides(n)
}

let boton_siguiente= document.getElementById("btn_siguiente");
boton_siguiente.addEventListener("click",ir_adelante);
function ir_adelante(){
    let n = slide_actual+1;
    mostrarSlides(n)
}

let botones_inferiores = document.getElementsByClassName('circulo');
for(let i=0; i<botones_inferiores.length; i++)
{
    botones_inferiores[i].addEventListener("click",function(e){
        mostrarSlides(i+1)
    })
}

setInterval(() => {
    
   mostrarSlides(slide_actual);
   slide_actual = slide_actual+1;
  }, 2000);


