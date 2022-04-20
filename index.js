


const submitit = document.getElementById('submit');
submitit.addEventListener("click", function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;



    if(name!=="" && username!=="" && email!=="" && age!=="" && password!=="" && password2!=="" ){
        if(name.match(letters)){
            if(username.length<15){
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                    if(age>15){
                        if(password.length>6){
                            if(password2==password){
                                window.location="https://www.google.com"
                            }
                            else{ document.getElementById('password2error').innerHTML = " *password is not same";}
                        }
                        else{document.getElementById('passworderror').innerHTML = " *password length should be 6-15 ";}
                    }
                    else{ document.getElementById('ageerror').innerHTML = " *age ahould be >15";}
                }
                else{document.getElementById('emailerror').innerHTML = " *plaese fill valid email";}
            }
            else{document.getElementById('usernameerror').innerHTML = " *length should be <15";}
        }
        else{document.getElementById('nameerror').innerHTML = " *plaese fill valid name";}
    }
    else{ alert("Please fill all the fields");}
});
