function ret() {
  var x = document.getElementById("inp").value;
  document.getElementById("f").innerHTML = x;
  if (x == "!help"){
  document.getElementById("f").innerHTML = "!find - (filename) /*Locates and displays internal file*/<br>!list /*lists internal files*/<br>!run /*runs silver*/";
}else if (x == "!find - readme"){
document.getElementById("f").innerHTML = "Thank you for chosing Shiba95<br><br>This website/file";
}else if (x == "!run"){
var silver = window.open("", "", "width=1500,height=1000");
silver.document.write('<body><html>');
        silver.document.write('');
        silver.document.write('</body></html>');

}else{ //end
   document.getElementById("f").innerHTML = "NOT A COMMAND :: err 1";
  
}
}
