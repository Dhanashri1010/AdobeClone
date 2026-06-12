$(document).ready(function(){

$("#signinForm").submit(function(e){

e.preventDefault();

let email = $("#email").val();

let password = $("#password").val();

if(email === "" || password === ""){

alert("Please fill all fields");

return;

}

alert("Login Successful!");

});

});