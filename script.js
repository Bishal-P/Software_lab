var x=document.getElementById("login-background");
        function hide(){
            if(x.style.top==="-100%"){
                x.style.top="0%";
        
            }
            else{
                x.style.top="-100%";
        
            }
        }

function Login(){
    var x=document.getElementById("user-name"); 
    var y=document.getElementById("login-logo"); 
    hide();
    x.style.display="block";
    y.style.display="none";
    
}


function show_login(){
    var x=document.getElementById("forgot-user");
    var y=document.getElementById("login-form-block");
    var z=document.getElementById("register-user");
   x.style.display="none";
   z.style.display="none";
    y.style.display="block";
}

function showForgot(){
    var x=document.getElementById("forgot-user");
    var y=document.getElementById("login-form-block");
    var z=document.getElementById("register-user");
    x.style.display="block";
    z.style.display="none";
    y.style.display="none";
}

function show_register(){
    var x=document.getElementById("forgot-user");
    var y=document.getElementById("login-form-block");
    var z=document.getElementById("register-user");
    x.style.display="none";
    z.style.display="block";
    y.style.display="none";
}

function forgot_submit(){
    alert("Password reset link has been sent to your mail and phone number");
    show_login();
}

function register_submit(){
    alert("Registration successful --- Please login to continue");
    show_login();
}