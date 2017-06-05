window.onload=function()
{
  var big = document.getElementsByClassName('two')[0];
  for(var i = 0 ; i < 5 ; i++)
  {
    var newdiv = document.createElement('div');
    newdiv.id = 'a'+i;
    newdiv.className = "repeatarea";
    big.appendChild(newdiv);

      var repeatpicture = document.createElement('img');
      repeatpicture.src = "/images/기리보이1.jpg";
      repeatpicture.className ="repeatjpg";
      newdiv.appendChild(repeatpicture);
    // repeat.src="기리보이1.jpg";
    // repeat.className = "repeatjpg";
    // big.appendChild(repeat);
  }
}

  function modalopen1(){
    var modal2=document.getElementsByClassName("modal2")[0];
    var btn1 =document.getElementsByClassName("picture1")[0];
    var btn4=document.getElementById("myBtn10");
    var btn5=document.getElementById("myBtn20");
    var btn6=document.getElementById("myBtn30");
    var btn7=document.getElementById("myBtn40");
    var span = document.getElementsByClassName("close")[0];


       modal2.style.display = "block";

    // // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal2.style.display = "none";

    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }
    btn4.onclick = function(){
      modal2.style.display = "none";
    }
    btn5.onclick = function(){
      modal2.style.display = "none";
    }
    btn6.onclick = function(){
      modal2.style.display = "none";
    }
    btn7.onclick = function(){
      modal2.style.display = "none";
    }
  }
function modalopen2()
{

  var modal = document.getElementsByClassName("modal")[0];
  // Get the button that opens the modal
  var btn = document.getElementsByClassName("myBtn")[0];
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var button = document.getElementById("myBtn3");
  //When the user clicks the button, open the modal

  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }
  // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  span.onclick = function() {
    modal.style.display = "none";

  }

  button.onclick = function(){
    modal.style.display = "none";
  }

}

function modalopen3()
{
  var modal_10 = document.getElementsByClassName("modal_10")[0];
  var button100=document.getElementsByClassName("jpg1")[0];

    modal_10.style.display = "block";

    window.onclick = function(event) {
      if (event.target == modal_10) {
        modal_10.style.display = "none";
      }
    }
}
