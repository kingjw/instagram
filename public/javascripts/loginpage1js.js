window.onload = function(){

  var button1 = document.getElementById('button_1');
  button1.onclick=function()
  {
    var text_id = $('#logid').val();
    var text_password = $('#idpassword').val();

    $.ajax({
      url: '/login',
      dataType: 'json',
      type: 'POST',
      data: { user_id: text_id, user_password: text_password },
      success: function(result) {
        if(result['result']=='success')
           $(location).attr('href', 'http://35.167.120.11:3000/timeline');
      },
      error: function()
      {
        res.send('failed');
      }
    });
    }
}
    // alert('이름 : ' +document.getElementById('logid').value +'\n'+'비밀번호 : '
    // +document.getElementById('idpassword').value+'\n'+'이름, 비밀번호 :'+document.getElementById('logid').value
    // +document.getElementById('idpassword').value)


  // function login_gogo(){
  //

  //
  // $('#button_1')[0].click(function() {
  //   alert("a");
  //   login_gogo();
  // });
  //




//document.getElementById('login_name').value
//var id = document.getElementById('logid').value;
//alert(id);
//"이름 : "document.getElementById('logid').value+\n
//"비밀번호 : "document.getElementById('idpassword').value
