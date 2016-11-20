(function(){
    
    const config = {
    apiKey: "AIzaSyBOB37GxfcCQYeey8WlHu9wfAFuAp0VFiQ",
    authDomain: "login-d72aa.firebaseapp.com",
    databaseURL: "https://login-d72aa.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "80928384473"
};
    firebase.initializeApp(config);
    
    //get elements
    const txtUserName = document.getElementById('txtUserName');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnSignup');
    
    //add login event
    btnLogin.addEventListener('click', e => {
     //get username and password
        const username = txtUserName.value;
        const password = txtPassword.value;
        //Sign in
        const promise = auth.signInWithUsernameAndPassword(username, pass);
        promise.catch(e => console.log(e.message));
    });
    
   //add signup event
    btnSignup.addEventListener('click',e =>{
         const username = txtUserName.value;
        const password = txtPassword.value;
        //Create user
        const promise = auth.createUserWithUsernameAndPassword(username, pass);
        promise
            .catch(e => console.log(e.message));
        
    });
    //add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
        }
        else{
            console.log('Not logged in');
        }
    }); 
