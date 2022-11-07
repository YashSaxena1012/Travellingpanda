function scrltop() {
    window.scrollTo(0, 0)
}
function homescrl() {
    window.scrollTo(0, 0)
} 
var v = window.innerWidth
if (v <= 480) {
    function aboutscrl() {
        window.scrollTo(0, 240)
    }
    function tourscrl() {
        window.scrollTo(0, 2750)
    }
    function ticketscrl() {
        window.scrollTo(0, 5900)
    }
    function nearbyscrl() {
        window.scrollTo(0, 11150)
    }
}
if (v >= 1024) {
    function aboutscrl() {
        window.scrollTo(0, 600)
    }
    function tourscrl() {
        window.scrollTo(0, 2300)
    }
    function ticketscrl() {
        window.scrollTo(0, 4000)
    }
    function nearbyscrl() {
        window.scrollTo(0, 6650)

    }
}
if (v > 481 && v < 1024) {
    function aboutscrl() {
        window.scrollTo(0, 600)
    }
    function tourscrl() {
        window.scrollTo(0, 2410)
    }
    function ticketscrl() {
        window.scrollTo(0, 4800)
    }
    function nearbyscrl() {
        window.scrollTo(0, 7450)

    }

}

var images = [];
var time = 2000;
let i = 0;
images[0] = 'https://th-thumbnailer.cdn-si-edu.com/jzm3Sdi-A4nHAwY_q8LAoOVMKJc=/1072x720/filters:no_upscale():focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg';
images[1] = 'https://images.adsttc.com/media/images/556f/0fc5/e58e/ce95/6600/023b/large_jpg/Aerialsmalls_11.jpg?1433341888';
images[2] = 'https://static.toiimg.com/photo/85488646.cms';
images[3] = 'https://i.pinimg.com/736x/4a/cc/f5/4accf583bb2d7237b8c020043d7b0efd.jpg';
images[4] = 'https://cdn.getyourguide.com/img/tour/5cc5c21db1d50.jpeg/98.jpg';
images[5] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Taj_Mahal_in_March_2004.jpg/583px-Taj_Mahal_in_March_2004.jpg';
images[6] = 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/ca/ef.jpg';
images[7] = 'https://i.dawn.com/primary/2022/01/61d1207608505.jpg';
images[8] = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/india-uttar-pradesh-aerial-view-of-taj-mahal-michele-falzone.jpg';

function changeimg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i += 1;
    } else { i = 0; }
    setTimeout("changeimg()", time);
}
window.onload = changeimg;

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.querySelector('.taptotop').style.display = "block"
        document.querySelector('.nav').style.backgroundColor = "black"
    }
    else {
        document.querySelector('.nav').style.backgroundColor = "rgba(0,0,0,0.5)"
        document.querySelector('.taptotop').style.display = "none"
    }
    if (v <= 480) {
        if (document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900) {
            document.querySelector('.image2').style.left = 0
        }

        if (document.body.scrollTop > 4800 || document.documentElement.scrollTop > 4800) {
            document.querySelector('.p2').children[0].style.left = "10rem"
            document.querySelector('.p2').children[1].style.left = "20rem"
        }
    }
    if (v >= 1024) {
        if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
            document.querySelector('.image2').style.left = 0
        }
        if (document.body.scrollTop > 3100 || document.documentElement.scrollTop > 3100) {
            document.querySelector('.p2').children[0].style.left = 0
            document.querySelector('.p2').children[1].style.left = 0
        }
        if (document.body.scrollTop > 3700 || document.documentElement.scrollTop > 3700)
            document.querySelector('.map').style.left = "10rem"
        if (document.body.scrollTop > 4350 || document.documentElement.scrollTop > 4350)
            document.querySelector('.links').style.top = "18rem"
    }
    if (v >= 481 && v <= 1023)
        if (document.body.scrollTop > 2350 || document.documentElement.scrollTop > 2350)
            document.querySelector('.image2').style.left = "0rem"
    if (document.body.scrollTop > 3200 || document.documentElement.scrollTop > 3200) {
        document.querySelector('.p2').children[0].style.left = 0
        document.querySelector('.p2').children[1].style.left = 0
    }
    if (document.body.scrollTop > 5000 || document.documentElement.scrollTop > 5000)
        document.querySelector('.links').style.top = "18rem"
    if (document.body.scrollTop > 4150 || document.documentElement.scrollTop > 4150)
        document.querySelector('.map').style.left = 0
}
var mybtn = document.querySelector('.mybtn')

if (v <= 480) {
    var disp = document.querySelector('.nav').children[2]
    function navbardisp() {
        if (disp.classList.contains("nav-items")) {
            disp.classList.add("list2")
            disp.classList.remove("nav-items")
            mybtn.innerText = "X"
        }
        else {
            mybtn.innerText = "+"
            disp.classList.add("nav-items")
            disp.classList.remove("list2")
        }
    }
}
if (v >= 481 && v <= 1023) {
    var disp = document.querySelector('.nav').children[2]
    function navbardisp() {
        if (disp.classList.contains("nav-items")) {
            disp.classList.add("list3")
            disp.classList.remove("nav-items")
            mybtn.innerText = "X"
        }
        else {
            mybtn.innerText = "+"
            disp.classList.add("nav-items")
            disp.classList.remove("list3")
        }
    }
}