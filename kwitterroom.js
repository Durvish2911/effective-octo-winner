const firebaseConfig = {
    apiKey: "AIzaSyBs6vzJS_8XFnL-SNgFSaXWrU-rDsYb_-8",
    authDomain: "omg-fmonyc.firebaseapp.com",
    databaseURL: "https://omg-fmonyc-default-rtdb.firebaseio.com",
    projectId: "omg-fmonyc",
    storageBucket: "omg-fmonyc.appspot.com",
    messagingSenderId: "1060806416133",
    appId: "1:1060806416133:web:b92b2204d2a23d546bc96c",
    measurementId: "G-XZDNP0TJX9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("username");
  document.getElementById("hem_hem").innerHTML="welcome " + username + "!";
  function addroom(){
      h1=document.getElementById("roomname").value;
      firebase.database().ref("/").child(h1).update({
          purpose : "adding room name"
      });
      localStorage.setItem("roomname",h1);
      window.location="kwitter_page.html";
  }
  function getData(){firebase.database().ref("/").on('value',function(snapshot){document.getElementById("output").innerHTML="";snapshot.forEach(function(childSnapshot){childKey =childSnapshot.key;
  room_name=childKey;
  row = "<div class='room_name'id= "+room_name+" onclick='redirectoroomname(this.id)'>#"+room_name+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
});});}
getData();
function redirectoroomname(name){
    localStorage.setItem("roomname",name);
    window.location="kwitterchat.html";
}
function logout(){
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location="index.html";
}