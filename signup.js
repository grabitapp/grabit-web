    let txtEmail= document.getElementById('txtEmail');
    let txtPassword = document.getElementById('txtPassword');
    //let btnLogin = document.getElementById('btnLogin');
    let btnSignup = document.getElementById('btnSignup');
    
   //add signup event
console.log(btnSignup);
   btnSignup.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;
       //Create user
       const auth = firebase.auth();
       const promise = auth.createUserWithEmailAndPassword(email, password);
       //changes
       promise.then(e => {
           window.location.href = "/login"
       }, e => {
           window.alert(e.message);
       });
   });
