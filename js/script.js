const username = ["Palumbro", "capo_hopper", "dark", "patrickNemico67"];
const password = ["palumbro.jr_nonEsiste", "SonoUn_elfo", "cronicamente_online", "volgio_ilToken"];
document.getElementById("user1").innerHTML = "nome utente: " + username[0] + " - Password: " + password[0];
document.getElementById("user2").innerHTML = "nome utente: " + username[1] + " - Password: " + password[1];
document.getElementById("user3").innerHTML = "nome utente: " + username[2] + " - Password: " + password[2];
document.getElementById("user4").innerHTML = "nome utente: " + username[3] + " - Password: " + password[3];

function mostraPassword() {
    if (document.getElementById("password").type == "text") {
        document.getElementById("password").type = "password";
    } else {
        document.getElementById("password").type = "text";
    }
}

function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(username.includes(user)){
        const i = username.indexOf(user);
        if(password[i] == pass){
            document.getElementById("loginButton").innerHTML = "Login successful";
            open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        }
    }else{
        document.getElementById("loginButton").innerHTML = "Invalid credentials";
    }
}

function rendiRegistrazione(){
    //testi
    document.getElementById("Title").innerHTML = "Registrati";
    document.getElementById("Message").innerHTML = "Inserisci le tue credenziali per registarrti";
    document.getElementById("login-switch").classList.remove("d-none");
    //classi
    document.getElementById("registrazione-switch").classList.add("d-none");
    document.getElementById("loginButton").classList.add("d-none");
    document.getElementById("registrazioneButton").classList.remove("d-none");
    document.getElementById("requisiti").classList.remove("d-none");
}
function rendiLogin(){
    //testi
    document.getElementById("Title").innerHTML = "Accedi";
    document.getElementById("Message").innerHTML = "Inserisci le tue credenziali per accedere";
    //classi
    document.getElementById("login-switch").classList.add("d-none");
    document.getElementById("registrazione-switch").classList.remove("d-none");
    document.getElementById("loginButton").classList.remove("d-none");
    document.getElementById("registrazioneButton").classList.add("d-none");
    document.getElementById("requisiti").classList.add("d-none");
}

/*function controlli(){

}*/
