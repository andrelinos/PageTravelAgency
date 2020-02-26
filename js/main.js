function currentTime() {
  var date = new Date(); 
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  hour = changeTime(hour);
  min = changeTime(min);
  sec = changeTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; 
 
  var days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  var months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
 
  var curWeekDay = days[date.getDay()]; 
  var curDay = date.getDate(); 
  var curMonth = months[date.getMonth()]; 
  var curYear = date.getFullYear();
  var date = curWeekDay+", "+curDay+" de "+curMonth+" de "+curYear; 
  document.getElementById("date").innerHTML = date;
 
  var t = setTimeout(currentTime, 1000);
}
 
function changeTime(t) {
  if (t < 10) {
    return "0" + t;
  }
  else {
    return t;
  }
}
 
currentTime();
