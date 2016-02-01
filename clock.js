window.onload = function(){

  var clock = document.getElementById("clock");

  writeDate();

  window.setInterval(function(){

    writeDate();

  }, 1000); //millisekundid, 1000ms = 1s


};

function writeDate(){

  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  clock.innerHTML = setZeroBefore(hours) + ':' + setZeroBefore(minutes) + ':' + setZeroBefore(seconds);

}

//lisab nulli, kui arv on kümnest väiksem
function setZeroBefore(number){

  if(number <10){
    number ='0' + number;

  }

  return number;

}
