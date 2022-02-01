var currentclick = "X";
var gameover =false;
function play(id){
  var idstring = "" + id;
  var isEmptyCell = !document.getElementById(idstring).innerText;
  if(gameover)
  return;
  if(isEmptyCell){
    document.getElementById(idstring).innerText = currentclick;
    currentWinner();
    if(currentclick==="X"){
        currentclick = "O"
      }else{
        currentclick = "X";
      }
  } 
  function currentWinner(){
      var cellval1 = document.getElementById('1').innerText;
      var cellval2 = document.getElementById('2').innerText;
      var cellval3 = document.getElementById('3').innerText;
      var cellval4 = document.getElementById('4').innerText;
      var cellval5 = document.getElementById('5').innerText;
      var cellval6 = document.getElementById('6').innerText;
      var cellval7 = document.getElementById('7').innerText;
      var cellval8 = document.getElementById('8').innerText;
      var cellval9 = document.getElementById('9').innerText;

      if(cellval1!=="" && cellval1===cellval2 && cellval2===cellval3){
          gameover = true;
          document.getElementById("message").innerText = "Game@Over" + currentclick + "Won";
      }
      if(cellval1!=="" && cellval1===cellval4 && cellval4===cellval7){
        gameover = true;
        document.getElementById("message").innerText = "Game@Over" + currentclick + "Won";
    }
    if(cellval1!=="" && cellval1===cellval5 && cellval5===cellval9){
        gameover = true;
        document.getElementById("message").innerText = "Game@Over" + currentclick + "Won";
    }
    if(cellval2!=="" && cellval2===cellval5 && cellval5===cellval8){
        gameover = true;
        document.getElementById("message").innerText = "Game@Over" + currentclick + "Won";
    }
    if(cellval3!=="" && cellval3===cellval5 && cellval5===cellval7){
        gameover = true;
        document.getElementById("message").innerText = "Game@Over" + currentclick + "Won";
    }
    if(cellval3!=="" && cellval3===cellval6 && cellval6===cellval9){
        gameover = true;
        document.getElementById("message").innerText = "Game@Over" + currentclick + "Won";
    }
    if(cellval7!=="" && cellval7===cellval8 && cellval8===cellval9){
        gameover = true;
        document.getElementById("message").innerText = "Game@Over" + currentclick + "Won";
    }
    if(cellval4!=="" && cellval4===cellval5 && cellval5===cellval6){
        gameover = true;
        document.getElementById("message").innerText = "Game@Over" + currentclick + "Won";
    }

      
  }
  
}
function reset(){
    document.getElementById("message").innerText = "";
    for(var i=1;i<=9;i++){
       document.getElementById(i).innerText = "";
    }
}