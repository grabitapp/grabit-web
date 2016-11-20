let txtEmail = document.getElementById('txtEmail');
let txtPassword = document.getElementById('txtPassword');
let btnLogin = document.getElementById('btnLogin');
let btnSignupVirtual = document. getElementById('btnSignupVirtual');

btnSignupVirtual.addEventListener("click", e => window.location.href = "signup.html");

//add login event
btnLogin.addEventListener('click', e => {
 //get username and password
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.then(e => {
        window.location.href = "tasks.html";
    }, e => {
        window.alert(e.message);
    });
});
