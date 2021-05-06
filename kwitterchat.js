var firebaseConfig = {
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
  user_name=localStorage.getItem("username");
  room_name=localStorage.getItem("roomname");
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      like:0,
      name:user_name,
      message:msg
    });
    document.getElementById("msg").value="";
  }
  function getData(){firebase.database().ref("/"+room_name).on('value',function(snapshot){document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot){
    childKey = childSnapshot.key;
    childData =childSnapshot.val();
    if(childKey !="purpose"){
    firebase_msg_id=childKey;
    msg_data=childData;
    name= msg_data['name'];
    message= msg_data['message'];
    like=msg_data['like'];
    name_tag="<h4> "+ name + "<img class='usertick' src='tick copy.png'></h4>";
    msg_tag= "<h4 class='message_h4'>"+message+"<h4>";
like_button="<button class='btn btn-warning' id="+firebase_msg_id+" value="+like+" oncilck='updateLike(this.id)>";
span_tag="<span class=''glyphicon glyphicon-thumbs-up'>like:"+ like +" </span></button><hr>";
row =name_tag+msg_tag+like_button+span_tag;
document.getElementById("output").innerHTML+= row;
    }
  });
  });
  }
  getData();
  function updateLike(message_id){
    button_id=message_id;
    like=document.getElementById(button_id).value;
    updated_likes = Number(likes) +1;
    firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
    });
  }
function logout(){
  localStorage.removeItem("roomname");
  localStorage.removeItem("username")
  window.location="index.html"
}