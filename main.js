  // regester
  function onRegister(){
    const register = document.getElementById("switch-register");
    const login = document.getElementById("switch-login");
    const modal = document.getElementById("modal");
    register.style.display = "block";
    login.style.display = "none";
    modal.style.display = "flex";        
}

//login
function onLogin(){
    const register = document.getElementById("switch-register");
    const login = document.getElementById("switch-login");
    const modal = document.getElementById("modal");
    register.style.display = "none";
    login.style.display = "block";
    modal.style.display = "flex";  
}

//on back
function onBack() {
    const register = document.getElementById("switch-register");
    const login = document.getElementById("switch-login");
    const modal = document.getElementById("modal");
    register.style.display = "none";
    login.style.display = "none";
    modal.style.display = "none"; 
}