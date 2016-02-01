
//käivitub ainult siis. kui terve dokument on laetud
window.onload = function(){

  //saan kätte input väljad

  var cm = document.getElementById('cm');
  var inch = document.getElementById('inch');

  //lisan nuppudele kuularid
  document.getElementById('to_inch').addEventListener('click', convertToInch);
  document.getElementById('to_cm').addEventListener('click', function(){
    cm.value = inch.value * 2.54;

  });
};

function convertToInch(){

  //arvutan ümber tollideks ja lisan väärtuse tollid lahtrisse
  inch.value = cm.value/2.54;

}
