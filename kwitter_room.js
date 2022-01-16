
const firebaseConfig = {
      apiKey: "AIzaSyAwkJpYZC-dDGyFPEbfqSSjWM2OT_7XL_E",
      authDomain: "kwitter-e212c.firebaseapp.com",
      databaseURL: "https://kwitter-e212c-default-rtdb.firebaseio.com",
      projectId: "kwitter-e212c",
      storageBucket: "kwitter-e212c.appspot.com",
      messagingSenderId: "670381184493",
      appId: "1:670381184493:web:26c0978c462848711643e4"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update ({  
          purpose = "adding room name"  
        });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function updateLike(message_id)
{
      console.log("clicked on liked button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
});

}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}