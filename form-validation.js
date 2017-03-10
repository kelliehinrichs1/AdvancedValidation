function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  if(userEntered.length < 6 || userEntered.search(" " > 0){
  //Show message that there is an error with the username...
  if(userEntered.length < 6){
    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
  }
  if(userEntered.search(" ") > 0){
    document.getElementById("usernameError").innerHTML="Username cannot contain spaces.";
  }
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
} else {document.getElementById("usernameGroup").classList.add("has-success")}
  //Show message that there is an error with the password...
  if(passEntered == "password" || passEntered == "PASSWORD" || passEntered == "Password" ||
  passEntered == userEntered || passEntered.length < 6 || passEntered.length > 20 ){
  if(passEntered == "password" || passEntered == "PASSWORD"){
    document.getElementById("passwordError").innerHTML="Password cannot be password.";
  }
  if(passEntered == userEntered){
    document.getElementById("passwordError").innerHTML="Username and password cannot match.";
  }
  if(passEntered.length < 6){
    document.getElementById("passwordError").innerHTML="Password must be at least 6 characters.";
  }
  if(passEntered.length > 20){
    document.getElementById("passwordError").innerHTML="Password cannot be longer than 20 characters.";
  }
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
} else {document.getElementById("passwordGroup").classList.add("has-success")}
}
