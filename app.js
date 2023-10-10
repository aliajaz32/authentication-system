console.log("js running successfully");
function signup(){
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

if(name==="" || email===""|| password==="" || name===" " || email ===" " || password ===" "){
    alert("plz enter required data")
}
else{
    var userObject1 = {
        name:name,
        email:email,
        password:password
    }

    localStorage.setItem("userObject1",JSON.stringify(userObject1));
    nas = localStorage.getItem("userObject1");
    console.log(JSON.parse(nas));   

    setTimeout(function(){
        document.getElementById('loading').innerHTML="creating your account plz wait...."
    }

    ,1)

    setTimeout(function(){
        location = "./index1.html"
    }
    ,5000)

}

}
