function openMenu() {
    document.getElementById('mobileMenu').style.display = 'flex';
}

function closeMenu() {
    document.getElementById('mobileMenu').style.display = 'none';
}

// Copyright //
 const year = document.getElementById("year")
 const thisYear = new Date().getFullYear()
 year.setAttribute("datetime", thisYear)
 year.textContent = thisYear

  // GSAP Fade-In Animation Code
  gsap.to(".effect3d", {
    duration: 1.5,
    textShadow: "0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px rgba(0, 0, 0, .15)",
    ease: "sine.inOut"
});
gsap.from(".leFadeIn span", {
        duration: 1,
        autoAlpha: 0,
        ease: "power4.in",
        stagger: 0.2 // Stagger the animations
    });
