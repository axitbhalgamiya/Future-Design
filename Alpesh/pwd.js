var attempt = 3;
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Alpesh" && password == "PRAjapATI"){
        //alert ("Login successfully");
        window.location.href="index.html"; // Redirecting to other page.
        return false;
    }
    else{
        alert("Wrong password");
    }
}