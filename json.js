
const storageApi = 'http://localhost:3000/register';

    handlecreateUserForm();
    getApi(login);

function getApi(callBack){
    fetch(storageApi)
    .then(storageApi =>storageApi.json()) 
    .then(callBack)
}

function createUser(data , callBack){
    fetch(storageApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
    })
    .then(Response => Response.json())
    .then(callBack)
}


function handlecreateUserForm(register){
   
   window.onload = function(){
        var createBtn = document.querySelector('.registerBtn');  
        createBtn.addEventListener('click',function(){
            var check =false;
            var name = document.querySelector('input[name = "name"]').value;
            var passWord = document.querySelector('input[name="passWord"]').value;
            var rePassWord = document.querySelector('input[name="rePassWord"]').value;
            var errRegister = document.querySelector('#errRegister');  
            if( name == '' || passWord == '' || rePassWord == ''){
                errRegister.innerHTML = '<h2 id="errForm">Vui lòng điều đầy đủ thông tin</h2>';              
            } else if(passWord != rePassWord && passWord !='' && rePassWord != ''){
                errRegister.innerHTML = '<h2 id="errForm">Nhập lại mật khẩu không chính xác</h2>'; 
            }else{
            var formData = {
                name: name,
                passWord:passWord
            }
            check = true;
                alert('Đăng ký thành công');
                onLogin();
        }
        if(check)
            createUser(formData);
        })
    }   
}


function login(register){
    const el = document.querySelector('.loginBtn');
            el.addEventListener('click',function(){
                var name1 = document.querySelector('input[name = "name1"]').value;
                var passWord1 = document.querySelector('input[name="passWord1"]').value;           
                var check = true;
                register.map(function(value){
                   if(value.name == name1 && value.passWord == passWord1){
                            document.querySelector('.changeName').innerHTML = name1;
                            document.querySelector('.changeName').style.display = 'block';
                            document.querySelector('.header__navbar-use-img').style.display = 'block';
                            document.querySelector('.noLogin').style.display = 'none';
                            onBack();
                    }else{
                        check = false;
                    }
                })
                if(check == false){
                        var errLogin = document.querySelector('#errLogin');
                        errLogin.innerHTML = '<h2 id="errForm">Tên tài khoản hoặc mật khẩu không chính sác</h2>'; 
                }
           })

        }



