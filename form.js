const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


function sendEmail() {
    const bodyMessage = `Name: ${fullName.value} <br> Email: ${email.value} <br> Phone Number: ${phone.value} <br> Message: ${message.value}`

    Email.send({
        SecureToken: "5e03771f-6596-40f9-8d08-e67e76b2b65d",
        // Host : "smtp.elasticemail.com",
        // Username : "chrisgeorge0425@gmail.com",
        // Password : "D5D2C27459E31F100671501A3EA6803E5CB2",
        To : 'chrisgeorge0425@gmail.com',
        From : "chrisgeorge0425@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

    form.reset();
    return false;
})

function openMenu() {
  document.getElementById('mobileMenu').style.display = 'flex';
}

function closeMenu() {
  document.getElementById('mobileMenu').style.display = 'none';
}

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