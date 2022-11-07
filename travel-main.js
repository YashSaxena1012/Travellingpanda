var cont = 6350
function showmore() {
    showbtn = document.querySelector('.show')
    if (showbtn.placeholder == "SHOW MORE") {
        cont = 9500
        document.querySelector('.more').style.display = "block"
        showbtn.placeholder = "SHOW LESS"
    }
    else {
        cont = 6350
        document.querySelector('.more').style.display = "none"
        showbtn.placeholder = "SHOW MORE"

    }
}
function scrltop() {
    window.scrollTo(0, 0)
}
function homescrl() {
    window.scrollTo(0, 0)
}
var transleft = document.querySelectorAll('.left');
var transright = document.querySelectorAll('.right');

var v = window.innerWidth
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (v > 1023) {
        if ((document.body.scrollTop > 250 || document.documentElement.scrollTop > 250)) {
            document.querySelector('.about-video').style.left = 0
        }
        if ((document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000)) {
            transleft[0].style.left = 0
            transright[0].style.left = "46.5rem"
        }
        if ((document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800)) {
            transleft[1].style.left = 0
            transright[1].style.left = "46.5rem"
        }
        if ((document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500)) {
            transleft[2].style.left = 0
            transright[2].style.left = "46.5rem"
        }
        if ((document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000)) {
            transleft[3].style.left = 0
        }
    }
    if (v > 481 && v <= 1023) {
        if ((document.body.scrollTop > 550 || document.documentElement.scrollTop > 550)) {
            document.querySelector('.about-video').style.left = 0
            document.querySelector('.about-video').style.top = "7%"
        }
        if ((document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400)) {
            transleft[0].style.left = 0
            transright[0].style.left = 0
        }
        if ((document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000)) {
            transleft[1].style.left = 0
            transright[1].style.left = 0
        }
        if ((document.body.scrollTop > 2650 || document.documentElement.scrollTop > 2650)) {
            transleft[2].style.left = 0
            transright[2].style.left = 0
        }
        if ((document.body.scrollTop > 3200 || document.documentElement.scrollTop > 3200)) {
            transleft[3].style.left = 0
        }

    }


    if (v < 481) {
        if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
            document.querySelector('.about-video').style.left = "3%"
            document.querySelector('.about-video').style.top = "8%"

        }
        if ((document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900)) {
            transleft[0].style.left = "2%"
            transright[0].style.left = "2%"
        }
        if ((document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500)) {
            transleft[1].style.left = "2%"
            transright[1].style.left = "2%"
        }
        if ((document.body.scrollTop > 2950 || document.documentElement.scrollTop > 2950)) {
            transleft[2].style.left = "2%"
            transright[2].style.left = "2%"
        }
        if ((document.body.scrollTop > 3400 || document.documentElement.scrollTop > 3400)) {
            transleft[3].style.left = "2%"
        }
        if ((document.body.scrollTop > cont || document.documentElement.scrollTop > cont)) {
            document.querySelectorAll('.cleft')[0].style.left = "1.75rem"
            document.querySelectorAll('.cright')[0].style.left = "1.75rem"

        }
    }
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector('.navbar').style.backgroundColor = "black"
        document.querySelector('.taptotop').style.display = "block"
    }
    else {
        document.querySelector('.navbar').style.backgroundColor = "rgba(0,0,0,0.5)"
        document.querySelector('.taptotop').style.display = "none"
    }
}

mybtn = document.querySelector('.mybtn')

var disp = document.querySelector('.navbar').children[2]
if (v < 480) {
    function navbardisp() {
        if (disp.classList.contains("nav-items")) {
            disp.classList.add("list3")
            disp.classList.remove("nav-items")
            mybtn.placeholder = "X"
        }
        else {
            mybtn.placeholder = "+"
            disp.classList.add("nav-items")
            disp.classList.remove("list3")
        }
    }
}
if (v > 480 && v < 1024) {
    function navbardisp() {
        if (disp.classList.contains("nav-items")) {
            disp.classList.add("list2")
            disp.classList.remove("nav-items")
            mybtn.placeholder = "X"
        }
        else {
            mybtn.placeholder = "+"
            disp.classList.add("nav-items")
            disp.classList.remove("list2")
        }
    }
}

if (v < 481) {
    function aboutscrl() {
        window.scrollTo(0, 700)
    }
    function placesscrl() {
        window.scrollTo(0, 2000)
    }
    function snapscrl() {
        window.scrollTo(0, 4180)
    }
    function contactscrl() {
        window.scrollTo(0, cont + 100)
    }
}
else if (v > 480 && v < 1023) {
    function aboutscrl() {
        window.scrollTo(0, 650)
    }
    function placesscrl() {
        window.scrollTo(0, 1820)
    }
    function snapscrl() {
        window.scrollTo(0, 3950)
    }
    function contactscrl() {
        window.scrollTo(0, cont)
    }

}
else {
    function aboutscrl() {
        window.scrollTo(0, 700)
    }
    function placesscrl() {
        window.scrollTo(0, 1450)
    }
    function snapscrl() {
        window.scrollTo(0, 3600)
    }
    function contactscrl() {
        window.scrollTo(0, 5400)
    }
}

var wrngname = document.querySelector('#name')
var wrngemail = document.querySelector('#email-id')
var wrngnum = document.querySelector('#number')
var wrngmsg = document.querySelector('#user-ask')
function validate() {
    var result = true;
    var uname = document.queryform.name.value;
    var unum = document.queryform.num.value;
    var uemail = document.queryform.email.value;
    var umsg = document.queryform.msg.value;
    if (uname == null || uname == "") {
        result = false;
        wrngname.style.border = "2px solid red"
        wrngname.placeholder = "invalid username"
        wrngname.style.boxShadow = "0px 0px 10px red"
    }
    else {
        wrngname.style.boxShadow = ""
        wrngname.style.border = ""
    }
    if (uemail == null || uemail == "") {
        result = false;
        wrngemail.style.border = "2px solid red"
        wrngemail.style.boxShadow = "0px 0px 10px red"
        wrngemail.placeholder = "invalid email id"
        
    }
    else {
        wrngemail.style.boxShadow = ""
        wrngemail.style.border = ""
    }
    if (unum == null || unum == "" || isNaN(unum) || unum.length < 10) {
        result = false;
        wrngnum.style.border = "2px solid red"
        wrngnum.placeholder = "invalid phone number"
        wrngnum.style.boxShadow = "0px 0px 10px red"
        
    }
    else {
        wrngnum.style.boxShadow = ""
        wrngnum.style.border = ""
    }
    if (umsg == null || umsg == "") {
        result = false;
        wrngmsg.style.border = "2px solid red"
        wrngmsg.placeholder = "invalid message"
        wrngmsg.style.boxShadow = "0px 0px 10px red"
        
    }
    else {
        wrngmsg.style.boxShadow = ""
        wrngmsg.style.border = ""
    }
    return result;
}
var contactform = document.queryform;
contactform.addEventListener('submit', (e) => {
    var name = document.queryform.name.value;
    var num = document.queryform.num.value;
    var email = document.queryform.email.value;
    var msg = document.queryform.msg.value;
    
    let formData = {
        name,
        email,
        num,
        msg
    }
    // console.log(formData);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Message Sent');
            wrngname.value=""
            wrngemail.value=""
            wrngnum.value=""
            wrngmsg.value=""
            wrngname.placeholder = "enter your name here"
            wrngemail.placeholder= "enter your email id here"
            wrngnum.placeholder= "enter your phone number here"
            wrngmsg.placeholder = "enter your message here"
        } else {
            alert('something went wrong');
        }
    }
    xhr.send(JSON.stringify(formData));
    e.preventDefault();
})
