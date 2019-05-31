window.addEventListener('scroll', () => {
    //change the bar height and text fontSize
    let bar = document.getElementById("main-header");
    let text = document.getElementById("main-nav");
    //get in-time Y-offset when scrolling
    let ypos = window.pageYOffset;
    let scrollH = document.body.scrollHeight;
    //change gradually
    let op = Math.max(0.5, 1 - 0.5 * ypos / scrollH);
    let barH = Math.min(12, 10 + 2 * ypos / scrollH);
    let textS = Math.min(1.1, 1 + 0.1 * ypos / scrollH);
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
        document.getElementById("nav_gallery").style.backgroundColor = "transparent";
        document.getElementById("nav_gallery").style.color = "white";
        document.getElementById("nav_gallery").style.opacity = 1;
        document.getElementById("nav_about").style.backgroundColor = "transparent";
        document.getElementById("nav_about").style.color = "white";
        document.getElementById("nav_about").style.opacity = 1;
        document.getElementById("nav_contact").style.backgroundColor = "transparent";
        document.getElementById("nav_contact").style.color = "white";
        document.getElementById("nav_contact").style.opacity = 1;
    }
    else if (ypos < about_top) {
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