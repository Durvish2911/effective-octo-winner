function addUser(){
   var d= document.getElementById("username").value;
   localStorage.setItem("username",d);
   console.log("kuku")
   window.location="kwitterrooms.html";
}