const turnOn= document.getElementById("turnOn");
const TurnOff= document.getElementById("turnOff");
const lamp= document.getElementById("lamp");

/*Esta primeira funcao serviu para nos converter a lampada desligada em ligada*/ 

function lampOn(){
/*o if serviu oara dar a condicao se a lampada estiver quebrada ela ja nao pode ligar */
    if (!isLampBroke ()){
        lamp.src= "./ligada.jpg";
    }
}
turnOn.addEventListener ('click', lampOn);


/*Esta funcao serviu para nos deligar a lampada quando estiver ligado*/ 
function lampOff(){
/*o if serviu oara dar a condicao se a lampada estiver quebrada ela ja nao pode desligar */

 if (!isLampBroke ()) {
lamp.src= "./desligada.jpg";
 }  
}

TurnOff.addEventListener('click', lampOff);

/*Esta serviu para nos quando passar o mouse encima da lampada ela liga*/

lamp.addEventListener('mouseover', lampOn);

/*Esta serviu para quando retiramos a lampada ela se desliga*/
lamp.addEventListener('mouseleave', lampOff);

/*Esta funcao serviu para quando nos clicar duas vezes a lampada quebre*/

function lampBroke(){
    lamp.src= "./quebrada.jpg";
}

lamp.addEventListener('dblclick', lampBroke);


function isLampBroke(){

    return lamp.src.indexOf('quebrada') > -1
}