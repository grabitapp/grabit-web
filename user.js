//function go(){
    
    const config = {
        apiKey: "AIzaSyCskIAWEozzbq2qUm3YXe3i2cJp0TBi_Ag",
        authDomain: "grabit-e26a4.firebaseapp.com",
        databaseURL: "https://grabit-e26a4.firebaseio.com",
        storageBucket: "grabit-e26a4.appspot.com",
        messagingSenderId: "548667916114"
      };
    
    firebase.initializeApp(config);
    console.log('am i running');
    //get elements
    let txtEmail = document.getElementById('txtEmail');
    let txtPassword = document.getElementById('txtPassword');
    let btnLogin = document.getElementById('btnLogin');
    let btnSignupVirtual = document. getElementById('btnSignupVirtual');
//  let btnSignup = document.getElementById('btnSignup');
    
    console.log(btnLogin);
    btnSignupVirtual.addEventListener("click", e => window.location.href = "userSignup.html");

    //add login event
    btnLogin.addEventListener('click', e => {
     //get username and password
        const email = txtEmail.value;
        const password = txtPassword.value;
        console.log(email)
        console.log(password)
        const auth = firebase.auth();
        
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => {
            console.log(e.message);
            window.location.href = "tasks.html";
        });

  //    auth.onAuthStateChanged(user => {
  //  if const auth = firebase.auth()
  //  {
                // Signed in
  //             window.location.href = "tasks.html";
   //        }
   // else { alert('user ' + ' does not exist!');}
//    });
        
//function go() {
  //var userId = prompt('email', 'Guest');
  //checkIfUserExists(userId);
//}
       
//var USERS_LOCATION = 'https://console.firebase.google.com/project/grabit-e26a4/authentication/users';
//function userExistsCallback(userId, exists) {
  //if (exists) {
//   //switch to task.html
  //    window.location.href = "task.html"
  //} 
//    else {
//    alert('user ' + ' does not exist!');
//    }
//}
})
   
    
   //add signup event
//    btnSignup.addEventListener('click', e => {
//        const username = txtUserName.value;
//        const password = txtPassword.value;
//        //Create user
//        const auth = firebase.auth();
//        const promise = auth.createUserWithEmailAndPassword(username, password);
//        promise.catch(e => console.log(e.message));
//        
//    });
    //add a realtime listener
//    firebase.auth().onAuthStateChanged(firebaseUser => {
//        if(firebaseUser){
//            console.log(firebaseUser);
//        }
//        else{
//            console.log('Not logged in');
//        }
//    });
    
//})
