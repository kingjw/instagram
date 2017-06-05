window.onload = function(){
  var button2 = document.getElementById('sign');
  var num=0;
  button2.onclick=function()
  {
    var engname = document.getElementById('englishname').value;
    var korname = document.getElementById('logid').value;
    var password = document.getElementById('password1').value;
    var email = document.getElementById('email1').value;


    var eng_pt =/^[A-Za-z]{2,10}$/;
    var kor_pt = /^[ㄱ-ㅣ가-힣]+$/
    var email_pt =/^[\w\-]+@(?:[\w\-]{2,}\.)+[a-zA-Z]{2,}$/
    var password_pt =/[a-z0-9_]{4,20}$/;

    var eng_correct = eng_pt.test(engname);
    var kor_correct = kor_pt.test(korname);
    var email_correct = email_pt.test(email);
    var password_correct = password_pt.test(password);
  if(eng_correct != true)
  {
    //id값을 가져와야함 var값이 아니라
    document.getElementById('englishname').style.borderColor="red";
    num++;
  }
  if(kor_correct != true)
  {
    document.getElementById('logid').style.borderColor="red";
    num++;
  }
  if(password_correct != true)
  {
    document.getElementById('password1').style.borderColor="red";
    num++;
  }
  if(email_correct != true)
  {
    document.getElementById('email1').style.borderColor="red";
    num++;
  }
  if(num != 0)
  {
    document.getElementById('no').style.display ="block";
  }
}
}
