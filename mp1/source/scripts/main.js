//scroll effect
window.addEventListener('scroll', () => {
    //change the bar height and text fontSize
    let bar = document.getElementById("main-header");
    let text = document.getElementById("main-nav");
    //get in-time Y-offset when scrolling
    let ypos = window.pageYOffset;
    let scrollH = document.body.scrollHeight;
    //change gradually
    let op = Math.max(0.5, 1 - 0.25 * ypos / scrollH);
    let barH = Math.min(10, 10 - 3 * ypos / scrollH);
    let textS = Math.min(1, 1 - 0.2 * ypos / scrollH);
    //navbar enlarge effect
    if (ypos > 100) {
        bar.style.height = `${barH}vh`;
        text.style.fontSize = `${textS}em`;
        bar.style.opacity = op;
    } else {
        bar.style.height = "10vh";
        text.style.fontSize = "1em";
        bar.style.opacity = 1;
    }

    //scroll position indicator (at navbar)
    //let gallery_top = document.getElementById("main-header").offsetHeight - 0.25 * window.innerHeight;
    let gallery_top = 50;
    let about_top = gallery_top + document.getElementById("gallery").offsetHeight - 0.25 * window.innerHeight;
    let contact_top = about_top + document.getElementById("about").offsetHeight;

    console.log(ypos);
    if (ypos < gallery_top) {

    }
    else
        if (ypos >= gallery_top & ypos < about_top) {
            document.getElementById("nav_gallery").style.backgroundColor = "#d3d3d3";
            document.getElementById("nav_gallery").style.opacity = 0.6;
            document.getElementById("nav_gallery").style.color = "#e03d02";
            document.getElementById("nav_about").style.backgroundColor = "transparent";
            document.getElementById("nav_contact").style.backgroundColor = "transparent";
            document.getElementById("nav_about").style.color = "white";
            document.getElementById("nav_about").style.opacity = 1;
            document.getElementById("nav_contact").style.color = "white";
            document.getElementById("nav_contact").style.opacity = 1;
        }
        else if (ypos < contact_top) {
            document.getElementById("nav_about").style.backgroundColor = "#d3d3d3";
            document.getElementById("nav_about").style.opacity = 0.6;
            document.getElementById("nav_about").style.color = "#e03d02";
            document.getElementById("nav_gallery").style.backgroundColor = "transparent";
            document.getElementById("nav_contact").style.backgroundColor = "transparent";
            document.getElementById("nav_gallery").style.color = "white";
            document.getElementById("nav_gallery").style.opacity = 1;
            document.getElementById("nav_contact").style.color = "white";
            document.getElementById("nav_contact").style.opacity = 1;
        }
        else {
            document.getElementById("nav_contact").style.backgroundColor = "#d3d3d3";
            document.getElementById("nav_contact").style.opacity = 0.6;
            document.getElementById("nav_contact").style.color = "#e03d02";
            document.getElementById("nav_gallery").style.backgroundColor = "transparent";
            document.getElementById("nav_about").style.backgroundColor = "transparent";
            document.getElementById("nav_about").style.color = "white";
            document.getElementById("nav_about").style.opacity = 1;
            document.getElementById("nav_gallery").style.color = "white";
            document.getElementById("nav_gallery").style.opacity = 1;
        }
});

//modal effect
window.onload = function () {
    //get modal elem
    let modal = document.getElementById("gallery-modal");
    let modalContent1 = document.getElementById("gallery-modal-1");
    let modalContent2 = document.getElementById("gallery-modal-2");
    let modalContent3 = document.getElementById("gallery-modal-3");
    let modalContent4 = document.getElementById("gallery-modal-4");
    //get open modal btn
    let modalBtn1 = document.getElementById("modal-link-1");
    let modalBtn2 = document.getElementById("modal-link-2");
    let modalBtn3 = document.getElementById("modal-link-3");
    let modalBtn4 = document.getElementById("modal-link-4");
    //get close btn
    let closeBtn1 = document.getElementById("close-btn-1");
    let closeBtn2 = document.getElementById("close-btn-2");
    let closeBtn3 = document.getElementById("close-btn-3");
    let closeBtn4 = document.getElementById("close-btn-4");
    //listen for click
    modalBtn1.addEventListener("click", openModal1);
    modalBtn2.addEventListener("click", openModal2);
    modalBtn3.addEventListener("click", openModal3);
    modalBtn4.addEventListener("click", openModal4);
    //listen for the close action
    closeBtn1.addEventListener("click", closeModal1);
    closeBtn2.addEventListener("click", closeModal2);
    closeBtn3.addEventListener("click", closeModal3);
    closeBtn4.addEventListener("click", closeModal4);

    function openModal1() {
        modalContent1.style.display = "block";
        modal.style.display = "block";
    }
    function openModal2() {
        modalContent2.style.display = "block";
        modal.style.display = "block";
    }
    function openModal3() {
        modalContent3.style.display = "block";
        modal.style.display = "block";
    }
    function openModal4() {
        modalContent4.style.display = "block";
        modal.style.display = "block";
    }
    //close function
    function closeModal1() {
        modal.style.display = "none";
        modalContent1.style.display = "none";
    }
    function closeModal2() {
        modal.style.display = "none";
        modalContent2.style.display = "none";
    }
    function closeModal3() {
        modal.style.display = "none";
        modalContent3.style.display = "none";
    }
    function closeModal4() {
        modal.style.display = "none";
        modalContent4.style.display = "none";
    }
}