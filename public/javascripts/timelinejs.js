window.onload=function()
{
  var timeline = document.getElementsByClassName('mid')[0];
  var alltimeline = document.createElement('div');
  // var time_line=t_line.innerHTML;
  alltimeline.innerHTML = timeline.innerHTML;

  for(var i=0;i<5;i++)
  {
    timeline.innerHTML += alltimeline.innerHTML;
  }
}

function heartopen()
{
  var heart_icon = document.getElementsByClassName('heart')[0];

    //  heart_icon.textContent = "♥";
    if(heart_icon.textContent == "♡")
    {
      console.log(heart_icon.textContent);
      heart_icon.textContent = "♥";
    }

    else if(heart_icon.textContent == "♥")
    {
      console.log(heart_icon.textContent);
      heart_icon.textContent = "♡";
    }

}
// {
//   var big = document.getElementsByClassName('big')[0];
//   for(var i=0; i < 9; i++)
//   {
//     var newDiv = document.createElement('div');
//     // newDiv.id = 'a'+i;
//     newDiv.className = 'firstone';
//     big.appendChild(newDiv);
//
//       var oneDiv = document.createElement('div');
//       // oneDiv.id = 'b'+1;
//       oneDiv.className = 'secondone';
//       newDiv.appendChild(oneDiv);
//
//        var oneDivPicture = document.createElement('div');
//       //  oneDivPicture.id = 'c'+1;
//        oneDivPicture.className = 'anothersecondone';
//
//        var imgElements1 = document.createElement('img');
//        imgElements1.src="name.jpg";
//        imgElements1.className = "firstjpg";
//        oneDiv.appendChild(oneDivPicture);
//        oneDivPicture.appendChild(imgElements1);
//
//       var imgElements2 = document.createElement('img');
//       imgElements2.src="설리인스타.jpg";
//       imgElements2.className = "secondjpg";
//       oneDiv.appendChild(imgElements2);
//
// //       // var para = document.createElement("P");
// //       // var text1 = document.createTextNode("gdragn님과 choi_ja 님이 좋아합니다.jelly_jilli 기분전환!")
// //       // text1.style="font-size : 181px; text-align:center;"
// //       // para.appendChild(text1);
// //       // oneDiv.appendChild(para);
// //       // var paragra = document.createTextNode('p1');
// //       // para.appendChild(paragra);
// //       // oneDiv.appendChild(para);
// //       // var textparagraph = document.createElement('div');
// //       // textparagraph.className = 'ptext';
// //       // oneDiv.appendChild(p);
// //       // var textelement1 = document.createElement('text');
// //       // textelement1.className == 'p1';
// //       // oneDiv.appendChild('p1');
// //
// }
  // for(var i=0; i < 11; i++){
  //   var small = document.getElementById('r'+i)
  //   var newDiv = document.createElement('div');
  //   newDiv.id = 'r'+i;
  //   newDiv.className = 'jinbox';
  //   small.appendChild(newDiv);
  // }
function modalopen()
{
  var modal = document.getElementById('myModal');
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var button = document.getElementById("myBtn3");
  // When the user clicks the button, open the modal

    modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  button.onclick = function(){
    modal.style.display = "none";
  }

}
