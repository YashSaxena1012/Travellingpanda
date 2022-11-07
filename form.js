function switch1() {
    document.querySelector(".login-welcome").style.visibility = "hidden";
    document.querySelector(".signup-welcome").style.visibility = "visible";
}
function switch2() {
    document.querySelector(".login-welcome").style.visibility = "visible";
    document.querySelector(".signup-welcome").style.visibility = "hidden";
}
function validate1() {
    var result = true;
    var uname = document.myform1.myusername.value;
    var pass = document.myform1.mypassword.value;
    var captcha = document.myform1.eligibility;
    if (uname == "" || uname == null) {
        result = false;
        document.querySelector("#username").style.border = "2px solid red";
        document.querySelector("#username").style.boxShadow = "0px 0px 10px red";
        alert("enter valid username");
    } else {
        document.querySelector("#username").style.border = "none";
        document.querySelector("#username").style.boxShadow = "none";
    }
    if (pass == "" || pass == null || pass.length < 6) {
        result = false;
        document.querySelector("#password1").style.boxShadow = "0px 0px 10px red";
        document.querySelector("#password1").style.border = "2px solid red";
        alert("enter valid password(password length must not be less than 6)");
    } else {
        document.querySelector("#password1").style.boxShadow = "none";
        document.querySelector("#password1").style.border = "none";
    }
    if (!captcha.checked) {
        result = false;
        document.querySelector("#eligible").style.border = "2px solid red";
        document.querySelector("#eligible").style.boxShadow = "0px 0px 10px red";
        alert("invalid captcha found");
    } else {
        document.querySelector("#eligible").style.border = "none";
        document.querySelector("#eligible").style.boxShadow = "none";
    }
    return result;
}
function validate2() {
    var result = true;
    var uname = document.myform2.myname.value;
    var upass = document.myform2.mypass.value;
    var mail = document.myform2.myemail.value;
    if (uname == "" || uname == null || uname.length < 6) {
        result = false;
        document.querySelector("#name").style.border = "2px solid red";
        document.querySelector("#name").style.boxShadow = "0px 0px 10px red";
        alert("enter valid username(username length must not be less than 6)");
    } else {
        document.querySelector("#name").style.border = "none";
        document.querySelector("#name").style.boxShadow = "none";
    }
    if (upass == "" || upass == null || upass.length < 6) {
        result = false;
        document.querySelector("#password2").style.boxShadow = "0px 0px 10px red";
        document.querySelector("#password2").style.border = "2px solid red";
        alert("enter valid password(password length must not be less than 6)");
    } else {
        document.querySelector("#password2").style.boxShadow = "none";
        document.querySelector("#password2").style.border = "none";
    }
    var atpos = mail.indexOf("@");
    var dotpos = mail.indexOf(".");
    if (mail == "" || mail == null || atpos - dotpos < 2) {
        result = false;
        document.querySelector("#email").style.border = "2px solid red";
        document.querySelector("#email").style.boxShadow = "0px 0px 10px red";
        alert("invalid email entered");
    } else {
        document.querySelector("#email").style.border = "none";
        document.querySelector("#email").style.boxShadow = "none";
    }
    return result;
}
