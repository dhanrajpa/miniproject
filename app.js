$(document).ready(function () {


  $("#btn_login").click(function () {
    $("#Login").toggle();
    $("#registration").hide();
    $("#carouselExampleControls").hide();


  });

  $("#btn_reg2").click(function () {
    $("#Login").hide();
    $("#registration").show();
  });

  $("#show").click(function () {
    $("#carouselExampleControls").show();
    $("#registration").hide();
    $("#Login").hide();
  });

  $("#btn_reg1").click(function () {
    $("#registration").toggle();
    $("#Login").hide();
    $("#carouselExampleControls").hide();

  });

  $("#btn_login1").click(function () {
    $("#Login").show();
    $("#registration").hide();

  });

});



$(document).ready(
  function () {
    $("#btn_login2").click(
      function () {
        $.get("http://localhost:3000/people",
          function (data, status) {
            var inputEmail = $("#typeEmailX").val();
            var inputPassword = $("#typePasswordX").val();
            for (var i = 0; i < data.length; i++) {
              var obj = data[i];
              if (obj.email == inputEmail && obj.password == inputPassword && obj.category == "artist") {
                sessionStorage.setItem("email", document.getElementById("typeEmailX").value);
                sessionStorage.setItem("password", document.getElementById("typePasswordX").value);
                console.log("into")
                if (sessionStorage.getItem("email") == inputEmail && sessionStorage.getItem("password") == inputPassword) {
                  window.location.href = "./dashboard.html";
                }

              }
              if (obj.email == inputEmail && obj.password == inputPassword && obj.category == "user") {
                sessionStorage.setItem("email", document.getElementById("typeEmailX").value);
                sessionStorage.setItem("password", document.getElementById("typePasswordX").value);
                console.log("into")
                if (sessionStorage.getItem("email") == inputEmail && sessionStorage.getItem("password") == inputPassword) {
                  window.location.href = "./uDB.html";
                }

              }


              // else {
              // window.location.href = "./app.html";

              // }
            }
          });

        
      });


  });




// search 


$(document).ready
  (
  function(){
      $("#btn_search").click
        (function () {
          console.log();
          var inputValue = document.getElementById("search").toUpperCase();
          $.get("http://localhost:3000/people",
            function (data, status) {

              for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                var foundData = (obj.name).toUpperCase();

                if (inputValue == foundData) {

                  document.getElementById("showartist_data").innerHTML += obj.name + "<br>" + obj.email + "<br>" + obj.category
                }
              }
            });

        });
    });




function logout() {
  sessionStorage.clear();
  window.location.href = "./app.html";
}



$(document).ready(function () {

  $("#form_btn").click(function () {
    var valid=false;
    var nm = $("#username").val();
    var eID = $("#useremail").val();
    var cat = $("input[name=radio]:checked").val();
    var gen = $("input[name=gen]:checked").val();

    var inputPswd=$("#userpassword").val();
    

  
    var confirmPwd = $("#userpassword1").val();
    var check=false
    if (nm == "" || eID == "" || cat == "" || gen == "" || confirmPwd == "") {
      alert("Each field is manditory");
    }
 else {
      $.get("http://localhost:3000/people",
        function (data, status) {
          for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            if (obj.email == eID) {
               check=true;
              alert("email already exist");
              

            }
          }
          if(check==false){
        if (inputPswd == confirmPwd) {
             
                $.post("http://localhost:3000/people",
                  {
                    name: nm,
                    email: eID,
                    gender: gen,
                    password: inputPswd,
                    category: cat
                  },
                  function (data, status) {
                    console.log("password confirm " + data)
                  });

            
              }
            else
              {
                alert("Password dont matches...!")
              }
    
        }});

    }

  });
});
//---------------------------------------search

$(document).ready
  (
    function () {
      $("#btn_search").click
        (function () {
          var inputValue = $("#search").val().toUpperCase();
          $.get("http://localhost:3000/people",
            function (data, status) {

              for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                var foundData = (obj.name).toUpperCase();

                if (inputValue == foundData) {

                  document.getElementById("nave").innerHTML += obj.name + "<br>" + obj.email + "<br>" + obj.category
                }
              }
            });

        });
    });




