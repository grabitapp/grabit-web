//(function(){
    
    const config = {
        apiKey: "AIzaSyCskIAWEozzbq2qUm3YXe3i2cJp0TBi_Ag",
        authDomain: "grabit-e26a4.firebaseapp.com",
        databaseURL: "https://grabit-e26a4.firebaseio.com",
        storageBucket: "grabit-e26a4.appspot.com",
        messagingSenderId: "548667916114"
      };
    
    firebase.initializeApp(config);
    console.log('am i running')
    //get elements
    let txtEmail= document.getElementById('txtEmail');
    let txtPassword = document.getElementById('txtPassword');
    //let btnLogin = document.getElementById('btnLogin');
    let btnSignup = document.getElementById('btnSignup');
    
  //  console.log(btnLogin);

    //add login event
  //  btnLogin.addEventListener('click', e => {
    // //get username and password
      //  const email = txtEmail.value;
        //const password = txtPassword.value;
        //console.log(username)
        //console.log(password)
        //const auth = firebase.auth();

        //Sign in
  //  const promise = auth.signInWithEmailAndPassword(username, password);
//    promise.catch(e => console.log(e.message));
  //  });
    
   //add signup event
console.log(btnSignup);
   btnSignup.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;
       //Create user
       const auth = firebase.auth();
       const promise = auth.createUserWithEmailAndPassword(email, password);
     //  window.location.href = "userLogin.html";
        promise.catch(e => console.log(e.message));
        });
btnSignup.addEventListener("click", e => window.location.href = "userLogin.html");
    
//add a realtime listener
//    firebase.auth().onAuthStateChanged(firebaseUser => {
//        if(firebaseUser){
//            console.log(firebaseUser);
//        }
//        else{
//            console.log('Not logged in');
//        }
//    });
    

