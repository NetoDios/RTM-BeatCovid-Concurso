const colores=["Color-Amarillo","Color-Coral","Color-Azul",
                "Color-Azul","Color-Rosa","Color-Amarillo",
                "Color-Rosa","Color-Azul","Color-Coral",
                "Color-Coral","Color-Amarillo","Color-Rosa"];
const questions=
["Nose",
"Sise"];
var score=[0,0];
//Preload -> Se carga una sola vez cuando se refresca la pagina
function preload(){
    console.log(1);
    var recuadros=document.getElementsByClassName("Recuadro");
    for(i=0; i<recuadros.length;i++){
        recuadros[i].className+=" "+colores[i];
    }
}
//ShowPregunta -> Se ejecuta cada que se preciona un recuadro, muestra Pregunta
function showPregunta(index){
    hide(index);
    var tablero=document.getElementsByClassName("Tablero");
    var pregunta=document.getElementsByClassName("Pregunta");
    tablero[0].className+=" NoDisplay";
    pregunta[0].className="Pregunta "+colores[index];
    var goBack=document.getElementsByClassName("Close");
    goBack[0].className="Close "+colores[(index+3)%12];
    var aux=document.getElementById("thisQuestion");
    aux.innerHTML=questions[0];
    var addP=(index%3)*100+100;
    var subP=-addP/2;
    var team1=document.getElementById("team1");
    var team2=document.getElementById("team2");
    team1.firstElementChild.onclick=function(){addPoints(0,addP);};
    team1.lastElementChild.onclick=function(){addPoints(0,subP);};
    team2.firstElementChild.onclick=function(){addPoints(1,addP);};
    team2.lastElementChild.onclick=function(){addPoints(1,subP);};
    console.log(team1.lastElementChild);
}
//Hide -> Se ejecuta cada que showPregunta() lo hace, marca un recuadro como usado
function hide(index){
    var faltan=document.getElementsByClassName("Falta");
    faltan[index].className+=" NoDisplay";
    var listos=document.getElementsByClassName("Done");
    listos[index].className="Done";
}
//AddPoints -> Suma o resta puntos a un equipo, y actualiza el score
function addPoints(team,val){
    score[team]+=val;
    console.log("ADDING");
    console.log(score);
    var puntos=document.getElementsByClassName("Score");
    puntos[0].lastElementChild.innerHTML=score[0];
    puntos[1].lastElementChild.innerHTML=score[1];
}
//ClosePregunta -> Esconde la pregunta y muestra el tablero
function closePregunta()
{
    var tablero=document.getElementsByClassName("Tablero");
    var pregunta=document.getElementsByClassName("Pregunta");
    pregunta[0].className="Pregunta NoDisplay";
    tablero[0].className="Tablero";
}
preload();