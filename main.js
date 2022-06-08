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

function closeUser(){
    document.querySelector('.noLogin').style.display = 'block';
    document.querySelector('.changeName').style.display = 'none';
    document.querySelector('.header__navbar-use-img').style.display = 'none';
}

// heart

function heartWhile(){
    const heartWhile = document.querySelector('.home-product-item__like--icon--while');
    const heartRed = document.querySelector('.home-product-item__like--icon--red');
    heartRed.style.display = 'block';
    heartWhile.style.display = 'none'
    }

    function heartRed(){
    const heartWhile = document.querySelector('.home-product-item__like--icon--while');
        const heartRed = document.querySelector('.home-product-item__like--icon--red');
        heartRed.style.display = 'none';
         heartWhile.style.display = 'block'
   }


