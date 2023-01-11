function pin(){
  var key = prompt("admin KEY");
  if (key == "list"){
    alert("Correct!");
    ran();
  }
}
function ran(){
 document.getElementById("d").innerHTML = "<p style='font-size:20px;'>Full list:</p><p>cars<br>slope<br>drift<br>fifa<br>sm64<br>dj<br>motox3m<br>mc<br>bb</p>";

}